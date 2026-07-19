"use client";

// The Path — the site's signature device (ledger D1, D3, D7, D16).
//
// "The path surfaces" (D16, superseding D10): the line now appears only
// through the seven model nodes (walnut — the root line). D30 retires the
// terminal appearance so Get Involved can close with documentary fieldwork.
//
// Single-SVG rule (D15): the path and taper dots are rendered inside THIS
// svg and positioned from the path's own geometry (getPointAtLength), never
// as separately placed DOM.
//
// Geometry per appearance is a measured-lane polyline (D9) smoothed
// Catmull-Rom → cubic Béziers; each appearance is one <path>, so a scroll
// frame repaints only the segment currently drawing. Reduced motion renders
// it fully drawn and static. No JS: nothing renders — the
// path is progressive enhancement, never withheld content.

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const NS = "http://www.w3.org/2000/svg";
const STROKE_LIGHT = "var(--color-walnut)";
const STROKE_DARK = "var(--color-olive)";
const STROKE_WIDTH = 2;
/** The path tip tracks this fraction of the viewport height ("reading line"). */
const TIP_VIEWPORT_FRACTION = 0.72;
/** Per-frame lerp toward the target tip — a patient, rooted lag. */
const TIP_LERP = 0.22;
/** Taper dots: distance along the tangent, radius, and opacity per dot. */
const TAPER = [
  { d: 13, r: 2.1, a: 0.65 },
  { d: 27, r: 1.6, a: 0.42 },
  { d: 43, r: 1.2, a: 0.25 },
];
type Zone = "light" | "dark";

interface Waypoint {
  x: number;
  y: number;
  /** Model node element to pulse when the tip passes through this point. */
  nodeEl?: HTMLElement;
  /** Suppress procedural sway after this point (tight corridors). */
  noSway?: boolean;
}

interface Appearance {
  pts: Waypoint[];
  zone: Zone;
  /** Emerge from taper dots where the segment begins. */
  startDots: boolean;
  /** Taper into dots; the root arrival intentionally does not taper. */
  endDots: boolean;
}

interface Segment {
  el: SVGPathElement;
  startLen: number; // cumulative virtual length where this segment begins
  len: number;
  lastOffset: number;
}

interface TaperDot {
  el: SVGCircleElement;
  at: number; // virtual length threshold
  on: boolean;
}

interface Built {
  segments: Segment[];
  totalLen: number;
  virtualLen: number;
  tableY: number[]; // monotone "reveal" document Y per sample
  tableL: number[]; // cumulative virtual length per sample
  nodes: { len: number; el: HTMLElement; done: boolean }[];
  dots: TaperDot[];
  mainTop: number;
}

export function JourneyPath() {
  const svgRef = useRef<SVGSVGElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const main = svg.closest("main");
    if (!main) return;

    let built: Built | null = null;
    let raf = 0;
    let current = 0;
    let target = 0;
    let destroyed = false;

    /** Document-space position of an element, ignoring transforms (Reveal). */
    function docPos(el: HTMLElement, root: HTMLElement) {
      let x = 0;
      let y = 0;
      let e: Element | null = el;
      while (e instanceof HTMLElement && e !== root) {
        x += e.offsetLeft;
        y += e.offsetTop;
        e = e.offsetParent;
      }
      return { x, y, w: el.offsetWidth, h: el.offsetHeight };
    }

    function visible(el: HTMLElement) {
      return el.getClientRects().length > 0;
    }

    function catmullRomToBezier(pts: Waypoint[]): string[] {
      const cmds: string[] = [];
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(0, i - 1)];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[Math.min(pts.length - 1, i + 2)];
        const c1x = p1.x + (p2.x - p0.x) / 6;
        const c1y = p1.y + (p2.y - p0.y) / 6;
        const c2x = p2.x - (p3.x - p1.x) / 6;
        const c2y = p2.y - (p3.y - p1.y) / 6;
        cmds.push(
          `C ${rd(c1x)} ${rd(c1y)} ${rd(c2x)} ${rd(c2y)} ${rd(p2.x)} ${rd(p2.y)}`,
        );
      }
      return cmds;
    }

    function rd(n: number) {
      return Math.round(n * 10) / 10;
    }

    /** Insert gentle sways so long straight drops wind like the logo's path. */
    function withSways(pts: Waypoint[], amp: number): Waypoint[] {
      const out: Waypoint[] = [];
      let dir = 1;
      for (let i = 0; i < pts.length; i++) {
        out.push(pts[i]);
        const next = pts[i + 1];
        if (!next || pts[i].noSway) continue;
        if (pts[i].nodeEl || next.nodeEl) continue;
        const dy = next.y - pts[i].y;
        if (dy > 340) {
          const a = Math.min(amp, dy * 0.12) * dir;
          out.push({ x: (pts[i].x + next.x) / 2 + a, y: pts[i].y + dy / 2 });
          dir = -dir;
        }
      }
      return out;
    }

    // Lane discipline (D9) + surfacing (D16): the path's sole active
    // appearance is the model root line through all seven nodes. D30 retires
    // the terminal/root appearance so the human bookend remains documentary.
    function buildAppearances(): Appearance[] | null {
      const W = main!.clientWidth;
      const rect = (sel: string) => {
        const el = main!.querySelector<HTMLElement>(sel);
        return el && visible(el) ? docPos(el, main!) : null;
      };
      const story = rect("#story");
      const model = rect("#model");
      if (!story || !model) return null;

      const cardsOf = (id: string) => rect(`#${id} [data-path-cards]`);
      const lessonCards = cardsOf("story");
      const modelB = model.y + model.h;

      const nodes = Array.from(
        main!.querySelectorAll<HTMLElement>("[data-path-node]"),
      ).filter(visible);
      const nodeCs = nodes
        .map((el) => {
          const p = docPos(el, main!);
          return { el, cx: p.x + p.w / 2, cy: p.y + p.h / 2 };
        })
        .sort((a, b) => a.cy - b.cy || a.cx - b.cx);
      const first = nodeCs[0];
      const last = nodeCs[nodeCs.length - 1];
      if (!first || !last) return null;
      const nodePts: Waypoint[] = [];

      const stacked = W < 1024;

      if (stacked) {
        const g = W < 640 ? 9 : 16;
        const entryY = lessonCards ? lessonCards.y + lessonCards.h + 24 : model.y + 64;
        for (let i = 0; i < nodeCs.length; i++) {
          const n = nodeCs[i];
          nodePts.push({ x: n.cx, y: n.cy, nodeEl: n.el });
          const nx = nodeCs[i + 1];
          if (nx) nodePts.push({ x: n.cx + 7, y: (n.cy + nx.cy) / 2 });
        }
        return [
          {
            zone: "light",
            startDots: true,
            endDots: true,
            pts: [
              { x: g + 2, y: entryY, noSway: true },
              { x: g + 2, y: model.y + 64, noSway: true },
              { x: g, y: first.cy - 64, noSway: true },
              { x: first.cx - 3, y: first.cy - 22, noSway: true },
              ...nodePts,
              { x: last.cx + 5, y: last.cy + 80, noSway: true },
              { x: g + 4, y: modelB - 40, noSway: true },
            ],
          },
        ];
      }

      const boxW = Math.min(1120, W);
      const pad = 24;
      const contentL = (W - boxW) / 2 + pad;
      const contentW = boxW - 2 * pad;
      const contentR = contentL + contentW;

      // Desktop ≥ 1024
      const lessonsB = lessonCards
        ? lessonCards.y + lessonCards.h
        : model.y - 100;
      const entryLane = Math.max(16, contentL - 30);
      const exitLane = Math.min(W - 14, contentR + 108);

      for (let i = 0; i < nodeCs.length; i++) {
        const n = nodeCs[i];
        nodePts.push({ x: n.cx, y: n.cy, nodeEl: n.el });
        const nx = nodeCs[i + 1];
        if (nx) nodePts.push({ x: (n.cx + nx.cx) / 2, y: n.cy + 12 });
      }

      return [
        {
          zone: "light",
          startDots: true,
          endDots: true,
          pts: [
            // Emerge from the taper dots beneath the left lesson card and
            // descend a tight lane just left of the heading — no sweep out to
            // the page edge (ledger D25 removes the D9 left arc); D15 lanes.
            {
              x: (lessonCards ? lessonCards.x : contentL) + 22,
              y: lessonsB + 40,
              noSway: true,
            },
            { x: entryLane, y: model.y + 66, noSway: true },
            { x: entryLane, y: first.cy - 74, noSway: true },
            { x: first.cx - 48, y: first.cy - 10, noSway: true },
            ...nodePts,
            // Leave the last node moving right almost at node level so the
            // descent is already in the outer margin before it reaches the
            // Sustain text rows — clears the column by ~100px (D15 lane
            // rules; the 6px near-miss is re-routed, ledger D24).
            {
              x: Math.min(W - 18, last.cx + 145),
              y: last.cy + 12,
              noSway: true,
            },
            { x: Math.min(W - 50, exitLane + 20), y: last.cy + 78, noSway: true },
          ],
        },
      ];
    }

    function build(): Built | null {
      const g = svg!.querySelector("g");
      if (!g) return null;
      g.replaceChildren();

      const apps = buildAppearances();
      if (!apps || apps.length === 0) return null;
      const W = main!.clientWidth;
      const amp = W < 1024 ? 5 : 32;

      const segments: Segment[] = [];
      const dots: TaperDot[] = [];
      const tableY: number[] = [];
      const tableL: number[] = [];
      const sampleX: number[] = [];
      const sampleY: number[] = [];
      const nodeWps: { x: number; y: number; el: HTMLElement }[] = [];
      let acc = 0;
      let runMax = -Infinity;

      const mkDot = (
        x: number,
        y: number,
        radius: number,
        alpha: number,
        color: string,
        delayMs: number,
        at: number,
      ) => {
        const c = document.createElementNS(NS, "circle") as SVGCircleElement;
        c.setAttribute("cx", String(rd(x)));
        c.setAttribute("cy", String(rd(y)));
        c.setAttribute("r", String(radius));
        c.setAttribute("fill", color);
        c.setAttribute("fill-opacity", String(alpha));
        c.style.opacity = "0";
        c.style.transition = `opacity 300ms ease ${delayMs}ms`;
        g.appendChild(c);
        dots.push({ el: c, at, on: false });
      };

      for (const app of apps) {
        const pts = withSways(app.pts, amp);
        if (pts.length < 2) continue;
        const cmds = catmullRomToBezier(pts);
        const d = `M ${rd(pts[0].x)} ${rd(pts[0].y)} ` + cmds.join(" ");
        const color = app.zone === "dark" ? STROKE_DARK : STROKE_LIGHT;
        const p = document.createElementNS(NS, "path");
        p.setAttribute("d", d);
        p.setAttribute("fill", "none");
        p.setAttribute("stroke", color);
        p.setAttribute("stroke-width", String(STROKE_WIDTH));
        p.setAttribute("stroke-linecap", "round");
        g.appendChild(p);
        const len = p.getTotalLength();
        if (!len) continue;
        p.style.strokeDasharray = `${len + 2}`;
        segments.push({ el: p, startLen: acc, len, lastOffset: -1 });

        // Samples: scroll table + node mapping cache (single expensive pass).
        const N = Math.min(240, Math.max(40, Math.round(len / 32)));
        for (let i = 0; i <= N; i++) {
          const l = (len * i) / N;
          const pt = p.getPointAtLength(l);
          runMax = Math.max(runMax, pt.y);
          tableY.push(runMax);
          tableL.push(acc + l);
          sampleX.push(pt.x);
          sampleY.push(pt.y);
        }
        for (const wp of app.pts) {
          if (wp.nodeEl) nodeWps.push({ x: wp.x, y: wp.y, el: wp.nodeEl });
        }

        // Taper dots: the line continues underground beyond each end.
        if (app.startDots) {
          const p0 = p.getPointAtLength(0);
          const pn = p.getPointAtLength(Math.min(8, len));
          const dx = p0.x - pn.x;
          const dy = p0.y - pn.y;
          const m = Math.hypot(dx, dy) || 1;
          // Farthest dot lights first — the line emerges toward its start.
          TAPER.forEach((t, i) =>
            mkDot(
              p0.x + (dx / m) * t.d,
              p0.y + (dy / m) * t.d,
              t.r,
              t.a,
              color,
              (TAPER.length - 1 - i) * 70,
              acc + 1,
            ),
          );
        }
        if (app.endDots) {
          const pe = p.getPointAtLength(len);
          const pp = p.getPointAtLength(Math.max(0, len - 8));
          const dx = pe.x - pp.x;
          const dy = pe.y - pp.y;
          const m = Math.hypot(dx, dy) || 1;
          // Nearest dot lights first — the line sinks away from its end.
          TAPER.forEach((t, i) =>
            mkDot(
              pe.x + (dx / m) * t.d,
              pe.y + (dy / m) * t.d,
              t.r,
              t.a,
              color,
              i * 70,
              acc + len - 1,
            ),
          );
        }

        acc += len;
      }
      if (!segments.length) return null;
      const totalLen = acc;

      // Make reveal Y strictly increasing: spread plateaus (e.g. the
      // horizontal node run) linearly between neighboring distinct values.
      const M = tableY.length - 1;
      let i0 = 0;
      while (i0 < M) {
        let j = i0;
        while (j + 1 <= M && tableY[j + 1] - tableY[i0] < 2) j++;
        if (j > i0) {
          const yStart = tableY[i0];
          const yEnd = j + 1 <= M ? tableY[j + 1] : yStart + 240;
          for (let k = i0; k <= j; k++) {
            tableY[k] = yStart + ((yEnd - yStart) * (k - i0)) / (j - i0 + 1);
          }
        }
        i0 = j + 1;
      }

      // Node trigger lengths: nearest cached sample to each node waypoint.
      const nodeList: Built["nodes"] = [];
      for (const wp of nodeWps) {
        let best = 0;
        let bestD = Infinity;
        for (let i = 0; i < sampleX.length; i++) {
          const d2 = (sampleX[i] - wp.x) ** 2 + (sampleY[i] - wp.y) ** 2;
          if (d2 < bestD) {
            bestD = d2;
            best = tableL[i];
          }
        }
        nodeList.push({ len: best, el: wp.el, done: false });
      }

      // The drawn length is the whole journey; D30/D32 end it after the
      // Model instead of extending it toward a terminal metaphor.
      const virtualLen = totalLen;

      let mainTop = 0;
      let e: Element | null = main;
      while (e instanceof HTMLElement) {
        mainTop += e.offsetTop;
        e = e.offsetParent;
      }

      return {
        segments,
        totalLen,
        virtualLen,
        tableY,
        tableL,
        nodes: nodeList,
        dots,
        mainTop,
      };
    }

    function computeTarget(): number {
      if (!built) return 0;
      const tipY =
        window.scrollY - built.mainTop + window.innerHeight * TIP_VIEWPORT_FRACTION;
      const { tableY, tableL } = built;
      if (tipY <= tableY[0]) return 0;
      if (tipY >= tableY[tableY.length - 1]) return built.virtualLen;
      let lo = 0;
      let hi = tableY.length - 1;
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (tableY[mid] <= tipY) lo = mid;
        else hi = mid;
      }
      const t = (tipY - tableY[lo]) / (tableY[hi] - tableY[lo] || 1);
      return tableL[lo] + t * (tableL[hi] - tableL[lo]);
    }

    function apply(len: number, animatePulse: boolean) {
      if (!built) return;
      for (const s of built.segments) {
        const drawn = Math.max(0, Math.min(s.len, len - s.startLen));
        const offset = s.len + 2 - drawn - 1;
        if (Math.abs(offset - s.lastOffset) > 0.25) {
          s.el.style.strokeDashoffset = String(offset);
          s.lastOffset = offset;
        }
      }
      for (const d of built.dots) {
        const on = len >= d.at;
        if (on !== d.on) {
          d.on = on;
          d.el.style.opacity = on ? "1" : "0";
        }
      }
      for (const n of built.nodes) {
        if (!n.done && len >= n.len - 1) {
          n.done = true;
          if (animatePulse) n.el.classList.add("rr-pulse");
        }
      }
    }

    function tick() {
      raf = 0;
      if (!built || destroyed) return;
      const diff = target - current;
      if (Math.abs(diff) < 0.5) {
        current = target;
        apply(current, true);
        return;
      }
      current += diff * TIP_LERP;
      apply(current, true);
      raf = requestAnimationFrame(tick);
    }

    function onScroll() {
      if (!built) return;
      target = computeTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function rebuild(initial = false) {
      const next = build();
      if (!next) return;
      built = next;
      if (reduced) {
        current = target = built.virtualLen;
        apply(built.virtualLen, false);
        return;
      }
      target = computeTarget();
      // Snap to the correct progress — a mid-page reload should never
      // animate the line from the top.
      if (initial) current = target;
      apply(current, false);
      if (!raf && Math.abs(target - current) >= 0.5) {
        raf = requestAnimationFrame(tick);
      }
    }

    // Build after fonts settle to avoid measuring twice; if fonts are
    // already loaded this runs in the same frame. The path is decorative,
    // so deferring the first build off the critical hydration task is free.
    let buildTimer = 0;
    const initialBuild = () => {
      if (destroyed) return;
      buildTimer = window.setTimeout(() => rebuild(true), 30);
    };
    if (document.fonts && document.fonts.status !== "loaded") {
      document.fonts.ready.then(initialBuild);
    } else {
      initialBuild();
    }

    let resizeTimer = 0;
    let lastSize = `${main.clientWidth}x${main.clientHeight}`;
    const scheduleRebuild = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const size = `${main.clientWidth}x${main.clientHeight}`;
        if (size === lastSize || destroyed) return;
        lastSize = size;
        rebuild();
      }, 200);
    };
    window.addEventListener("resize", scheduleRebuild);
    const ro = new ResizeObserver(scheduleRebuild);
    ro.observe(main);
    if (!reduced) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      destroyed = true;
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(buildTimer);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", scheduleRebuild);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [reduced]);

  return (
    <svg
      ref={svgRef}
      className="rr-journey pointer-events-none absolute inset-0 z-[1] h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <g />
    </svg>
  );
}

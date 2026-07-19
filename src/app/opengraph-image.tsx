import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Social share image (ledger D23). Built over og-background.webp — the
// canopy/roots frame with the winding path on the right — leaving the empty
// left two-thirds for "We build what stays." and the wordmark, set in
// Fraunces cream in code. Statically generated and cached at build.

export const alt = "Rebuild & Rise — We build what stays";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FOREST = "#19351F";
const CREAM = "#F7F1E5";
const LEAF = "#A1AA78";

export default async function OpengraphImage() {
  const [bg, fraunces] = await Promise.all([
    readFile(join(process.cwd(), "src/og-assets/og-background.png")),
    // Static Fraunces 500 (Satori can't instance variable fonts).
    readFile(join(process.cwd(), "src/og-assets/Fraunces-Medium.woff")),
  ]);
  const bgSrc = `data:image/png;base64,${bg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: FOREST,
        }}
      >
        <img
          src={bgSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 96px",
            width: "760px",
            height: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 40,
              color: LEAF,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Rebuild &amp; Rise
          </div>
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 92,
              lineHeight: 1.02,
              color: CREAM,
            }}
          >
            We build what stays.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 500, style: "normal" },
      ],
    },
  );
}

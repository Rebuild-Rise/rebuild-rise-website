import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Footer,
  GetInvolved,
  Header,
  Hero,
  Interlude,
  Model,
  Pillars,
  Story,
  WhereWeAre,
  WhoWeServe,
} from "@/components/sections";
import { JourneyPath } from "@/components/path/JourneyPath";
import { ArchDefs, Button, Container } from "@/components/ui";
import {
  getInvolved,
  hero,
  images,
  interlude,
  model,
  pillars,
  story,
  whereWeAre,
  whoWeServe,
} from "@/content/siteContent";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Homepage concept lab | Rebuild & Rise",
  robots: { index: false, follow: false, nocache: true },
};

const concepts = [
  { id: "baseline", label: "Current baseline" },
  { id: "abuja-chapter", label: "The Abuja Chapter" },
  { id: "three-movements", label: "Three Movements" },
  { id: "under-canopy", label: "Under the Canopy" },
  { id: "quiet-declaration", label: "Quiet Declaration" },
] as const;

type ConceptId = (typeof concepts)[number]["id"];

function LabToolbar({ active }: { active: ConceptId }) {
  return (
    <aside className={styles.toolbar} aria-label="Homepage concept comparison">
      <span className={styles.toolbarLabel}>Homepage lab</span>
      <nav aria-label="Concepts" className={styles.toolbarLinks}>
        {concepts.map((concept) => (
          <Link
            key={concept.id}
            href={`/styleguide/homepage-lab?concept=${concept.id}`}
            aria-current={active === concept.id ? "page" : undefined}
            className={active === concept.id ? styles.toolbarActive : undefined}
          >
            {concept.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

function PrototypeHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <header className={tone === "dark" ? styles.headerDark : styles.headerLight}>
      <Container className={styles.prototypeHeaderInner}>
        <Link href="/" className={styles.prototypeWordmark}>
          <Image
            src="/rebuild-rise-logo-header.webp"
            alt="Rebuild & Rise Humanitarian Initiative"
            width={68}
            height={68}
            unoptimized
          />
        </Link>
        <nav aria-label="Prototype navigation" className={styles.prototypeNav}>
          <Link href="#lab-origin">Origin</Link>
          <Link href="#lab-model">Our model</Link>
          <Link href="#lab-programs">Program areas</Link>
          <Link href="#lab-finale">Get involved</Link>
        </nav>
        <details className={styles.prototypeMenu}>
          <summary>Menu</summary>
          <nav aria-label="Prototype mobile navigation">
            <Link href="#lab-origin">Origin</Link>
            <Link href="#lab-model">Our model</Link>
            <Link href="#lab-programs">Program areas</Link>
            <Link href="#lab-finale">Get involved</Link>
          </nav>
        </details>
        <Link className={styles.prototypeNavAction} href={hero.secondaryCta.href}>
          Partner with us
        </Link>
      </Container>
    </header>
  );
}

function StatusLine() {
  return (
    <div className={styles.statusLine}>
      <span>{hero.status.label}</span>
      {hero.status.items.map((item) => (
        <strong key={item}>{item}</strong>
      ))}
    </div>
  );
}

function HeroActions({ dark = false }: { dark?: boolean }) {
  return (
    <div className={styles.heroActions}>
      <Button theme={dark ? "dark" : "light"} href={hero.primaryCta.href}>
        {hero.primaryCta.label}
      </Button>
      <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label} →</Link>
    </div>
  );
}

function Figure({
  imageKey,
  className,
  priority = false,
}: {
  imageKey: keyof typeof images;
  className?: string;
  priority?: boolean;
}) {
  const image = images[imageKey];
  return (
    <figure className={className}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 767px) 100vw, 1100px"
        priority={priority}
      />
      <figcaption>
        <span>{image.place}</span>
        <span>{image.stamp}</span>
      </figcaption>
    </figure>
  );
}

function AudienceTransition({ statement }: { statement: string }) {
  return (
    <section className={styles.audience} aria-labelledby="lab-audience-heading">
      <Container>
        <div className={styles.audienceIntro}>
          <div>
            <p className={styles.eyebrow}>{whoWeServe.eyebrow}</p>
            <h2 id="lab-audience-heading">{whoWeServe.heading}</h2>
          </div>
          <p>{statement}</p>
        </div>
        <div className={styles.audienceRows}>
          {whoWeServe.cards.map((card, index) => (
            <article key={card.title}>
              <span>0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OriginBeginning({ mode }: { mode: ConceptId }) {
  return (
    <section id="lab-origin" className={styles.origin}>
      <Container>
        <div className={styles.originIntro}>
          <div>
            <p className={styles.eyebrow}>{story.eyebrow}</p>
            <h2>{story.heading}</h2>
          </div>
          <p>{story.body}</p>
        </div>
        {mode !== "three-movements" ? (
          <div className={styles.originPhotos} data-mode={mode}>
            <Figure imageKey="packingTeam" className={styles.originLead} />
            <Figure imageKey="packingWarmlight" className={styles.originSupport} />
            <Figure imageKey="mealsPrepared" className={styles.originDetail} />
          </div>
        ) : null}
        <div className={styles.lessonStrip}>
          <p className={styles.eyebrow}>{story.lessonsEyebrow}</p>
          <div>
            {story.lessons.map((lesson, index) => (
              <article key={lesson.modelStep}>
                <span>0{index + 1}</span>
                <h3>“{lesson.quote}”</h3>
                <p>{lesson.maps}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ModelStoryboard({ mode }: { mode: ConceptId }) {
  return (
    <section id="lab-model" className={styles.model} data-mode={mode}>
      <Container>
        <p className={styles.eyebrow}>{model.eyebrow}</p>
        <h2>{model.heading}</h2>
        <p className={styles.modelIntro}>{model.intro}</p>
        <div className={styles.modelRoute}>
          {model.steps.map((step, index) => (
            <article key={step.id} className={step.lessonBorn ? styles.lessonBorn : undefined}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.name}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <p className={styles.modelClosing}>{model.closing}</p>
      </Container>
    </section>
  );
}

function LaterRhythm({ mode }: { mode: ConceptId }) {
  return (
    <>
      <section className={styles.interlude}>
        <Container>
          <p>{interlude.line1}</p>
          <p>{interlude.line2}</p>
        </Container>
      </section>
      <section id="lab-programs" className={styles.programs} data-mode={mode}>
        <Container>
          <div className={styles.programsIntro}>
            <div>
              <p className={styles.eyebrow}>{pillars.eyebrow}</p>
              <h2>{pillars.heading}</h2>
            </div>
            <ol>
              {pillars.cards.map((card, index) => (
                <li key={card.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                  <Link href={card.href}>{pillars.viewBriefLabel} →</Link>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
      <section className={styles.pilot}>
        <Container>
          <div className={styles.pilotHeading}>
            <div>
              <p className={styles.eyebrow}>{whereWeAre.eyebrow}</p>
              <h2>{whereWeAre.heading}</h2>
            </div>
            <p>{whereWeAre.body}</p>
          </div>
          <div className={styles.pilotLedger}>
            <div>
              <span>{whereWeAre.statusLabel}</span>
              <strong>{whereWeAre.statusState}</strong>
            </div>
            <ol>
              {whereWeAre.pilotSteps.map((step, index) => (
                <li key={step}><span>0{index + 1}</span>{step}</li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}

function Finale({ mode }: { mode: ConceptId }) {
  return (
    <section id="lab-finale" className={styles.finale} data-mode={mode}>
      <Container>
        <div className={styles.finaleIntro}>
          <div>
            <p className={styles.eyebrow}>{getInvolved.eyebrow}</p>
            <h2>{getInvolved.heading}</h2>
            <p>{getInvolved.intro}</p>
          </div>
          <Figure imageKey="groupTree02" className={styles.finalePhoto} />
        </div>
        <div className={styles.finalePaths}>
          {getInvolved.paths.map((path, index) => (
            <article key={path.title}>
              <span>0{index + 1}</span>
              <h3>{path.title}</h3>
              <p>{path.body}</p>
            </article>
          ))}
        </div>
        <div className={styles.finaleClose}>
          <h3>Build what stays.</h3>
          <HeroActions dark />
        </div>
      </Container>
    </section>
  );
}

function AbujaChapter() {
  return (
    <>
      <PrototypeHeader />
      <main className={styles.prototype} data-concept="abuja-chapter">
        <section className={styles.abujaHero}>
          <Container>
            <div className={styles.abujaDeclaration}>
              <div>
                <p className={styles.eyebrow}>{hero.eyebrow}</p>
                <h1>{hero.headline}</h1>
              </div>
              <div className={styles.abujaPurpose}>
                <p>{hero.subhead}</p>
                <HeroActions />
              </div>
            </div>
            <StatusLine />
            <Figure imageKey="groupTree03" className={styles.abujaRecord} priority />
            <p className={styles.provenance}>{hero.documentary.provenance}</p>
          </Container>
        </section>
        <AudienceTransition statement={whoWeServe.intro} />
        <OriginBeginning mode="abuja-chapter" />
        <ModelStoryboard mode="abuja-chapter" />
        <LaterRhythm mode="abuja-chapter" />
        <Finale mode="abuja-chapter" />
      </main>
    </>
  );
}

function ThreeMovements() {
  return (
    <>
      <PrototypeHeader tone="dark" />
      <main className={styles.prototype} data-concept="three-movements">
        <section className={styles.movementsHero}>
          <Container>
            <div className={styles.movementsMasthead}>
              <div>
                <p className={styles.eyebrow}>{hero.eyebrow}</p>
                <h1>{hero.headline}</h1>
              </div>
              <div>
                <p>{hero.subhead}</p>
                <HeroActions dark />
              </div>
            </div>
          </Container>
          <div className={styles.movementPaper}>
            <Container>
              <div className={styles.movementSequence}>
                <Figure imageKey="packingTeam" className={styles.movementOne} priority />
                <Figure imageKey="communityWomen" className={styles.movementTwo} priority />
                <Figure imageKey="mealsPrepared" className={styles.movementThree} />
                <div className={styles.movementPurpose}>
                  <span>01 · Prepared</span>
                  <span>02 · Gathered</span>
                  <span>03 · What remained?</span>
                  <StatusLine />
                </div>
              </div>
              <p className={styles.provenance}>{hero.documentary.provenance}</p>
            </Container>
          </div>
        </section>
        <AudienceTransition statement={whoWeServe.intro} />
        <OriginBeginning mode="three-movements" />
        <ModelStoryboard mode="three-movements" />
        <LaterRhythm mode="three-movements" />
        <Finale mode="three-movements" />
      </main>
    </>
  );
}

function UnderCanopy() {
  return (
    <>
      <PrototypeHeader />
      <main className={styles.prototype} data-concept="under-canopy">
        <section className={styles.canopyHero}>
          <Figure imageKey="groupTree03" className={styles.canopyImage} priority />
          <div className={styles.canopyBand}>
            <Container>
              <div className={styles.canopyBandGrid}>
                <div>
                  <p className={styles.eyebrow}>{hero.eyebrow}</p>
                  <h1>{hero.headline}</h1>
                </div>
                <p>{hero.subhead}</p>
                <div><StatusLine /><HeroActions dark /></div>
              </div>
            </Container>
          </div>
          <Container><p className={styles.provenance}>{hero.documentary.provenance}</p></Container>
        </section>
        <AudienceTransition statement={whoWeServe.intro} />
        <OriginBeginning mode="under-canopy" />
        <ModelStoryboard mode="under-canopy" />
        <LaterRhythm mode="under-canopy" />
        <Finale mode="under-canopy" />
      </main>
    </>
  );
}

function QuietDeclaration() {
  return (
    <>
      <PrototypeHeader />
      <main className={styles.prototype} data-concept="quiet-declaration">
        <section className={styles.quietHero}>
          <Container>
            <div className={styles.quietGrid}>
              <div className={styles.quietTitle}>
                <p className={styles.eyebrow}>{hero.eyebrow}</p>
                <h1>{hero.headline}</h1>
                <p>{hero.subhead}</p>
                <HeroActions />
              </div>
              <Figure imageKey="communityWomen" className={styles.quietRecord} priority />
              <p className={`${styles.provenance} ${styles.quietProvenance}`}>
                {hero.documentary.provenance}
              </p>
              <aside>
                <p className={styles.eyebrow}>Now</p>
                <StatusLine />
                <p>{whereWeAre.photoEthics}</p>
              </aside>
            </div>
          </Container>
        </section>
        <AudienceTransition statement={whoWeServe.intro} />
        <OriginBeginning mode="quiet-declaration" />
        <ModelStoryboard mode="quiet-declaration" />
        <LaterRhythm mode="quiet-declaration" />
        <Finale mode="quiet-declaration" />
      </main>
    </>
  );
}

function Baseline() {
  return (
    <>
      <Header />
      <main className="relative">
        <ArchDefs />
        <Hero />
        <WhoWeServe />
        <Story />
        <Model />
        <Interlude />
        <Pillars />
        <WhereWeAre />
        <GetInvolved />
        <JourneyPath />
      </main>
      <Footer />
    </>
  );
}

export default async function HomepageLabPage({
  searchParams,
}: {
  searchParams: Promise<{ concept?: string }>;
}) {
  const requested = (await searchParams).concept;
  const active: ConceptId = concepts.some((concept) => concept.id === requested)
    ? (requested as ConceptId)
    : "abuja-chapter";

  return (
    <>
      {active === "baseline" ? <Baseline /> : null}
      {active === "abuja-chapter" ? <AbujaChapter /> : null}
      {active === "three-movements" ? <ThreeMovements /> : null}
      {active === "under-canopy" ? <UnderCanopy /> : null}
      {active === "quiet-declaration" ? <QuietDeclaration /> : null}
      <LabToolbar active={active} />
    </>
  );
}

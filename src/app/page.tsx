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
import { ArchDefs } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Header />
      {/* relative: the Path spans main; Containers sit at z-[2] above it. */}
      <main className="relative">
        <ArchDefs />
        <Hero />
        <WhoWeServe />
        <Story />
        <Model />
        {/* The one loud moment (D19) — lands after the model has made the
            argument, before the pillars detail it. */}
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

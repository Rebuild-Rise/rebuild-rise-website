// src/content/siteContent.ts
// Single source of truth for all site copy and imagery.
// Components render from this file; they never hardcode prose.

export type Treatment =
  | "archive"
  | "texture"
  | "live"
  | "illustration"
  | "representative";

export type PhotoGrade =
  | "consultation"
  | "workshop"
  | "gathering"
  | "correspondence";

export interface SiteImage {
  src: string;            // path under /public/images
  alt: string;
  place: string;          // caption strip, left side
  stamp: string;          // caption strip, right side (mono)
  width: number;
  height: number;
  treatment: Treatment;
  consent: "confirmed" | "licensed" | "user-supplied"; // internal record — do not render
  sourceUrl?: string;
  grade?: PhotoGrade;
  layout?: "landscape" | "portrait";
}

export const fieldworkArchive = {
  label: "Founders’ prior relief work",
  detail: "Abuja · 2022 · archive",
};

export const images: Record<string, SiteImage> = {
  communityWomen: {
    src: "/images/archive-community-women.jpg",
    alt: "Women of an Abuja IDP camp community gathered beneath a tree, dressed in vivid patterned fabric",
    place: "Women gathered beneath a tree at an Abuja IDP camp",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 2133,
    treatment: "archive",
    consent: "confirmed",
  },
  groupTree01: {
    src: "/images/archive-group-tree-01.jpg",
    alt: "Community members and volunteers gathered together under a large tree at an Abuja IDP camp",
    place: "Community & volunteers",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 1200,
    treatment: "archive",
    consent: "confirmed",
  },
  groupTree02: {
    src: "/images/archive-group-tree-02.jpg",
    alt: "Wide view of families and volunteers standing beneath the tree canopy at the camp",
    place: "Community and volunteers beneath the tree canopy",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 1200,
    treatment: "archive",
    consent: "confirmed",
  },
  groupTree03: {
    src: "/images/archive-group-tree-03.jpg",
    alt: "Children, families, and volunteers gathered at the camp beside a chalkboard",
    place: "Community and volunteers gathered beneath a tree",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 1200,
    treatment: "archive",
    consent: "confirmed",
  },
  packingTeam: {
    src: "/images/archive-packing-team.jpg",
    alt: "Volunteers seated on wooden benches packing seasoning cubes and supplies into small bags",
    place: "Volunteer packing line",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 1200,
    treatment: "archive",
    consent: "confirmed",
  },
  packingWarmlight: {
    src: "/images/archive-packing-warmlight.jpg",
    alt: "Volunteers packing food supplies inside a camp structure in warm afternoon light",
    place: "Volunteer packing line",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 1200,
    treatment: "archive",
    consent: "confirmed",
  },
  volunteerPortrait: {
    src: "/images/archive-volunteer-portrait.jpg",
    alt: "A volunteer and a young community member smiling together at the camp",
    place: "Friendship at the camp",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 2133,
    treatment: "archive",
    consent: "confirmed",
  },
  mealsPrepared: {
    src: "/images/archive-meals-prepared.jpg",
    alt: "Rows of packed meal containers tied with napkins and spoons, prepared by volunteers",
    place: "Meals prepared for distribution",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 1921,
    treatment: "archive",
    consent: "confirmed",
  },
  campLandscape: {
    src: "/images/archive-camp-landscape.jpg",
    alt: "Makeshift shelters and trees on open ground at an informal IDP settlement in Abuja",
    place: "Informal settlement",
    stamp: "Abuja · 2022 · founders’ prior relief work",
    width: 1600,
    height: 1817,
    treatment: "archive",
    consent: "confirmed",
  },
  textureContainers: {
    src: "/images/texture-containers-duotone.jpg",
    alt: "",
    place: "",
    stamp: "",
    width: 1600,
    height: 854,
    treatment: "texture",
    consent: "confirmed",
  },
  textureMeals: {
    src: "/images/texture-meals-duotone.jpg",
    alt: "",
    place: "",
    stamp: "",
    width: 1600,
    height: 1921,
    treatment: "texture",
    consent: "confirmed",
  },
  // The site's first live-grade images. Their full-color grade is meant to
  // read differently from the archive duotoning — do not unify the look.
  founderAisha: {
    src: "/images/live-headshot-aisha.jpg",
    alt: "Portrait of Aisha Adamu, co-founder and CEO of Rebuild & Rise",
    place: "",
    stamp: "",
    width: 288,
    height: 288,
    treatment: "live",
    consent: "confirmed",
  },
  founderSalim: {
    src: "/images/live-headshot-salim.jpg",
    alt: "Portrait of Salim Salim, co-founder and CTO of Rebuild & Rise",
    place: "",
    stamp: "",
    width: 288,
    height: 288,
    treatment: "live",
    consent: "confirmed",
  },
  modelListenPartner: {
    src: "/images/representative/model-assess-partner.jpg",
    alt: "Women speaking across a table while members of a seated team write during an outdoor community meeting",
    place: "Public community-engagement meeting in Kaduna, Nigeria",
    stamp: "mk_photoz / Pexels · not Rebuild & Rise fieldwork",
    width: 2625,
    height: 1750,
    treatment: "representative",
    consent: "licensed",
    sourceUrl:
      "https://www.pexels.com/photo/community-engagement-meeting-in-kaduna-nigeria-33107901/",
    grade: "consultation",
    layout: "landscape",
  },
  modelTrainConnect: {
    src: "/images/representative/model-train-connect.jpg",
    alt: "Four men gathered around hand tools and equipment at a workshop bench",
    place: "Men collaborating around a workshop bench in Kasese, Uganda",
    stamp: "illustrate Digital Ug / Pexels · not Rebuild & Rise fieldwork",
    width: 5759,
    height: 3794,
    treatment: "representative",
    consent: "licensed",
    sourceUrl:
      "https://www.pexels.com/photo/group-of-men-in-a-studio-with-tools-20853659/",
    grade: "workshop",
    layout: "landscape",
  },
  modelFollowMeasureSustain: {
    src: "/images/representative/model-follow-measure-sustain.jpg",
    alt: "A man in blue speaking at a table while a seated outdoor gathering listens beneath a canopy",
    place: "A speaker addresses a seated outdoor gathering",
    stamp: "Source supplied by Rebuild & Rise · not fieldwork",
    width: 3648,
    height: 3887,
    treatment: "representative",
    consent: "user-supplied",
    grade: "gathering",
    layout: "portrait",
  },
  contactCorrespondence: {
    src: "/images/representative/contact-correspondence-richard-badejo.jpg",
    alt: "A man in a patterned cap and a close group of children look toward the camera",
    place: "Representative photograph",
    stamp: "Richard Badejo / Pexels · not Rebuild & Rise fieldwork",
    width: 3088,
    height: 2316,
    treatment: "representative",
    consent: "licensed",
    sourceUrl:
      "https://www.pexels.com/photo/a-man-and-young-boys-smiling-at-the-camera-5409261/",
    grade: "correspondence",
    layout: "landscape",
  },
  heroTree: {
    src: "/images/illustrations/hero-tree-v2.png",
    alt: "Line illustration of a broad tree with a doorway in its trunk and a path winding down through its roots",
    place: "",
    stamp: "",
    width: 1122,
    height: 1402,
    treatment: "illustration",
    consent: "confirmed",
  },
  textureSoil: {
    src: "/images/illustrations/texture-soil.webp",
    alt: "",
    place: "",
    stamp: "",
    width: 1400,
    height: 787,
    treatment: "illustration",
    consent: "confirmed",
  },
  ogBackground: {
    src: "/images/illustrations/og-background.webp",
    alt: "",
    place: "",
    stamp: "",
    width: 1200,
    height: 630,
    treatment: "illustration",
    consent: "confirmed",
  },
};

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Our model", href: "/model" },
    { label: "Program areas", href: "/programs" },
    { label: "Get involved", href: "/get-involved" },
    { label: "Contact", href: "/get-involved#inquiry" },
  ],
  footerLinks: [
    { label: "About", href: "/about" },
    { label: "Our model", href: "/model" },
    { label: "Program areas", href: "/programs" },
    { label: "Get involved", href: "/get-involved" },
  ],
  cta: {
    label: "Partner with us",
    href: "/get-involved?path=partner#inquiry",
  },
};

export const hero = {
  eyebrow: "Sustainable community development \u00B7 Nigeria",
  headline: "We build what stays.",
  subhead:
    "Rebuild & Rise partners with displaced and underserved Nigerian communities to build health, education, and livelihood systems that outlast our presence.",
  status: {
    label: "Current status",
    items: ["Registered in Nigeria", "Pilot 001 \u00B7 In design"],
  },
  primaryCta: { label: "Explore our model", href: "#model" },
  secondaryCta: {
    label: "Partner with us",
    href: "/get-involved?path=partner#inquiry",
  },
  documentary: {
    imageKey: "communityWomen",
    eyebrow: "Archive note",
    provenance:
      "This photograph records the founders’ prior relief work in Abuja in 2022. It does not depict Pilot 001 or current Rebuild & Rise impact.",
    sequenceProvenance:
      "These photographs record the founders’ prior relief work in Abuja in 2022. They do not depict Pilot 001 or current Rebuild & Rise impact.",
  },
  movements: [
    { label: "Gathered", imageKey: "communityWomen" },
    { label: "Prepared", imageKey: "packingTeam" },
  ],
};

export const whoWeServe = {
  eyebrow: "Who we serve",
  heading:
    "Displacement and poverty create more than one barrier at a time.",
  intro:
    "Our priority is people often left outside consistent systems of support \u2014 displaced families, out-of-school children, and vulnerable households in host communities.",
  cards: [
    {
      title: "IDP communities",
      body: "Children, women, and families living with disrupted access to healthcare, safe learning spaces, and stable livelihood opportunities.",
    },
    {
      title: "Almajiri & out-of-school children",
      body: "Children and adolescents facing limited adult protection, low access to learning, and barriers to long-term wellbeing.",
    },
    {
      title: "Host communities",
      body: "Vulnerable households surrounding camps and settlements who also carry the burden of poverty and limited services.",
    },
  ],
};

export const story = {
  eyebrow: "Where we come from",
  heading: "We started with relief. We learned its limits.",
  body: "In 2022, our founders organized relief in Abuja\u2019s IDP camps \u2014 meals packed by volunteer teams, distributed family by family. The work mattered: people ate, and trust was built. But the food ran out in days, and we ran out with it. We decided the next thing we built would not.",
  photos: ["packingTeam", "packingWarmlight", "mealsPrepared"],
  lessonsEyebrow: "What it taught us",
  lessons: [
    {
      quote: "The supplies ran out in days.",
      maps: "We train so skills and capacity dont run out.",
      modelStep: "train",
    },
    {
      quote: "We left, and nothing of us stayed.",
      maps: "We make sure to follow-up. We make sure local anchors are built into every pilot.",
      modelStep: "followUp",
    },
    {
      quote: "We couldn’t say what actually changed.",
      maps: "That's why we measure; we measure honestly, every time.",
      modelStep: "measure",
    },
  ],
};

export const model = {
  eyebrow: "Our model",
  heading: "Three lessons became seven steps.",
  intro:
    "Every Rebuild pilot moves from listening to action, from action to follow-up, and from follow-up to local ownership.",
  steps: [
    {
      id: "assess",
      name: "Assess",
      body: "We begin by listening to community needs, risks, priorities, and existing support structures.",
      lessonBorn: false,
    },
    {
      id: "partner",
      name: "Partner",
      body: "We work with trusted local leaders, women leaders, faith and community structures, schools, and clinics.",
      lessonBorn: false,
    },
    {
      id: "train",
      name: "Train",
      body: "We provide practical training in health, education, life skills, and livelihood readiness.",
      lessonBorn: true,
    },
    {
      id: "connect",
      name: "Connect",
      body: "We build referral pathways linking people to facilities, mentors, services, and partners.",
      lessonBorn: false,
    },
    {
      id: "followUp",
      name: "Follow up",
      body: "We return, check progress, and document barriers. No drop-and-go.",
      lessonBorn: true,
    },
    {
      id: "measure",
      name: "Measure",
      body: "We track simple, practical outcomes so each pilot teaches us what works.",
      lessonBorn: true,
    },
    {
      id: "sustain",
      name: "Sustain",
      body: "We train local facilitators and strengthen systems that continue beyond our visits.",
      lessonBorn: false,
    },
  ],
  closing:
    "Our goal is not to replace communities. It is to strengthen the people, relationships, and systems that already exist \u2014 and help them work better together.",
  legend: "Steps marked in walnut were born directly from a 2022 lesson.",
};

// FLAGGED for review — the typographic interlude (Phase 5, ledger D19).
// This oversized statement motif is sanctioned exactly once sitewide.
export const interlude = {
  line1: "A meal feeds a day.",
  line2: "A skill feeds a decade.",
};

export const pillars = {
  eyebrow: "Program pillars",
  heading: "Integrated support for health, learning, livelihood, and local capacity.",
  viewBriefLabel: "View brief",
  cards: [
    {
      title: "Health access & training",
      body: "Preventive health education, hygiene, menstrual and maternal health, mental health literacy, and referral navigation.",
      href: "/programs#health",
    },
    {
      title: "Education & learning support",
      body: "Foundational literacy and numeracy, learning recovery, and re-entry pathways for out-of-school children.",
      href: "/programs#education",
    },
    {
      title: "Skills & livelihoods",
      body: "Trades exposure, agriculture skills, financial literacy, mentorship, and apprenticeship connections.",
      href: "/programs#skills",
    },
    {
      title: "Community capacity",
      body: "Training local facilitators, strengthening referral pathways, and building systems that continue after we leave.",
      href: "/programs#community",
    },
  ],
};

export const whereWeAre = {
  eyebrow: "Where we are",
  heading: "Pilot 001 is in design.",
  body: "Rebuild & Rise is registered in Nigeria and beginning with focused community pilots. Each pilot is designed around a specific community need, a clear local partnership, practical training, referral support, and simple outcome tracking.",
  pilotFrameworkHeading: "Pilot 001 framework",
  pilotSteps: [
    "Community listening",
    "Anchor recruitment",
    "Partner mapping",
    "Focused training",
    "Referral & follow-up",
    "Learning report",
  ],
  measurementEyebrow: "We will track",
  measurement: ["Participation", "Learning", "Follow-through"],
  statusLabel: "Field status · 001",
  statusState: "In design",
  documentationEyebrow: "Documentary standard",
  foundersEyebrow: "Founding team",
  photoEthics:
    "Field archive photographs come from our founders’ prior work and are published with consent. Representative photographs are clearly labeled and never presented as Rebuild & Rise field evidence. Illustrations are original artwork.",
  emptyFrameCaption: "Pilot 001 \u2014 photographs coming from the field.",
  founders: [
    {
      name: "Aisha Adamu",
      role: "Co-founder & CEO",
      bio: "Psychology and neuroscience student at the University of Toronto, researching the Almajiri education system as a Laidlaw Scholar. She leads community relationships, partnerships, and on-ground judgment, work she began at fifteen.",
      headshot: "/images/live-headshot-aisha.jpg",
    },
    {
      name: "Salim Salim",
      role: "Co-founder & CTO",
      bio: "Human Development student at Howard University working across research, program strategy, and community-centered technology. He leads systems, operations, and everything technical, including this site.",
      headshot: "/images/live-headshot-salim.jpg",
    },
  ],
  registrationLine: "Rebuild & Rise Humanitarian Initiative is registered in Nigeria.",
};

export const getInvolved = {
  eyebrow: "Get involved",
  heading: "Help build the foundation for our first community pilots.",
  intro:
    "We’re looking for people and organizations who can help us build carefully: local anchors, community partners, advisors, and supporters committed to sustainable impact in Nigeria.",
  paths: [
    {
      title: "Become a partner",
      body: "For schools, clinics, NGOs, community groups, and faith leaders who can support pilot delivery.",
    },
    {
      title: "Serve as an on-ground anchor",
      body: "For trusted, community-minded people in Nigeria who can coordinate, communicate, and follow up locally.",
    },
    {
      title: "Advise the work",
      body: "For professionals in health, education, safeguarding, development, law, finance, or research.",
    },
    {
      title: "Support a pilot",
      body: "For donors who want to fund practical, focused, measurable community work.",
    },
  ],
  primaryCta: {
    label: "Partner with Rebuild",
    href: "mailto:contact@rebuildandrise.ng?subject=Partnership%20with%20Rebuild%20%26%20Rise",
  },
  secondaryCta: {
    label: "Contact the team",
    href: "mailto:contact@rebuildandrise.ng?subject=Rebuild%20%26%20Rise%20enquiry",
  },
};

export const footer = {
  wordmark: "Rebuild & Rise Humanitarian Initiative",
  mission:
    "Building rooted pathways for underserved Nigerian communities through health, education, skills training, local partnership, and sustainable community capacity.",
  email: "contact@rebuildandrise.ng",
  location: "Nigeria \u00B7 Diaspora founding team",
  legal: "Rebuild & Rise Humanitarian Initiative is registered in Nigeria.",
};

export const aboutPage = {
  metadata: {
    title: "About | Rebuild & Rise Humanitarian Initiative",
    description:
      "Meet the Nigerian founders behind Rebuild & Rise, explore their 2022 Abuja field archive, and read the mission, vision, and principles guiding Pilot 001.",
    canonical: "/about",
    openGraphTitle: "About Rebuild & Rise",
  },
  intro: {
    eyebrow: "About Rebuild & Rise",
    heading: "Built from field experience, and the questions it left behind.",
    body: "Rebuild & Rise Humanitarian Initiative is a Nigerian organization founded by two Nigerian university students and shaped by their 2022 relief work in Abuja’s internally displaced person communities.",
    status: ["Registered in Nigeria", "Pilot 001 · In design"],
  },
  purpose: {
    eyebrow: "Purpose",
    heading: "What we are building toward.",
    entries: [
      {
        label: "Mission",
        body: "Our mission is to work alongside internally displaced communities, Almajiri and out-of-school children, and other underserved Nigerians to strengthen access, capability, and local systems through integrated health, education, and skills-building initiatives designed with communities, guided by trauma-aware practice, measured honestly, and built for long-term continuity rather than dependency.",
      },
      {
        label: "Vision",
        body: "We envision a Nigeria where displacement, poverty, or social exclusion does not determine whether people can access healthcare, education, and other basic needs—and where communities can rely on durable local systems instead of temporary aid alone.",
      },
    ],
  },
  chronology: {
    eyebrow: "Origin record",
    heading: "Relief was the beginning, not the conclusion.",
    intro:
      "This is an origin record—not an impact timeline. The 2022 fieldwork predates Rebuild & Rise.",
    entries: [
      {
        date: "2022",
        title: "Relief work in Abuja",
        body: "Before Rebuild & Rise existed, our founders organized relief in Abuja’s IDP communities. Volunteer teams packed and distributed meals family by family. The work mattered: people ate, and trust was built.",
      },
      {
        date: "What we learned",
        title: "Temporary relief could not create continuity on its own.",
        body: "The supplies ran out in days; we left; and we could not say clearly what had changed. Those limits belonged to our method, not to the communities.",
      },
      {
        date: "What followed",
        title: "The lessons became a model.",
        body: "Rebuild & Rise grew from that reckoning. Its model begins with listening and partnership, then moves through practical training, referral pathways, follow-up, measurement, and local ownership.",
      },
      {
        date: "Now",
        title: "Pilot 001 is in design.",
        body: "Rebuild & Rise is registered in Nigeria and is designing its first focused community pilot around a specific community need, a clear local partnership, practical training, referral support, and simple outcome tracking.",
      },
    ],
  },
  archive: {
    eyebrow: "Field archive · Abuja · 2022",
    heading: "Where our story began.",
    intro:
      "These nine photographs document the founders’ prior relief work in Abuja in 2022. They predate Rebuild & Rise and are presented as an origin record, not as evidence of current programs or organizational impact.",
    rail: "Founders’ prior relief work · Abuja · 2022 · archive",
    imageKeys: [
      "groupTree03",
      "communityWomen",
      "campLandscape",
      "packingWarmlight",
      "packingTeam",
      "mealsPrepared",
      "volunteerPortrait",
      "groupTree01",
      "groupTree02",
    ],
  },
  principles: {
    eyebrow: "Our principles",
    heading: "The standards come before the work.",
    intro:
      "Pilot 001 is in design. These seven principles are the standards by which its design—and the work that follows—must be judged.",
    entries: [
      {
        title: "Dignity first",
        body: "People are partners, not projects. Their knowledge, priorities, and agency must shape decisions that affect them.",
      },
      {
        title: "Community & faith partnership",
        body: "Pilot design should be shaped with community leaders, women leaders, religious leaders, and existing structures that already hold trust and local knowledge.",
      },
      {
        title: "Continuity, not drop-and-go",
        body: "We will prioritize clear roles, repeatable schedules, follow-up, and capability that can remain after an external visit ends.",
      },
      {
        title: "Referral pathways",
        body: "When a need falls outside a pilot’s scope, the model should define an appropriate facility or service, how a connection is made, and how follow-up can happen.",
      },
      {
        title: "Safeguarding",
        body: "Any work involving children or vulnerable people must be governed by clear safeguarding standards and ethical conduct.",
      },
      {
        title: "Trauma-aware practice",
        body: "Pilot design should recognize how displacement, street-connected life, and chronic poverty can affect safety, trust, learning, and wellbeing—and respond with psychosocial sensitivity.",
      },
      {
        title: "Practical accountability",
        body: "We intend to track simple outputs and outcomes, state evidence gaps honestly, and let what we learn from each pilot improve the next.",
      },
    ],
  },
  team: {
    eyebrow: "Founding team",
    heading: "The people responsible for what comes next.",
    intro:
      "Rebuild & Rise is led by two Nigerian university students whose roles span community relationships, research, program strategy, operations, and technology.",
    registration:
      "Rebuild & Rise Humanitarian Initiative is registered in Nigeria.",
  },
  documentaryStandard: {
    eyebrow: "Documentary standard",
    body: "Field archive photographs come from our founders’ prior work and are published with consent. Representative photographs are clearly labeled and never presented as Rebuild & Rise field evidence. Illustrations are original artwork.",
  },
  close: {
    eyebrow: "Next chapter",
    heading: "See how the lessons became a model.",
    body: "The seven-step model moves from listening to partnership, training, connection, follow-up, measurement, and local ownership. Pilot 001 is still in design.",
    primaryCta: { label: "Explore our model", href: "/model" },
  },
};

export const modelPage = {
  metadata: {
    title: "Our Model | Rebuild & Rise Humanitarian Initiative",
    description:
      "See the seven-step approach Rebuild & Rise is preparing to test through Pilot 001, from community listening to follow-up and local ownership.",
    canonical: "/model",
    openGraphTitle: "Our model | Rebuild & Rise",
  },
  intro: {
    eyebrow: "Our model · Pilot 001 in design",
    heading: "A field manual still being tested.",
    body: "Rebuild & Rise is preparing to test a seven-step approach that begins with community priorities and aims to strengthen the people, relationships, and local systems already present. Pilot 001 is still in design; this page describes the working model, not a proven result.",
    annotations: [
      { label: "Field status · 001", value: "In design" },
      { label: "Working sequence", value: "7 steps · 3 movements" },
    ],
  },
  sequence: {
    heading: "The working sequence",
    intro:
      "Seven steps, grouped into three movements. The sequence is intended to be tested, documented, and revised through focused community pilots.",
    steps: [
      { title: "Assess", body: "Listen to needs, risks, priorities, and existing support structures." },
      { title: "Partner", body: "Identify trusted leaders and local structures with whom a pilot could be designed." },
      { title: "Train", body: "Develop practical learning around the need the pilot is addressing." },
      { title: "Connect", body: "Map verified referral routes to support the pilot cannot provide." },
      { title: "Follow up", body: "Return to document progress, barriers, and what needs to change." },
      { title: "Measure", body: "Track simple indicators of participation, learning, and follow-through." },
      { title: "Sustain", body: "Build local capability and strengthen systems that can continue beyond an external visit." },
    ],
  },
  lessons: {
    eyebrow: "What the field taught us",
    heading: "Three lessons changed the method.",
    intro:
      "Our founders’ 2022 relief work mattered: people ate, volunteers served, and trust was built. Its limits also became impossible to ignore. Rebuild & Rise’s working model begins with three honest lessons about the method we used.",
    entries: [
      {
        quote: "“The supplies ran out in days.”",
        response: "So practical learning should be tested as a way to strengthen capability after material support is gone.",
      },
      {
        quote: "“We left, and nothing of us stayed.”",
        response: "So follow-up and locally defined roles should be tested as ways to support continuity after an external visit.",
      },
      {
        quote: "“We couldn’t say what actually changed.”",
        response: "So each pilot should define simple measures before delivery begins.",
      },
    ],
  },
  movements: [
    {
      eyebrow: "Movement 01 · Listen and establish trust",
      heading: "Assess and Partner",
      standfirst: "Begin with the community already there.",
      body: [
        "A future pilot would begin by listening to community members about needs, risks, priorities, and the support structures that already exist. It would then identify the local leaders and institutions whose knowledge, trust, and accountability are essential to responsible planning.",
        "Possible partners may include community and faith leaders, women leaders, schools, clinics, and credible organizations. The exact partners for Pilot 001 have not yet been confirmed.",
      ],
      notes: [
        {
          title: "Local anchors",
          body: "Local anchors are intended to support communication, coordination, and follow-through close to the community. Their responsibilities, support, and safeguarding boundaries are still being defined for Pilot 001.",
        },
        {
          title: "Safeguarding",
          body: "Any work involving children or vulnerable people must begin with clear ethical conduct and child-safeguarding procedures. Those operating procedures are still being developed.",
        },
        {
          title: "Trauma-aware practice",
          body: "The model is intended to recognize the psychological effects of displacement, street-connected life, and chronic poverty without reducing people to those experiences. Safe practices and routes to qualified support will require local definition.",
        },
      ],
      image: "modelListenPartner",
    },
    {
      eyebrow: "Movement 02 · Build capability and routes onward",
      heading: "Train and Connect",
      standfirst: "Useful learning should lead somewhere.",
      body: [
        "Training within a future pilot would be practical and selected around the community need—for example, health literacy, learning support, life skills, or livelihood readiness. The model does not assume that one curriculum fits every community.",
        "Connection means defining referral pathways for needs a pilot cannot safely or appropriately meet itself. Any route to a clinic, school, mentor, service, or other support would need to be locally verified before it is presented as available.",
      ],
      notes: [
        {
          title: "Referral pathways",
          body: "A responsible referral pathway identifies where someone may be connected, who is qualified to help, and how follow-up can happen where feasible. Rebuild & Rise does not replace licensed or specialist services.",
        },
      ],
      image: "modelTrainConnect",
    },
    {
      eyebrow: "Movement 03 · Return, learn, and leave strength behind",
      heading: "Follow up, Measure, and Sustain",
      standfirst: "The work is not finished when an activity ends.",
      body: [
        "A pilot would return after delivery to document participation, learning, follow-through, and the barriers people still face. Simple, practical measures are intended to help the organization learn honestly, including when evidence is incomplete or mixed.",
        "Sustainability means strengthening local facilitators, relationships, and systems that can continue beyond an external visit. The goal is not to replace communities. It is to support the people and structures already present to work better together.",
      ],
      notes: [
        {
          title: "Local ownership",
          body: "The model will ask whether a pilot leaves clearer roles, stronger capability, and more useful connections rather than dependence on repeated outside presence.",
        },
      ],
      image: "modelFollowMeasureSustain",
    },
  ],
  photographyNote:
    "These representative photographs provide context for a model still in design. They do not depict Pilot 001, Rebuild & Rise participants, or organizational impact. Credits and known locations appear with each image.",
  openQuestions: {
    eyebrow: "Open questions",
    heading: "What we are still learning",
    intro:
      "Pilot 001 is in design, so the responsible thing is to show the questions that remain open. These decisions will be resolved before they are presented as settled practice.",
    entries: [
      { title: "Pilot selection", body: "Which specific need and community context can support a focused, ethical first pilot." },
      { title: "Follow-up cadence", body: "How often follow-up is useful, feasible, and respectful of community time." },
      { title: "Measurement definitions", body: "What participation, learning, and follow-through mean for the selected pilot—and what can be measured without overburdening people." },
      { title: "Partner vetting", body: "How local partners and referral destinations will be checked before their roles are published or relied upon." },
      { title: "Safeguarding procedures", body: "The practical procedures required before work involving children or vulnerable people can begin." },
      { title: "Delivery boundaries", body: "What Rebuild & Rise can responsibly coordinate itself, what requires qualified partners, and what must remain outside the pilot." },
    ],
  },
  close: {
    eyebrow: "Next chapter",
    heading: "See where the model could be applied.",
    body: "The four program areas describe possible fields of work for future pilots. They do not describe services currently in delivery.",
    primaryCta: { label: "Explore program areas", href: "/programs" },
    secondaryCta: { label: "Discuss a partnership", href: "/get-involved?path=partner#inquiry" },
  },
};

export const programsPage = {
  metadata: {
    title: "Program Areas | Rebuild & Rise Humanitarian Initiative",
    description:
      "Explore four connected areas future Rebuild & Rise pilots are being designed to address: health, education, economic opportunity, and local capacity.",
    canonical: "/programs",
    openGraphTitle: "Program areas | Rebuild & Rise",
  },
  intro: {
    eyebrow: "Program areas · In development",
    heading: "Integrated Systems",
    body: "Displacement and poverty often create barriers to health access, learning, livelihood opportunity, and community capacity at the same time. Rebuild & Rise is designing future pilots to respond to a focused local need while understanding its connections to the wider system.",
    statusLabel: "Current status",
    statusValue: "Pilot 001 is in design.",
    statusBody:
      "These are areas the organization aims to work in. They are not a record of services currently being delivered, and no pilot is assumed to include all four areas.",
    indexLabel: "Four connected areas",
    viewBriefLabel: "View brief",
  },
  fields: {
    mayInclude: "What this area may include",
    structures: "Local structures it depends on",
    connects: "How it connects",
    learn: "What a pilot would need to learn",
  },
  areas: [
    {
      slug: "health",
      eyebrow: "Area 01",
      heading: "Health access and preventive training",
      intro: "Future pilots may explore practical health learning and referral navigation where communities identify these as priorities. Rebuild & Rise is not presenting itself as a clinical provider.",
      mayInclude: "Preventive health and basic first-aid education; hygiene, nutrition, and disease-prevention learning; age-appropriate menstrual and reproductive health information; maternal and family-health education; mental-health literacy and trauma-aware resilience learning; and navigation to qualified services when needed.",
      structures: "This area would depend on verifying clinics and licensed health providers, as well as the roles of community and faith leaders, women leaders, and trusted facilitators able to communicate safely and consistently.",
      connects: "Health learning and referral planning would be coordinated with education, economic opportunity, and community-capacity work so scheduling, safeguarding, and follow-up do not sit in isolation.",
      learn: "Which topics are most useful; which services are qualified and reachable; where Rebuild & Rise’s role must stop; and whether participants can use the information or referral route after the activity.",
    },
    {
      slug: "education",
      eyebrow: "Area 02",
      heading: "Education and learning support",
      intro: "Future pilots may explore routes back into learning and practical support for children and community members facing barriers to education.",
      mayInclude: "Foundational literacy and numeracy; learning recovery and re-entry pathways; community learning support; mental-health literacy, psychological resilience, and neurodevelopmental awareness; and, where feasible, targeted improvements that support a safe learning environment.",
      structures: "Families and caregivers; schools and learning spaces; educators and faith leaders working in Almajiri or Tsangaya contexts; community-based facilitators; and relevant public or civil-society services, all of whose roles would need to be verified.",
      connects: "Education planning would account for health and wellbeing, build foundations useful for later skills development, and strengthen local facilitation so learning does not depend entirely on outside visits.",
      learn: "Which learners are being left out; what a safe and realistic schedule and location look like; which re-entry pathways actually exist; what facilitators need; and what learning can be measured fairly.",
    },
    {
      slug: "skills",
      eyebrow: "Area 03",
      heading: "Skills and economic opportunity",
      intro: "Future pilots may explore practical training and connections that widen local opportunity. Training alone is not a promise of employment or income.",
      mayInclude: "Practical life skills; trades exposure; agriculture skills; basic economic and financial literacy; and connections to mentorship, apprenticeships, or verified local opportunities.",
      structures: "Locally relevant artisans, farmers, businesses, mentors, training providers, and community leaders whose roles would need to be confirmed.",
      connects: "Foundational learning can make skills training more accessible; health and safeguarding affect safe participation; and local facilitators and partners make meaningful follow-through possible.",
      learn: "Which skills match participant priorities and local demand; what tools or access are required; how mentorship or apprenticeship can be structured safely; and how follow-through can be tracked without implying guaranteed outcomes.",
    },
    {
      slug: "community",
      eyebrow: "Area 04",
      heading: "Community sustainability and local capacity",
      intro: "This area is the connective tissue: the local people, roles, relationships, and routines that may help useful work continue beyond an external visit.",
      mayInclude: "Training community-based facilitators; community listening and partner mapping; clearer referral and safeguarding arrangements; defined roles and schedules; and simple monitoring and learning.",
      structures: "Community, faith, and women leaders; local facilitators; schools and clinics; relevant government agencies; and credible organizations whose participation would need to be confirmed.",
      connects: "Local capacity supports every other area by giving partnership, communication, referrals, follow-up, and practical accountability a place to live within the community.",
      learn: "Who is trusted; which roles are realistic; what support local facilitators require; how decisions are shared; and which parts can continue locally without depending on repeated outside presence.",
    },
  ],
  commitments: {
    eyebrow: "Shared commitments",
    heading: "The method travels across every area.",
    intro:
      "Whatever the program focus, the same five design commitments would guide a future pilot.",
    entries: [
      { title: "Partnership", body: "Design with community leadership and locally trusted structures." },
      { title: "Safeguarding", body: "Set clear ethical conduct and child-safeguarding procedures before activity involving minors or vulnerable people." },
      { title: "Referrals", body: "Verify where people can be connected for needs a pilot cannot safely meet." },
      { title: "Follow-up", body: "Return to document progress, barriers, and what needs to change." },
      { title: "Measurement", body: "Use simple, practical indicators and report learning honestly." },
    ],
  },
  close: {
    heading: "A pilot begins with a specific need.",
    body: "Pilot 001 will be scoped around community listening, local partnership, safeguards, and a realistic learning plan. It will not be presented as four programs delivered at once.",
    primaryCta: { label: "Read our model", href: "/model" },
    secondaryCta: { label: "Discuss a partnership", href: "/get-involved?path=partner#inquiry" },
  },
};

export const getInvolvedPage = {
  metadata: {
    title: "Get involved | Rebuild & Rise Humanitarian Initiative",
    description:
      "Explore partnership, on-ground anchor, advisory, and pilot-support inquiries with Rebuild & Rise Humanitarian Initiative in Nigeria.",
    canonical: "/get-involved",
    openGraphTitle: "Get involved with Rebuild & Rise",
  },
  intro: {
    eyebrow: "Get involved",
    heading: "Help build the foundation for our first community pilots.",
    body: "Rebuild & Rise is registered in Nigeria, and Pilot 001 is in design. We welcome early conversations with people and organizations whose local knowledge, professional judgment, or practical support could help us build carefully.",
    status: "Registered in Nigeria · Pilot 001 in design",
    qualification:
      "An inquiry starts a conversation. It does not confirm a role, partnership, advisory appointment, or funding relationship.",
    primaryCta: { label: "Choose a pathway", href: "#pathways" },
    secondaryCta: { label: "Email the team", href: "mailto:contact@rebuildandrise.ng" },
  },
  pathways: {
    id: "pathways",
    eyebrow: "Ways to participate",
    heading: "Choose the route that fits.",
    intro:
      "Each route leads to one inquiry form. Select the closest fit so the team can understand why you are getting in touch.",
    fieldLabels: {
      suited: "Who this is for",
      contribution: "What you might contribute",
      commitment: "What Rebuild & Rise commits to",
      next: "What happens next",
    },
    entries: [
      {
        value: "partner",
        title: "Community or institutional partner",
        suited: "Schools, clinics, community groups, faith organizations, NGOs, and other credible institutions with relevant local knowledge or services.",
        contribution: "Share community priorities, local context, referral options, or practical capacity that could inform a focused pilot.",
        commitment: "We will listen first and clarify fit, safeguarding, referral responsibilities, and follow-up before any collaboration is confirmed.",
        next: "Your inquiry begins a conversation about fit. It does not confirm a partnership or delivery role.",
        cta: { label: "Inquire as a partner", href: "/get-involved?path=partner#inquiry" },
      },
      {
        value: "anchor",
        title: "On-ground anchor expression of interest",
        suited: "Community-minded people in Nigeria who know local contexts and may be able to support communication, coordination, and follow-up.",
        contribution: "Share local knowledge, identify existing community structures, or explore how a trusted local point of contact might support future communication and follow-up.",
        commitment: "We will be clear about the pilot’s stage and will not treat an inquiry as a confirmed role.",
        next: "If a relevant need develops, the team may contact you to learn more about your experience and local context.",
        cta: { label: "Express interest", href: "/get-involved?path=anchor#inquiry" },
      },
      {
        value: "advisor",
        title: "Professional advisor",
        suited: "Professionals in health, education, safeguarding, community development, law, finance, monitoring and evaluation, or research.",
        contribution: "Review a defined question, challenge assumptions, strengthen safeguards, or help shape practical measurement.",
        commitment: "We will be clear about the question, the evidence available, and the stage of work before requesting your involvement.",
        next: "If your experience matches a current question, the team may invite a focused conversation.",
        cta: { label: "Offer professional advice", href: "/get-involved?path=advisor#inquiry" },
      },
      {
        value: "supporter",
        title: "Pilot supporter",
        suited: "Individuals or organizations interested in supporting focused, practical, measurable community work.",
        contribution: "Discuss what responsible support could look like once a pilot has a defined need, scope, and accountability approach.",
        commitment: "We will represent the work at its actual stage and will not make unsupported impact or outcome claims.",
        next: "This page starts a conversation. It does not process a donation, create a funding commitment, or make any claim about tax deductibility.",
        cta: { label: "Discuss pilot support", href: "/get-involved?path=supporter#inquiry" },
      },
    ],
  },
  process: {
    eyebrow: "What happens next",
    heading: "A careful beginning has four steps.",
    entries: [
      { title: "Send an inquiry", body: "Choose the pathway that fits and share only the context needed for a first conversation." },
      { title: "We review fit", body: "The team reviews the inquiry against the organization’s current stage, priorities, and responsibilities." },
      { title: "We define scope", body: "If there is a possible fit, the next conversation clarifies purpose, roles, safeguarding, boundaries, and follow-up." },
      { title: "We decide together", body: "No role or partnership is assumed. Both sides decide whether there is a responsible next step." },
    ],
  },
  form: {
    id: "inquiry",
    eyebrow: "Inquiry",
    heading: "Start a conversation.",
    intro:
      "Tell us which pathway fits and what you would like to explore. Please share only the information needed for this first conversation.",
    image: "contactCorrespondence",
    imageProvenance:
      "This licensed photograph is representative. It does not depict Rebuild & Rise activity, participants, or impact.",
    preparation: {
      eyebrow: "Before you write",
      heading: "A useful first note is simple.",
      entries: [
        {
          title: "Name the pathway",
          body: "Tell us which participation route is the closest fit for your inquiry.",
        },
        {
          title: "Share useful context",
          body: "Include your general city or country, organization if relevant, and what you would like to explore.",
        },
        {
          title: "Protect private information",
          body: "Do not include medical information, details about children, home addresses, identity documents, financial account information, or other sensitive personal data.",
        },
      ],
    },
    requiredNote: "* Required",
    fields: {
      name: { label: "Name *", requiredError: "Enter your name." },
      email: { label: "Email address *", help: "A reply, if needed, will be sent here.", requiredError: "Enter your email address.", formatError: "Enter a valid email address." },
      pathway: { label: "Pathway *", placeholder: "Choose a pathway", requiredError: "Choose a pathway." },
      location: { label: "City or country (optional)", help: "General location only; do not include a street address." },
      organization: { label: "Organization (optional)", help: "Leave blank if you are contacting us as an individual." },
      message: { label: "Message *", help: "Tell us what brought you here and what you may be able to contribute. Do not include medical information, details about children, identity documents, financial account information, or other sensitive personal data.", requiredError: "Tell us briefly why you are getting in touch." },
      honeypot: { label: "Website (leave blank)" },
    },
    privacy:
      "Privacy note: This form is delivered through Formspree. Submit only the information needed for this inquiry. Do not include medical information, details about children, home addresses, identity documents, financial account information, or other sensitive personal data. Attachments are not accepted.",
    fallback: "Prefer email? Write to contact@rebuildandrise.ng.",
    submitLabel: "Send inquiry",
    submittingLabel: "Sending inquiry…",
    states: {
      success: { heading: "Inquiry sent.", message: "Your inquiry was submitted successfully." },
      error: { heading: "Your inquiry was not sent.", message: "Your entries are still here. Please try again, or email contact@rebuildandrise.ng directly." },
      missing: {
        eyebrow: "Current inquiry route",
        heading: "Email is the way to reach us for now.",
        message: "Online inquiries have not been connected yet. Email the team and include the pathway that best describes you.",
        addressLabel: "Write to",
        cta: "Open email",
      },
      validation: "Review the highlighted fields and try again.",
    },
  },
  close: {
    image: "groupTree01",
    eyebrow: "Archive note",
    provenance:
      "This photograph records the founders’ prior relief work in Abuja in 2022. It does not depict Pilot 001 or current Rebuild & Rise impact.",
    heading: "Build what stays.",
  },
};

export const notFoundPage = {
  metadataTitle: "Page not found | Rebuild & Rise",
  eyebrow: "404 · Page not found",
  heading: "This page does not exist.",
  body: "The address may be incomplete, or the page may have moved. Return to the homepage or contact the Rebuild & Rise team.",
  primaryCta: { label: "Return home", href: "/" },
  secondaryCta: { label: "Contact the team", href: "/get-involved#inquiry" },
};

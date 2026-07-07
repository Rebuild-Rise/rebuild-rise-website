// src/content/siteContent.ts
// Single source of truth for all site copy and imagery.
// Components render from this file; they never hardcode prose.

export type Treatment = "archive" | "texture" | "live";

export interface SiteImage {
  src: string;            // path under /public/images
  alt: string;
  place: string;          // caption strip, left side
  stamp: string;          // caption strip, right side (mono)
  treatment: Treatment;
  consent: "confirmed";   // internal record — do not render
}

export const images: Record<string, SiteImage> = {
  communityWomen: {
    src: "/images/archive-community-women.jpg",
    alt: "Women of an Abuja IDP camp community gathered beneath a tree, dressed in vivid patterned fabric",
    place: "Abuja IDP camp",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  groupTree01: {
    src: "/images/archive-group-tree-01.jpg",
    alt: "Community members and volunteers gathered together under a large tree at an Abuja IDP camp",
    place: "Community & volunteers",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  groupTree02: {
    src: "/images/archive-group-tree-02.jpg",
    alt: "Wide view of families and volunteers standing beneath the tree canopy at the camp",
    place: "Community & volunteers",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  groupTree03: {
    src: "/images/archive-group-tree-03.jpg",
    alt: "Children, families, and volunteers gathered at the camp beside a chalkboard",
    place: "Community & volunteers",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  packingTeam: {
    src: "/images/archive-packing-team.jpg",
    alt: "Volunteers seated on wooden benches packing seasoning cubes and supplies into small bags",
    place: "Volunteer packing line",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  packingWarmlight: {
    src: "/images/archive-packing-warmlight.jpg",
    alt: "Volunteers packing food supplies inside a camp structure in warm afternoon light",
    place: "Volunteer packing line",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  volunteerPortrait: {
    src: "/images/archive-volunteer-portrait.jpg",
    alt: "A volunteer and a young community member smiling together at the camp",
    place: "Friendship at the camp",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  mealsPrepared: {
    src: "/images/archive-meals-prepared.jpg",
    alt: "Rows of packed meal containers tied with napkins and spoons, prepared by volunteers",
    place: "Meals prepared for distribution",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  campLandscape: {
    src: "/images/archive-camp-landscape.jpg",
    alt: "Makeshift shelters and trees on open ground at an informal IDP settlement in Abuja",
    place: "Informal settlement",
    stamp: "Abuja \u00B7 2022 \u00B7 archive",
    treatment: "archive",
    consent: "confirmed",
  },
  textureContainers: {
    src: "/images/texture-containers-duotone.jpg",
    alt: "",
    place: "",
    stamp: "",
    treatment: "texture",
    consent: "confirmed",
  },
  textureMeals: {
    src: "/images/texture-meals-duotone.jpg",
    alt: "",
    place: "",
    stamp: "",
    treatment: "texture",
    consent: "confirmed",
  },
};

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Our model", href: "/model" },
    { label: "Programs", href: "/programs" },
    { label: "Get involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Partner with us", href: "/get-involved" },
};

export const hero = {
  eyebrow: "Sustainable community development \u00B7 Nigeria",
  headline: "We build what stays.",
  subhead:
    "Rebuild & Rise partners with displaced and underserved Nigerian communities to build health, education, and livelihood systems that outlast our presence.",
  primaryCta: { label: "Explore our model", href: "#model" },
  secondaryCta: { label: "Partner with us", href: "/get-involved" },
  trustLine:
    "Beginning with focused community pilots \u2014 built around dignity, training, follow-up, and measurable learning.",
  archiveStrip: {
    caption: "Abuja, 2022 \u2014 where our story began",
    imageKeys: ["groupTree01", "packingWarmlight", "mealsPrepared"],
    href: "#story",
  },
};

export const whoWeServe = {
  eyebrow: "Who we serve",
  heading:
    "Displacement and poverty create more than one barrier at a time.",
  intro:
    "Our priority is people often left outside consistent systems of support \u2014 displaced families, out-of-school children, and vulnerable households in host communities.",
  cards: [
    {
      icon: "tent",
      title: "IDP communities",
      body: "Children, women, and families living with disrupted access to healthcare, safe learning spaces, and stable livelihood opportunities.",
    },
    {
      icon: "book-open",
      title: "Almajiri & out-of-school children",
      body: "Children and adolescents facing limited adult protection, low access to learning, and barriers to long-term wellbeing.",
    },
    {
      icon: "home",
      title: "Host communities",
      body: "Vulnerable households surrounding camps and settlements who also carry the burden of poverty and limited services.",
    },
  ],
};

export const story = {
  eyebrow: "Where we come from",
  heading: "We started with relief. We learned its limits.",
  body: "In 2022, our founders organized relief in Abuja's IDP camps \u2014 meals packed by volunteer teams, distributed family by family. The work mattered: people ate, and trust was built. But the food ran out in days, and we ran out with it. We decided the next thing we built would not.",
  photos: ["groupTree01", "packingWarmlight"],
  lessonsEyebrow: "What it taught us",
  lessons: [
    {
      quote: "The supplies ran out in days.",
      maps: "So we train \u2014 skills and capacity don't run out.",
      modelStep: "train",
    },
    {
      quote: "We left, and nothing of us stayed.",
      maps: "So follow-up and local anchors are built into every pilot.",
      modelStep: "followUp",
    },
    {
      quote: "We couldn't say what actually changed.",
      maps: "So we measure, honestly, every time.",
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

export const pillars = {
  eyebrow: "Program pillars",
  heading: "Integrated support for health, learning, livelihood, and local capacity.",
  cards: [
    {
      accent: "forest",
      title: "Health access & training",
      body: "Preventive health education, hygiene, menstrual and maternal health, mental health literacy, and referral navigation.",
    },
    {
      accent: "olive",
      title: "Education & learning support",
      body: "Foundational literacy and numeracy, learning recovery, and re-entry pathways for out-of-school children.",
    },
    {
      accent: "walnut",
      title: "Skills & livelihoods",
      body: "Trades exposure, agriculture skills, financial literacy, mentorship, and apprenticeship connections.",
    },
    {
      accent: "leaf",
      title: "Community capacity",
      body: "Training local facilitators, strengthening referral pathways, and building systems that continue after we leave.",
    },
  ],
};

export const whereWeAre = {
  eyebrow: "Where we are",
  heading: "Pilot 001 is in design.",
  body: "Rebuild & Rise is registered in Nigeria and beginning with focused community pilots. Each pilot is designed around a specific community need, a clear local partnership, practical training, referral support, and simple outcome tracking.",
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
  photoEthics:
    "Every image on this site is from our founders' own fieldwork, published with consent. We do not use stock photography.",
  emptyFrameCaption: "Pilot 001 \u2014 photographs coming from the field.",
  founders: [
    {
      name: "Aysha", // TODO: full name
      role: "Co-founder & CEO",
      bio: "", // TODO: two lines
      headshot: null, // live-grade photo when available
    },
    {
      name: "Salim", // TODO: full name
      role: "Co-founder & CTO",
      bio: "", // TODO: two lines
      headshot: null,
    },
  ],
  registrationLine: "Rebuild & Rise Humanitarian Initiative is registered in Nigeria.",
};

export const getInvolved = {
  eyebrow: "Get involved",
  heading: "Help build the foundation for our first community pilots.",
  intro:
    "We're looking for people and organizations who can help us build carefully: local anchors, community partners, advisors, and supporters committed to sustainable impact in Nigeria.",
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
  primaryCta: { label: "Partner with Rebuild", href: "/get-involved" },
  secondaryCta: { label: "Contact the team", href: "/contact" },
};

export const footer = {
  wordmark: "Rebuild & Rise Humanitarian Initiative",
  mission:
    "Building rooted pathways for underserved Nigerian communities through health, education, skills training, local partnership, and sustainable community capacity.",
  email: "hello@rebuildandrise.org", // TODO: confirm final address
  location: "Nigeria \u00B7 Diaspora founding team",
  legal: "Rebuild & Rise Humanitarian Initiative is registered in Nigeria.",
};

# Rebuild & Rise — Secondary page content blueprint

**Status:** Approved by the user on 13 July 2026. This is the canonical content
blueprint for implementation of the four secondary pages.

This document contains the complete proposed public copy for `/about`,
`/model`, `/programs`, and `/get-involved`, plus shared navigation, form states,
metadata, and the public 404 page. Source notes are editorial records and must
not render on the website.

## Source hierarchy

1. **ORG** — `Statement of Purpose, Mission, Vision & Objectives (3).docx`:
   organizational identity, mission, vision, beneficiaries, principles,
   objectives, and intended approach.
2. **LEDGER** — `DESIGN_DECISIONS.md`: approved creative continuity,
   documentary treatment, and retired concepts.
3. **SITE** — `src/content/siteContent.ts`: current canonical wording, founder
   records, image records, captions, provenance, and consent status.
4. **HISTORY** — `Claude Work Conversation.md`: background reasoning only,
   never an authority for organizational claims.

The user-approved secondary-page plan is an implementation directive for
routes, content gates, form requirements, and explicit exclusions. It does not
override the four-source hierarchy for organizational facts.

## Editorial decisions applied throughout

- “Pilot 001 is in design” remains the current operational truth.
- The objectives in ORG describe intended scope, not services currently being
  delivered.
- “Trauma-aware” replaces “trauma-informed” until formal protocols, training,
  and qualified delivery structures exist.
- Partnership, access, capability, and local ownership replace savior-oriented
  “empower” language without changing the mission’s meaning.
- The only public legal statement is “registered in Nigeria.”
- Internal meeting notes, unpaid-anchor research, unapproved locations,
  partners, timelines, impact claims, and response-time promises are excluded.
- Archive photographs always describe the founders’ prior relief work. They
  never represent Pilot 001 or current Rebuild & Rise impact.

---

# `/about`

## Metadata

- **Title:** `About | Rebuild & Rise Humanitarian Initiative`
- **Description:** `Meet the Nigerian founders behind Rebuild & Rise, explore their 2022 Abuja field archive, and read the mission, vision, and principles guiding Pilot 001.`
- **Canonical:** `https://rebuildandrise.ng/about`
- **Open Graph title:** `About Rebuild & Rise`
- **Open Graph description:** Use the metadata description unchanged.

**Sources:** ORG §§1–3 and §5; SITE `story`, `whereWeAre`, and `images`.

## Opening — organizational record

- **Eyebrow:** `About Rebuild & Rise`
- **H1:** `Built from field experience and the questions it left behind.`
- **Introduction:**

  `Rebuild & Rise Humanitarian Initiative is a Nigerian organization founded by two Nigerian university students and shaped by their 2022 relief work in Abuja’s internally displaced person communities.`

- **Status annotation:** `Registered in Nigeria`
- **Status annotation:** `Pilot 001 · In design`

**Sources:** ORG §1; SITE `story.body`, `whereWeAre.statusState`, and
`whereWeAre.registrationLine`. “Non-profit” is deliberately omitted because
the approved public legal statement is only “registered in Nigeria.”

## Purpose — mission and vision

- **Eyebrow:** `Purpose`
- **H2:** `What we are building toward.`

### Mission

`Our mission is to work alongside internally displaced communities, Almajiri and out-of-school children, and other underserved Nigerians to strengthen access, capability, and local systems through integrated health, education, and skills-building initiatives designed with communities, guided by trauma-aware practice, measured honestly, and built for long-term continuity rather than dependency.`

### Vision

`We envision a Nigeria where displacement, poverty, or social exclusion does not determine whether people can access healthcare, education, and other basic needs—and where communities can rely on durable local systems instead of temporary aid alone.`

**Sources:** ORG §§2–4 and §7. The mission replaces “empower” with partnership,
access, capability, and local systems; “trauma-informed” is adapted to the
approved term “trauma-aware.”

## Origin record — ruled chronology

- **Eyebrow:** `Origin record`
- **H2:** `Relief was the beginning, not the conclusion.`
- **Introduction:**

  `This is an origin record—not an impact timeline. The 2022 fieldwork predates Rebuild & Rise.`

### 01

- **Date label:** `2022`
- **Title:** `Relief work in Abuja`
- **Body:**

  `Before Rebuild & Rise existed, our founders organized relief in Abuja’s IDP communities. Volunteer teams packed and distributed meals family by family. The work mattered: people ate, and trust was built.`

### 02

- **Date label:** `What we learned`
- **Title:** `Temporary relief could not create continuity on its own.`
- **Body:**

  `The supplies ran out in days; we left; and we could not say clearly what had changed. Those limits belonged to our method, not to the communities.`

### 03

- **Date label:** `What followed`
- **Title:** `The lessons became a model.`
- **Body:**

  `Rebuild & Rise grew from that reckoning. Its model begins with listening and partnership, then moves through practical training, referral pathways, follow-up, measurement, and local ownership.`

### 04

- **Date label:** `Now`
- **Title:** `Pilot 001 is in design.`
- **Body:**

  `Rebuild & Rise is registered in Nigeria and is designing its first focused community pilot around a specific community need, a clear local partnership, practical training, referral support, and simple outcome tracking.`

**Sources:** SITE `story`, `model`, and `whereWeAre`. The language assigns the
limits to the founders’ method rather than to the communities.

## Complete field archive

- **Eyebrow:** `Field archive · Abuja · 2022`
- **H2:** `Where our story began.`
- **Introduction:**

  `These nine photographs document the founders’ prior relief work in Abuja in 2022. They predate Rebuild & Rise and are presented as an origin record, not as evidence of current programs or organizational impact.`

- **Archive rail:** `Founders’ prior relief work · Abuja · 2022 · archive`

The contact sheet uses three visual groups. These group names are internal
layout notes and do not render as public headings.

1. Community context: `groupTree03`, `communityWomen`, `campLandscape`
2. Relief process: `packingWarmlight`, `packingTeam`, `mealsPrepared`
3. Relationships and collective record: `volunteerPortrait`, `groupTree01`,
   `groupTree02`

| Image key | Visible caption | Visible stamp |
|---|---|---|
| `groupTree03` | `Community and volunteers gathered beneath a tree` | `Abuja · 2022 · founders’ prior relief work` |
| `communityWomen` | `Women gathered beneath a tree at an Abuja IDP camp` | `Abuja · 2022 · founders’ prior relief work` |
| `campLandscape` | `Informal settlement` | `Abuja · 2022 · founders’ prior relief work` |
| `packingWarmlight` | `Volunteer packing line` | `Abuja · 2022 · founders’ prior relief work` |
| `packingTeam` | `Volunteer packing line` | `Abuja · 2022 · founders’ prior relief work` |
| `mealsPrepared` | `Meals prepared for distribution` | `Abuja · 2022 · founders’ prior relief work` |
| `volunteerPortrait` | `Friendship at the camp` | `Abuja · 2022 · founders’ prior relief work` |
| `groupTree01` | `Community & volunteers` | `Abuja · 2022 · founders’ prior relief work` |
| `groupTree02` | `Community and volunteers beneath the tree canopy` | `Abuja · 2022 · founders’ prior relief work` |

Use the manifest alt text unchanged. Keep `consent: "confirmed"` internal and
never render it as a badge.

**Sources:** SITE `fieldworkArchive` and `images`; LEDGER D24, D27, D30, and
D32; PLAN full-contact-sheet decision. HISTORY supports composition only.

## Seven-principle ledger

- **Eyebrow:** `Our principles`
- **H2:** `The standards come before the work.`
- **Introduction:**

  `Pilot 001 is in design. These seven principles are the standards by which its design—and the work that follows—must be judged.`

### 01 · Dignity first

`People are partners, not projects. Their knowledge, priorities, and agency must shape decisions that affect them.`

### 02 · Community & faith partnership

`Pilot design should be shaped with community leaders, women leaders, religious leaders, and existing structures that already hold trust and local knowledge.`

### 03 · Continuity, not drop-and-go

`We will prioritize clear roles, repeatable schedules, follow-up, and capability that can remain after an external visit ends.`

### 04 · Referral pathways

`When a need falls outside a pilot’s scope, the model should define an appropriate facility or service, how a connection is made, and how follow-up can happen.`

### 05 · Safeguarding

`Any work involving children or vulnerable people must be governed by clear safeguarding standards and ethical conduct.`

### 06 · Trauma-aware practice

`Pilot design should recognize how displacement, street-connected life, and chronic poverty can affect safety, trust, learning, and wellbeing—and respond with psychosocial sensitivity.`

### 07 · Practical accountability

`We intend to track simple outputs and outcomes, state evidence gaps honestly, and let what we learn from each pilot improve the next.`

**Sources:** ORG §5 and §7; SITE `model.steps` and `model.closing`.

## Founding team

- **Eyebrow:** `Founding team`
- **H2:** `The people responsible for what comes next.`
- **Introduction:**

  `Rebuild & Rise is led by two Nigerian university students whose roles span community relationships, research, program strategy, operations, and technology.`

- **Registration line:**

  `Rebuild & Rise Humanitarian Initiative is registered in Nigeria.`

Use the existing profiles unchanged:

### Aisha Adamu

- **Role:** `Co-founder & CEO`
- **Biography:**

  `Psychology and neuroscience student at the University of Toronto, researching the Almajiri education system as a Laidlaw Scholar. She leads community relationships, partnerships, and on-ground judgment, work she began at fifteen.`

### Salim Salim

- **Role:** `Co-founder & CTO`
- **Biography:**

  `Human Development student at Howard University working across research, program strategy, and community-centered technology. He leads systems, operations, and everything technical, including this site.`

**Sources:** ORG §1; SITE `whereWeAre.founders`,
`whereWeAre.registrationLine`, and founder image records.

## Documentary standard

- **Eyebrow:** `Documentary standard`
- **Paragraph:**

  `Field archive photographs come from our founders’ prior work and are published with consent. Representative photographs are clearly labeled and never presented as Rebuild & Rise field evidence. Illustrations are original artwork.`

**Source:** SITE `whereWeAre.photoEthics`.

## Closing invitation

- **Eyebrow:** `Next chapter`
- **H2:** `See how the lessons became a model.`
- **Body:**

  `The seven-step model moves from listening to partnership, training, connection, follow-up, measurement, and local ownership. Pilot 001 is still in design.`

- **Primary CTA:** `Explore our model` → `/model`

**Sources:** SITE `model` and `whereWeAre.heading`.

---

# `/model`

## Metadata

- **Title:** `Our Model | Rebuild & Rise Humanitarian Initiative`
- **Description:** `See the seven-step approach Rebuild & Rise is preparing to test through Pilot 001, from community listening to follow-up and local ownership.`
- **Canonical:** `https://rebuildandrise.ng/model`
- **Open Graph title:** `Our model | Rebuild & Rise`
- **Open Graph description:** Use the metadata description unchanged.

**Sources:** ORG §5 and §7; SITE `model` and `whereWeAre.statusState`; PLAN.

## Opening — working field manual

- **Eyebrow:** `Our model · Pilot 001 in design`
- **H1:** `A field manual still being tested.`
- **Lead:**

  `Rebuild & Rise is preparing to test a seven-step approach that begins with community priorities and aims to strengthen the people, relationships, and local systems already present. Pilot 001 is still in design; this page describes the working model, not a proven result.`

- **Status label:** `Field status · 001`
- **Status value:** `In design`
- **Sequence label:** `Working sequence`
- **Sequence value:** `7 steps · 3 movements`

**Sources:** ORG §7; SITE `model.intro`, `model.closing`, `model.steps`, and
`whereWeAre`; LEDGER D32–D33.

## Compact seven-step index

- **H2:** `The working sequence`
- **Introduction:**

  `Seven steps, grouped into three movements. The sequence is intended to be tested, documented, and revised through focused community pilots.`

### 01 · Assess

`Listen to needs, risks, priorities, and existing support structures.`

### 02 · Partner

`Identify trusted leaders and local structures with whom a pilot could be designed.`

### 03 · Train

`Develop practical learning around the need the pilot is addressing.`

### 04 · Connect

`Map verified referral routes to support the pilot cannot provide.`

### 05 · Follow up

`Return to document progress, barriers, and what needs to change.`

### 06 · Measure

`Track simple indicators of participation, learning, and follow-through.`

### 07 · Sustain

`Build local capability and strengthen systems that can continue beyond an external visit.`

**Sources:** SITE `model.steps` and `whereWeAre.measurement`; ORG §5 and §7.

## Why this model exists

- **Eyebrow:** `What the field taught us`
- **H2:** `Three lessons changed the method.`
- **Introduction:**

  `Our founders’ 2022 relief work mattered: people ate, volunteers served, and trust was built. Its limits also became impossible to ignore. Rebuild & Rise’s working model begins with three honest lessons about the method we used.`

### Lesson 01

- **Quote:** `“The supplies ran out in days.”`
- **Response:** `So practical learning should be tested as a way to strengthen capability after material support is gone.`

### Lesson 02

- **Quote:** `“We left, and nothing of us stayed.”`
- **Response:** `So follow-up and locally defined roles should be tested as ways to support continuity after an external visit.`

### Lesson 03

- **Quote:** `“We couldn’t say what actually changed.”`
- **Response:** `So each pilot should define simple measures before delivery begins.`

**Sources:** SITE `story.body`, `story.lessons`, and `model.legend`.

## Movement 01

- **Eyebrow:** `Movement 01 · Listen and establish trust`
- **H2:** `Assess and Partner`
- **Standfirst:** `Begin with the community already there.`
- **Body:**

  `A future pilot would begin by listening to community members about needs, risks, priorities, and the support structures that already exist. It would then identify the local leaders and institutions whose knowledge, trust, and accountability are essential to responsible planning.`

  `Possible partners may include community and faith leaders, women leaders, schools, clinics, and credible organizations. The exact partners for Pilot 001 have not yet been confirmed.`

### Local anchors

`Local anchors are intended to support communication, coordination, and follow-through close to the community. Their responsibilities, support, and safeguarding boundaries are still being defined for Pilot 001.`

### Safeguarding

`Any work involving children or vulnerable people must begin with clear ethical conduct and child-safeguarding procedures. Those operating procedures are still being developed.`

### Trauma-aware practice

`The model is intended to recognize the psychological effects of displacement, street-connected life, and chronic poverty without reducing people to those experiences. Safe practices and routes to qualified support will require local definition.`

- **Representative image key:** `modelListenPartner`
- **Image alt:** `Women speaking across a table while members of a seated team write during an outdoor community meeting.`
- **Caption:** `Public community-engagement meeting in Kaduna, Nigeria.`
- **Credit:** `mk_photoz / Pexels · not Rebuild & Rise fieldwork.`

**Sources:** ORG §5 and §7; SITE `model.steps`, `getInvolved.paths`, and
`whereWeAre.pilotSteps`; D38–D39 representative-photography decision.

## Movement 02

- **Eyebrow:** `Movement 02 · Build capability and routes onward`
- **H2:** `Train and Connect`
- **Standfirst:** `Useful learning should lead somewhere.`
- **Body:**

  `Training within a future pilot would be practical and selected around the community need—for example, health literacy, learning support, life skills, or livelihood readiness. The model does not assume that one curriculum fits every community.`

  `Connection means defining referral pathways for needs a pilot cannot safely or appropriately meet itself. Any route to a clinic, school, mentor, service, or other support would need to be locally verified before it is presented as available.`

### Referral pathways

`A responsible referral pathway identifies where someone may be connected, who is qualified to help, and how follow-up can happen where feasible. Rebuild & Rise does not replace licensed or specialist services.`

- **Representative image key:** `modelTrainConnect`
- **Image alt:** `Four men gathered around hand tools and equipment at a workshop bench.`
- **Caption:** `Men collaborating around a workshop bench in Kasese, Uganda.`
- **Credit:** `illustrate Digital Ug / Pexels · not Rebuild & Rise fieldwork.`

**Sources:** ORG §5, §6A–C, and §7; SITE `model.steps`; D38–D39
representative-photography decision.

## Movement 03

- **Eyebrow:** `Movement 03 · Return, learn, and leave strength behind`
- **H2:** `Follow up, Measure, and Sustain`
- **Standfirst:** `The work is not finished when an activity ends.`
- **Body:**

  `A pilot would return after delivery to document participation, learning, follow-through, and the barriers people still face. Simple, practical measures are intended to help the organization learn honestly, including when evidence is incomplete or mixed.`

  `Sustainability means strengthening local facilitators, relationships, and systems that can continue beyond an external visit. The goal is not to replace communities. It is to support the people and structures already present to work better together.`

### Local ownership

`The model will ask whether a pilot leaves clearer roles, stronger capability, and more useful connections rather than dependence on repeated outside presence.`

- **Representative image key:** `modelFollowMeasureSustain`
- **Image alt:** `A man in blue speaking at a table while a seated outdoor gathering listens beneath a canopy.`
- **Caption:** `A speaker addresses a seated outdoor gathering.`
- **Credit:** `Source supplied by Rebuild & Rise · not fieldwork.`

**Sources:** ORG §5, §6D, and §7; SITE `model.steps`, `model.closing`, and
`whereWeAre.measurement`; D38–D39 representative-photography decision.

### Photography note

`These representative photographs provide context for a model still in design. They do not depict Pilot 001, Rebuild & Rise participants, or organizational impact. Credits and known locations appear with each image.`

**Source:** D38–D39 transparent-provenance requirement.

## Open questions

- **Eyebrow:** `Open questions`
- **H2:** `What we are still learning`
- **Introduction:**

  `Pilot 001 is in design, so the responsible thing is to show the questions that remain open. These decisions will be resolved before they are presented as settled practice.`

### 01 · Pilot selection

`Which specific need and community context can support a focused, ethical first pilot.`

### 02 · Follow-up cadence

`How often follow-up is useful, feasible, and respectful of community time.`

### 03 · Measurement definitions

`What participation, learning, and follow-through mean for the selected pilot—and what can be measured without overburdening people.`

### 04 · Partner vetting

`How local partners and referral destinations will be checked before their roles are published or relied upon.`

### 05 · Safeguarding procedures

`The practical procedures required before work involving children or vulnerable people can begin.`

### 06 · Delivery boundaries

`What Rebuild & Rise can responsibly coordinate itself, what requires qualified partners, and what must remain outside the pilot.`

**Sources:** PLAN; SITE `whereWeAre`; ORG §5, §6D, and §7.

## Closing navigation

- **Eyebrow:** `Next chapter`
- **H2:** `See where the model could be applied.`
- **Body:**

  `The four program areas describe possible fields of work for future pilots. They do not describe services currently in delivery.`

- **Primary CTA:** `Explore program areas` → `/programs`
- **Secondary CTA:** `Discuss a partnership` → `/get-involved?path=partner#inquiry`

**Sources:** ORG §6; SITE `pillars`; PLAN route architecture.

---

# `/programs`

## Metadata

- **Title:** `Program Areas | Rebuild & Rise Humanitarian Initiative`
- **Description:** `Explore four connected areas future Rebuild & Rise pilots are being designed to address: health, education, economic opportunity, and local capacity.`
- **Canonical:** `https://rebuildandrise.ng/programs`
- **Open Graph title:** `Program areas | Rebuild & Rise`
- **Open Graph description:** Use the metadata description unchanged.

**Sources:** ORG §6; SITE `pillars`; PLAN.

## Opening — intended areas of work

- **Eyebrow:** `Program areas · In development`
- **H1:** `Integrated systems, not four campaigns.`
- **Lead:**

  `Displacement and poverty often create barriers to health access, learning, livelihood opportunity, and community capacity at the same time. Rebuild & Rise is designing future pilots to respond to a focused local need while understanding its connections to the wider system.`

- **Status label:** `Current status`
- **Status value:** `Pilot 001 is in design.`
- **Status body:**

  `These are areas the organization aims to work in. They are not a record of services currently being delivered, and no pilot is assumed to include all four areas.`

- **Index label:** `Four connected areas`
- **Index action label:** `View brief`

**Sources:** ORG §§2–4 and §6; SITE `whoWeServe.heading`, `pillars`, and
`whereWeAre`; PLAN.

## Area 01

- **Eyebrow:** `Area 01`
- **H2:** `Health access and preventive training`
- **Introduction:**

  `Future pilots may explore practical health learning and referral navigation where communities identify these as priorities. Rebuild & Rise is not presenting itself as a clinical provider.`

### What this area may include

`Preventive health and basic first-aid education; hygiene, nutrition, and disease-prevention learning; age-appropriate menstrual and reproductive health information; maternal and family-health education; mental-health literacy and trauma-aware resilience learning; and navigation to qualified services when needed.`

### Local structures it depends on

`This area would depend on verifying clinics and licensed health providers, as well as the roles of community and faith leaders, women leaders, and trusted facilitators able to communicate safely and consistently.`

### How it connects

`Health learning and referral planning would be coordinated with education, economic opportunity, and community-capacity work so scheduling, safeguarding, and follow-up do not sit in isolation.`

### What a pilot would need to learn

`Which topics are most useful; which services are qualified and reachable; where Rebuild & Rise’s role must stop; and whether participants can use the information or referral route after the activity.`

**Sources:** ORG §6A; SITE `pillars.cards[0]`.

## Area 02

- **Eyebrow:** `Area 02`
- **H2:** `Education and learning support`
- **Introduction:**

  `Future pilots may explore routes back into learning and practical support for children and community members facing barriers to education.`

### What this area may include

`Foundational literacy and numeracy; learning recovery and re-entry pathways; community learning support; mental-health literacy, psychological resilience, and neurodevelopmental awareness; and, where feasible, targeted improvements that support a safe learning environment.`

### Local structures it depends on

`Families and caregivers; schools and learning spaces; educators and faith leaders working in Almajiri or Tsangaya contexts; community-based facilitators; and relevant public or civil-society services, all of whose roles would need to be verified.`

### How it connects

`Education planning would account for health and wellbeing, build foundations useful for later skills development, and strengthen local facilitation so learning does not depend entirely on outside visits.`

### What a pilot would need to learn

`Which learners are being left out; what a safe and realistic schedule and location look like; which re-entry pathways actually exist; what facilitators need; and what learning can be measured fairly.`

**Sources:** ORG §6B; SITE `pillars.cards[1]`.

## Area 03

- **Eyebrow:** `Area 03`
- **H2:** `Skills and economic opportunity`
- **Introduction:**

  `Future pilots may explore practical training and connections that widen local opportunity. Training alone is not a promise of employment or income.`

### What this area may include

`Practical life skills; trades exposure; agriculture skills; basic economic and financial literacy; and connections to mentorship, apprenticeships, or verified local opportunities.`

### Local structures it depends on

`Locally relevant artisans, farmers, businesses, mentors, training providers, and community leaders whose roles would need to be confirmed.`

### How it connects

`Foundational learning can make skills training more accessible; health and safeguarding affect safe participation; and local facilitators and partners make meaningful follow-through possible.`

### What a pilot would need to learn

`Which skills match participant priorities and local demand; what tools or access are required; how mentorship or apprenticeship can be structured safely; and how follow-through can be tracked without implying guaranteed outcomes.`

**Sources:** ORG §6C; SITE `pillars.cards[2]`.

## Area 04

- **Eyebrow:** `Area 04`
- **H2:** `Community sustainability and local capacity`
- **Introduction:**

  `This area is the connective tissue: the local people, roles, relationships, and routines that may help useful work continue beyond an external visit.`

### What this area may include

`Training community-based facilitators; community listening and partner mapping; clearer referral and safeguarding arrangements; defined roles and schedules; and simple monitoring and learning.`

### Local structures it depends on

`Community, faith, and women leaders; local facilitators; schools and clinics; relevant government agencies; and credible organizations whose participation would need to be confirmed.`

### How it connects

`Local capacity supports every other area by giving partnership, communication, referrals, follow-up, and practical accountability a place to live within the community.`

### What a pilot would need to learn

`Who is trusted; which roles are realistic; what support local facilitators require; how decisions are shared; and which parts can continue locally without depending on repeated outside presence.`

**Sources:** ORG §6D; SITE `model.closing` and `pillars.cards[3]`.

## Shared commitments rail

- **Eyebrow:** `Shared commitments`
- **H2:** `The method travels across every area.`
- **Introduction:**

  `Whatever the program focus, the same five design commitments would guide a future pilot.`

### 01 · Partnership

`Design with community leadership and locally trusted structures.`

### 02 · Safeguarding

`Set clear ethical conduct and child-safeguarding procedures before activity involving minors or vulnerable people.`

### 03 · Referrals

`Verify where people can be connected for needs a pilot cannot safely meet.`

### 04 · Follow-up

`Return to document progress, barriers, and what needs to change.`

### 05 · Measurement

`Use simple, practical indicators and report learning honestly.`

**Sources:** ORG §5 and §7; SITE `model.steps` and
`whereWeAre.measurement`.

## Closing navigation

- **H2:** `A pilot begins with a specific need.`
- **Body:**

  `Pilot 001 will be scoped around community listening, local partnership, safeguards, and a realistic learning plan. It will not be presented as four programs delivered at once.`

- **Primary CTA:** `Read our model` → `/model`
- **Secondary CTA:** `Discuss a partnership` → `/get-involved?path=partner#inquiry`

**Sources:** SITE `whereWeAre.body` and `whereWeAre.pilotSteps`; PLAN.

---

# `/get-involved`

## Metadata

- **Title:** `Get involved | Rebuild & Rise Humanitarian Initiative`
- **Description:** `Explore partnership, on-ground anchor, advisory, and pilot-support inquiries with Rebuild & Rise Humanitarian Initiative in Nigeria.`
- **Canonical:** `https://rebuildandrise.ng/get-involved`
- **Open Graph title:** `Get involved with Rebuild & Rise`
- **Open Graph description:** Use the metadata description unchanged.

**Sources:** PLAN; SITE `footer`.

## Opening — forest field

- **Eyebrow:** `Get involved`
- **H1:** `Help build the foundation for our first community pilots.`
- **Introduction:**

  `Rebuild & Rise is registered in Nigeria, and Pilot 001 is in design. We welcome early conversations with people and organizations whose local knowledge, professional judgment, or practical support could help us build carefully.`

- **Status annotation:** `Registered in Nigeria · Pilot 001 in design`
- **Qualification note:**

  `An inquiry starts a conversation. It does not confirm a role, partnership, advisory appointment, or funding relationship.`

- **Primary CTA:** `Choose a pathway` → `#pathways`
- **Secondary CTA:** `Email the team` → `mailto:contact@rebuildandrise.ng`

**Sources:** SITE `getInvolved` and `whereWeAre`; ORG §5 and §7; PLAN.

## Participation index

- **Anchor ID:** `pathways`
- **Eyebrow:** `Ways to participate`
- **H2:** `Choose the route that fits.`
- **Introduction:**

  `Each route leads to one inquiry form. Select the closest fit so the team can understand why you are getting in touch.`

Use the same four public field labels for every route:

1. `Who this is for`
2. `What you might contribute`
3. `What Rebuild & Rise commits to`
4. `What happens next`

### 01 · Community or institutional partner

- **Who this is for:**

  `Schools, clinics, community groups, faith organizations, NGOs, and other credible institutions with relevant local knowledge or services.`

- **What you might contribute:**

  `Share community priorities, local context, referral options, or practical capacity that could inform a focused pilot.`

- **What Rebuild & Rise commits to:**

  `We will listen first and clarify fit, safeguarding, referral responsibilities, and follow-up before any collaboration is confirmed.`

- **What happens next:**

  `Your inquiry begins a conversation about fit. It does not confirm a partnership or delivery role.`

- **CTA:** `Inquire as a partner` → `/get-involved?path=partner#inquiry`

**Sources:** ORG §5 and §6D; SITE `getInvolved.paths`; PLAN.

### 02 · On-ground anchor expression of interest

- **Who this is for:**

  `Community-minded people in Nigeria who know local contexts and may be able to support communication, coordination, and follow-up.`

- **What you might contribute:**

  `Share local knowledge, identify existing community structures, or explore how a trusted local point of contact might support future communication and follow-up.`

- **What Rebuild & Rise commits to:**

  `We will be clear about the pilot’s stage and will not treat an inquiry as a confirmed role.`

- **What happens next:**

  `If a relevant need develops, the team may contact you to learn more about your experience and local context.`

- **CTA:** `Express interest` → `/get-involved?path=anchor#inquiry`

**Sources:** ORG §5 and §7; SITE `getInvolved.paths`; PLAN. Internal meeting
notes about salary, time, supervision, expenses, eligibility, and placement
are deliberately excluded.

### 03 · Professional advisor

- **Who this is for:**

  `Professionals in health, education, safeguarding, community development, law, finance, monitoring and evaluation, or research.`

- **What you might contribute:**

  `Review a defined question, challenge assumptions, strengthen safeguards, or help shape practical measurement.`

- **What Rebuild & Rise commits to:**

  `We will be clear about the question, the evidence available, and the stage of work before requesting your involvement.`

- **What happens next:**

  `If your experience matches a current question, the team may invite a focused conversation.`

- **CTA:** `Offer professional advice` → `/get-involved?path=advisor#inquiry`

**Sources:** ORG §5–7; SITE `getInvolved.paths`; PLAN.

### 04 · Pilot supporter

- **Who this is for:**

  `Individuals or organizations interested in supporting focused, practical, measurable community work.`

- **What you might contribute:**

  `Discuss what responsible support could look like once a pilot has a defined need, scope, and accountability approach.`

- **What Rebuild & Rise commits to:**

  `We will represent the work at its actual stage and will not make unsupported impact or outcome claims.`

- **What happens next:**

  `This page starts a conversation. It does not process a donation, create a funding commitment, or make any claim about tax deductibility.`

- **CTA:** `Discuss pilot support` → `/get-involved?path=supporter#inquiry`

**Sources:** ORG §5; SITE `getInvolved.paths`; PLAN.

## What happens next

- **Eyebrow:** `What happens next`
- **H2:** `A careful beginning has four steps.`

### 01 · Send an inquiry

`Choose the pathway that fits and share only the context needed for a first conversation.`

### 02 · We review fit

`The team reviews the inquiry against the organization’s current stage, priorities, and responsibilities.`

### 03 · We define scope

`If there is a possible fit, the next conversation clarifies purpose, roles, safeguarding, boundaries, and follow-up.`

### 04 · We decide together

`No role or partnership is assumed. Both sides decide whether there is a responsible next step.`

**Sources:** ORG §5 and §7; PLAN. These steps describe the intended inquiry
process and do not promise a response time or outcome.

## Inquiry form

- **Anchor ID:** `inquiry`
- **Eyebrow:** `Inquiry`
- **H2:** `Start a conversation.`
- **Introduction:**

  `Tell us which pathway fits and what you would like to explore. Please share only the information needed for this first conversation.`

### Representative photograph

- **Image key:** `contactCorrespondence`
- **Literal alt text:** `A man in a patterned cap and a close group of children look toward the camera`
- **Caption label:** `Representative photograph`
- **Credit:** `Richard Badejo / Pexels · not Rebuild & Rise fieldwork`
- **Public provenance statement:**

  `This licensed photograph is representative. It does not depict Rebuild & Rise activity, participants, or impact.`

- **Source:** `https://www.pexels.com/photo/a-man-and-young-boys-smiling-at-the-camera-5409261/`

**Sources:** User-supplied licensed Pexels photograph; LEDGER D39's
representative-photography boundary. No location, beneficiary status, or
organizational relationship is assigned to anyone shown.

### Before you write

- **Eyebrow:** `Before you write`
- **Heading:** `A useful first note is simple.`
- **01 · Name the pathway:**

  `Tell us which participation route is the closest fit for your inquiry.`

- **02 · Share useful context:**

  `Include your general city or country, organization if relevant, and what you would like to explore.`

- **03 · Protect private information:**

  `Do not include medical information, details about children, home addresses, identity documents, financial account information, or other sensitive personal data.`

- **Required-fields note:** `* Required`

### Name

- **Label:** `Name *`
- **Autocomplete:** `name`
- **Required error:** `Enter your name.`

### Email address

- **Label:** `Email address *`
- **Autocomplete:** `email`
- **Help:** `A reply, if needed, will be sent here.`
- **Required error:** `Enter your email address.`
- **Format error:** `Enter a valid email address.`

### Pathway

- **Label:** `Pathway *`
- **Default option:** `Choose a pathway`
- **Options:**
  - `Community or institutional partner`
  - `On-ground anchor expression of interest`
  - `Professional advisor`
  - `Pilot supporter`
- **Required error:** `Choose a pathway.`

### City or country

- **Label:** `City or country (optional)`
- **Help:** `General location only; do not include a street address.`

### Organization

- **Label:** `Organization (optional)`
- **Autocomplete:** `organization`
- **Help:** `Leave blank if you are contacting us as an individual.`

### Message

- **Label:** `Message *`
- **Help:**

  `Tell us what brought you here and what you may be able to contribute. Do not include medical information, details about children, identity documents, financial account information, or other sensitive personal data.`

- **Required error:** `Tell us briefly why you are getting in touch.`

### Honeypot

- **Visually hidden label:** `Website (leave blank)`

### Privacy and fallback

- **Privacy note:**

  `Privacy note: This form is delivered through Formspree. Submit only the information needed for this inquiry. Do not include medical information, details about children, home addresses, identity documents, financial account information, or other sensitive personal data. Attachments are not accepted.`

- **Visible fallback:** `Prefer email? Write to contact@rebuildandrise.ng.`
- **Submit label:** `Send inquiry`
- **Submitting label:** `Sending inquiry…`

### Submission states

- **Success heading:** `Inquiry sent.`
- **Success message:**

  `Your inquiry was submitted successfully.`

- **Network or provider error heading:** `Your inquiry was not sent.`
- **Network or provider error message:**

  `Your entries are still here. Please try again, or email contact@rebuildandrise.ng directly.`

- **Missing endpoint eyebrow:** `Current inquiry route`
- **Missing endpoint heading:** `Email is the way to reach us for now.`
- **Missing endpoint message:**

  `Online inquiries have not been connected yet. Email the team and include the pathway that best describes you.`

- **Visible address label:** `Write to`
- **Visible address:** `contact@rebuildandrise.ng`
- **Missing endpoint CTA:** `Open email`
- **Generic validation summary:** `Review the highlighted fields and try again.`

**Sources:** PLAN; SITE `footer.email`. Unknown or absent `path` query values
leave the pathway unselected and are never displayed or submitted.

## Documentary closing

- **Image key:** `groupTree01`
- **External caption, left:** `Community & volunteers`
- **External caption, right:** `Abuja · 2022 · founders’ prior relief work`
- **Eyebrow:** `Archive note`
- **Provenance statement:**

  `This photograph records the founders’ prior relief work in Abuja in 2022. It does not depict Pilot 001 or current Rebuild & Rise impact.`

- **H2:** `Build what stays.`

**Sources:** SITE `images.groupTree01`; LEDGER D30 and D32; PLAN.

---

# Shared public copy and destinations

## Global navigation

- `About` → `/about`
- `Our model` → `/model`
- `Program areas` → `/programs`
- `Get involved` → `/get-involved`
- `Contact` → `/get-involved#inquiry`
- **Header CTA:** `Partner with us` → `/get-involved?path=partner#inquiry`

The footer uses the same four principal page labels. On `/get-involved`, only
`Get involved` receives `aria-current="page"`; `Contact` remains an in-page
destination.

## Query mapping

- `partner` → `Community or institutional partner`
- `anchor` → `On-ground anchor expression of interest`
- `advisor` → `Professional advisor`
- `supporter` → `Pilot supporter`

## `/contact`

Permanent destination: `/get-involved#inquiry`. No standalone page copy.

## Public 404 page

- **Metadata title:** `Page not found | Rebuild & Rise`
- **Eyebrow:** `404 · Page not found`
- **H1:** `This page does not exist.`
- **Body:**

  `The address may be incomplete, or the page may have moved. Return to the homepage or contact the Rebuild & Rise team.`

- **Primary CTA:** `Return home` → `/`
- **Secondary CTA:** `Contact the team` → `/get-involved#inquiry`

**Sources:** PLAN route architecture; SITE `footer.email` and current brand
voice. The 404 makes no organizational claim.

## Formspree environment fallback

When `NEXT_PUBLIC_FORM_ENDPOINT` is absent, the public form area renders the
missing-endpoint heading, message, and email CTA defined above. It must not
render a submit control that cannot work.

## Explicit exclusions

Do not publish or imply:

- Current beneficiaries reached, current field operations, active services,
  confirmed partners, named Pilot 001 communities, or program timelines.
- A proven, validated, evidence-based, or replicable model.
- Clinical diagnosis, treatment, licensed mental-health delivery, or
  responsibility for services that require qualified providers.
- Employment, income, self-reliance, learning, or health outcome guarantees.
- Donation processing, tax deductibility, receipts, charitable status, or a
  registration number.
- Testimonials, endorsements, impact counters, success rates, or fabricated
  metrics.
- Unpaid-anchor recruitment terms, response-time promises, attachments, home
  addresses, medical information, details about children, identity records,
  financial account information, or other sensitive personal data.

---

# Approval checklist

The user’s approval should explicitly cover:

- Public mission and vision adaptations.
- All four page headlines, bodies, labels, and CTAs.
- “Trauma-aware” terminology and the safeguarding boundary language.
- The complete nine-image About archive and its provenance disclaimer.
- The Model page’s explicit open questions and non-proven status.
- Program Areas as intended scope rather than active services.
- Participation-route expectations and the Formspree privacy copy.
- Navigation labels, metadata descriptions, 404 copy, and email fallback.

After approval, the next implementation phase may begin by transferring these
strings into typed exports in `siteContent.ts`. No page component should
hardcode public prose.

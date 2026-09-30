/*
  LEAFLET LIST — the only file you need to edit to add, remove or update leaflets.

  Each leaflet needs:
    id        short unique code, lowercase, no spaces (goes into the patient link, so keep it short)
    title     what the patient sees
    desc      one short line telling the patient what it's about (optional)
    category  must match one of the category names below
    source    who produced it, e.g. "NHS Lothian" or "OAA"
    file      path to a PDF in the /leaflets folder (for local leaflets)
      OR
    url       full web address (for leaflets hosted elsewhere)
    review    review date, shown on the clinic page only so staff can spot out-of-date leaflets (optional)
    source must match one of the names under "sources" to get a coloured badge

  Never change an existing leaflet's id — old QR codes use it. To retire a leaflet, delete its entry.
*/

window.LEAFLET_CONFIG = {
  siteName: "Your Pregnancy Information",
  clinicName: "Obstetric Anaesthetic Clinic",

  // Header logo shown on both pages. Put the official file in the /img folder and add its path,
  // e.g. "img/nhs-lothian-logo.png". Leave as "" for no logo.
  logo: "img/nhs-lothian-logo.png",

  // Source badges shown on the right of each leaflet on the clinic page.
  // style "a" = blue, "b" = purple. To show an official emblem instead of the text badge,
  // put the image in /img and add its path as logo, e.g. logo: "img/oaa.png".
  sources: {
    "NHS Lothian": { style: "a", logo: "" },
    "OAA":         { style: "b", logo: "" },
    "OAA / RCoA":  { style: "b", logo: "" }
  },

  // Websites shown on every patient page
  featured: [
    {
      title: "Your pain relief options in NHS Lothian",
      url: "https://services.nhslothian.scot/maternity/your-pain-relief-options-in-nhs-lothian/",
      description: "The pain relief choices available for labour and birth in NHS Lothian."
    },
    {
      title: "Types of birth",
      url: "https://services.nhslothian.scot/maternity/types-of-birth/",
      description: "NHS Lothian information about the different ways your baby may be born."
    },
    {
      title: "Labour Pains",
      url: "https://www.labourpains.org",
      description: "Information about pain relief and anaesthesia in labour and for caesarean birth, from the Obstetric Anaesthetists' Association."
    }
  ],

  // Order here is the order shown on screen
  categories: [
    "Pain relief in labour",
    "Anaesthesia for caesarean birth",
    "Your health in pregnancy",
    "Blood and bleeding",
    "Emotional wellbeing"
  ],

  leaflets: [
    // Pain relief in labour
    { id: "epi",   title: "Epidural pain relief in labour",           desc: "What an epidural is, how it's put in, and what to expect afterwards.",
      category: "Pain relief in labour", source: "NHS Lothian", file: "leaflets/epidural-pain-relief.pdf" },
    { id: "epir",  title: "Epidurals: risks and side effects",       desc: "A picture guide to how common the side effects and risks of an epidural are.",
      category: "Pain relief in labour", source: "OAA / RCoA",  file: "leaflets/epidural-risks-side-effects.pdf" },
    { id: "mob",   title: "Moving around with an epidural",          desc: "How a mobile epidural lets you stay upright and move during labour.",
      category: "Pain relief in labour", source: "NHS Lothian", file: "leaflets/mobilising-with-epidural.pdf", review: "Nov 2026" },
    { id: "remi",  title: "Remifentanil PCA pain relief for labour", desc: "A drip-based pain relief you control with a button, often used if an epidural isn't suitable.",
      category: "Pain relief in labour", source: "NHS Lothian", file: "leaflets/remifentanil-pca.pdf" },

    // Anaesthesia for caesarean birth
    { id: "spin",  title: "Spinal anaesthetics: risks and side effects", desc: "A picture guide to the spinal anaesthetic used for most caesarean births.",
      category: "Anaesthesia for caesarean birth", source: "OAA / RCoA", file: "leaflets/spinal-risks-side-effects.pdf" },
    { id: "ga",    title: "General anaesthetic for caesarean birth", desc: "Why a general anaesthetic is sometimes needed and what happens.",
      category: "Anaesthesia for caesarean birth", source: "OAA", file: "leaflets/general-anaesthetic-caesarean-oaa.pdf" },
    { id: "gal",   title: "General anaesthetic for caesarean birth", desc: "Why a general anaesthetic is sometimes needed and what happens, at NHS Lothian.",
      category: "Anaesthesia for caesarean birth", source: "NHS Lothian", file: "leaflets/general-anaesthetic-caesarean-nhsl.pdf", review: "Oct 2029" },
    { id: "risk",  title: "Risks of anaesthesia explained",          desc: "How likely the risks of epidurals, spinals and general anaesthetics are, compared with everyday risks.",
      category: "Anaesthesia for caesarean birth", source: "OAA", file: "leaflets/risks-of-anaesthesia-explained.pdf" },

    // Your health in pregnancy
    { id: "bmi",   title: "Body mass index (BMI) and pregnancy",     desc: "Why you may be offered an anaesthetic appointment and how we plan for a safe birth.",
      category: "Your health in pregnancy", source: "NHS Lothian", file: "leaflets/bmi-and-pregnancy.pdf", review: "May 2025" },
    { id: "lmwh",  title: "Blood thinning injections in pregnancy",  desc: "How the timing of your injections affects pain relief and anaesthetic choices.",
      category: "Your health in pregnancy", source: "NHS Lothian", file: "leaflets/blood-thinning-injections.pdf" },
    { id: "back",  title: "Back problems and pain relief in labour", desc: "Pain relief and anaesthetic options if you have back problems.",
      category: "Your health in pregnancy", source: "NHS Lothian", file: "leaflets/back-problems.pdf", review: "Jun 2021" },

    // Blood and bleeding
    { id: "cell",  title: "Cell salvage during caesarean birth",     desc: "How your own blood can be collected, cleaned and given back to you during a caesarean.",
      category: "Blood and bleeding", source: "NHS Lothian", file: "leaflets/cell-salvage.pdf", review: "Oct 2021" },
    { id: "blood", title: "Choices if you may refuse blood products", desc: "Treatments and options available if you do not wish to receive blood.",
      category: "Blood and bleeding", source: "NHS Lothian", file: "leaflets/refusing-blood-products.pdf" },

    // Emotional wellbeing
    { id: "mnpi",  title: "Maternity and Neonatal Psychological Interventions service", desc: "Support for emotional difficulties linked to pregnancy, birth or a baby's neonatal stay.",
      category: "Emotional wellbeing", source: "NHS Lothian", file: "leaflets/psychological-support-mnpi.pdf", review: "Apr 2025" }
  ],

  // One-click presets on the clinic page (use leaflet ids). Edit to suit your clinic.
  bundles: [
    { name: "Labour pain relief",     ids: ["epi", "epir", "mob", "remi"] },
    { name: "Planned caesarean",      ids: ["spin", "gal", "risk"] },
    { name: "Raised BMI",             ids: ["bmi", "epi", "epir", "mob", "spin", "gal", "risk"] },
    { name: "Blood thinners",         ids: ["lmwh", "epi", "remi", "spin"] },
    { name: "Declines blood products", ids: ["blood", "cell"] }
  ]
};

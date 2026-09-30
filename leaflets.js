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
  // e.g. "nhs-lothian-logo.png". Leave as "" for no logo.
  logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDIiIGhlaWdodD0iMzQxLjMzODEzIiB2aWV3Qm94PSIwIDAgMTMyLjgyMDgzIDkwLjMxMjM4NSIgdmVyc2lvbj0iMS4xIiBpZD0ic3ZnMjA4NCI+IDxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTMuMTg0MjksLTM2LjAwNjY2MykiPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjkyNzc0NDksMCwwLDEuOTI3NzQ0OSwtNTguMDIzMjQxLC04NjkuMjU2NzkpIiBpZD0iZzIwNTUiPiA8cGF0aCBzdHlsZT0iZmlsbDojMDA0MjdmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDE2Ni4xMjUsNDc3LjU2NjQxIGMgLTIuNDQxNDEsLTAuNzIyNjYgLTMuODkwNjMsLTAuODc4OTEgLTMuODkwNjMsLTIuMjM4MjkgMCwtMC45MzM1OSAwLjg3NSwtMS42MjUgMi4zODI4MiwtMS42MjUgMS43OTY4NywwIDQuOTQ1MzEsMS4zOTg0NCA0Ljk0NTMxLDEuMzk4NDQgbCAxLjYwMTU2LC0zLjcwNzAzIGMgMCwwIC0yLjgzMjAzLC0xLjY2MDE2IC02LjM2MzI4LC0xLjY2MDE2IC00LjczODI4LDAgLTcuNzg5MDYsMi41ODIwNCAtNy43ODkwNiw1Ljk5MjE5IDAsMi45NTcwMyAxLjkzMzU5LDQuMjg5MDYgNi4wNjY0LDUuMzgyODEgMi4zMjQyMiwwLjYwOTM4IDMuNzQyMTksMS4wODk4NSAzLjc0MjE5LDIuNjA5MzggMCwxLjExNzE5IC0xLjA1NDY5LDEuOTQ1MzEgLTIuNDE0MDYsMS45NDUzMSAtMy4wNTA3OCwwIC02LjMzMjAzLC0xLjg1NTQ3IC02LjMzMjAzLC0xLjg1NTQ3IGwgLTEuNzE0ODUsMy42MzI4MiBjIDAsMCAyLjgzNTk0LDIuMjQ2MDkgNy4zNTE1NywyLjI0NjA5IDUuMTMyODEsMCA4LjMzMjAzLC0yLjY5MTQxIDguMzMyMDMsLTYuMzY3MTkgMCwtMi44NTE1NiAtMS45Mjk2OSwtNC41ODIwMyAtNS45MTc5NywtNS43NTM5IiBpZD0icGF0aDEzNTEiIC8+IDxwYXRoIHN0eWxlPSJmaWxsOiMwMDQyN2Y7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMTIxLjg2NzE5LDQ3MC4wOTM3NSBjIC0yLjMwNDY5LDAuMDA0IC00LjY2MDE2LDAgLTQuNjYwMTYsMCBWIDQ4OS4xMjUgaCA0LjgzNTk0IGwgLTAuMDIzNCwtMTEuMzA0NjkgYyAwLDAgMy43ODEyNSw2LjUzMTI1IDcuMTQ0NTMsMTEuMzA0NjkgMy4yNjU2MywwLjAwNCA0LjAzNTE2LDAgNC4wMzUxNiwwIHYgLTE5LjAyNzM0IGggLTQuNzQ2MSBsIDAuMDA0LDkuOTE0MDYgYyAwLDAgLTIuNjU2MjUsLTQuNjI4OTEgLTYuNTg5ODQsLTkuOTE3OTciIGlkPSJwYXRoMTM1MyIgLz4gPHBhdGggc3R5bGU9ImZpbGw6IzAwNDI3ZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAxNDguNzgxMjUsNDg5LjA4OTg0IHYgLTguMTk5MjIgaCAtNy4xODM1OSB2IDguMTk5MjIgaCAtNC44Mzk4NSB2IC0xOC45ODgyOCBoIDQuODM5ODUgdiA3LjIxODc1IGggNy4xODM1OSB2IC03LjIxODc1IGggNC44MjgxMiB2IDE4Ljk4ODI4IHogbSAwLDAiIGlkPSJwYXRoMTM1NSIgLz4gPHBhdGggc3R5bGU9ImZpbGw6IzAwOTRkYztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAxNDQuMDc4MTIsNTAwLjcxMDk0IGMgLTEuNTc0MjEsLTIuODIwMzIgLTYuOTM3NSwtNy40ODgyOCAtMTYuNDY0ODQsLTUuOTUzMTMgLTMuNjE3MTksMC4zMTI1IC01LjEyMTA5LDAuNTM5MDYgLTcuMDQyOTcsMC4zOTA2MyAtNy41ODIwMywtMC41ODIwMyAtOC45MDYyNSwtNC43Njk1MyAtOC45NzY1NiwtNC45OTYxIGggLTEuODk0NTMgYyAwLDAgMS4wNDI5Nyw4LjE0NDUzIDkuMzM5ODQsOS41MTk1MyAyLjAzMTI1LDAuMzM1OTQgNi4yNjk1MywtMC4wNjI1IDkuMDA3ODEsLTAuNTExNzEgNi43MjI2NiwtMS4xMDE1NyAxMS44NzExLC0xLjI3NzM1IDE2LjAzOTA3LDQuNDkyMTggMCwwIDAuMDU0NywwLjA2MjUgMC4xMDE1NiwwLjA2MjUgMC4wODU5LDAgMC4xMDkzNywtMC4wNjI1IDAuMTA5MzcsLTAuMDYyNSAwLDAgMC41NDI5NywtMS4xMDU0NyAtMC4yMTg3NSwtMi45NDE0IiBpZD0icGF0aDEzNTciIC8+IDxwYXRoIHN0eWxlPSJmaWxsOiMwMDk0ZGM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMTc2LjQyNTc4LDQ5MC4xNTIzNCBjIC0wLjA3MDMsMC4yMjY1NyAtMS40NzI2Niw0LjM5NDUzIC05LjA1ODU5LDQuOTc2NTcgLTEuOTE3OTcsMC4xNDg0MyAtMy40MjE4OCwtMC4wNzgxIC03LjA0Mjk3LC0wLjM5MDYzIC05LjQ0NTMxLC0xLjUxOTUzIC0xMy40NDUzMSwzLjEzNjcyIC0xNC42MDE1Niw1LjY2Nzk3IC0wLjc1NzgyLDEuNjk5MjIgLTAuMzQzNzUsMy4yNDYwOSAtMC4zNDM3NSwzLjI0NjA5IDAsMCAwLjAyNzMsMC4wNjI1IDAuMDk3NywwLjA2MjUgMC4wNDY5LDAgMC4wOTc3LC0wLjA2MjUgMC4wOTc3LC0wLjA2MjUgNC4xNzE4NywtNS43Njk1MyA3LjU5Mzc1LC01LjYwOTM3IDE0LjMyMDMxLC00LjUxMTcyIDIuNzM4MjgsMC40NDkyMiA2Ljk3MjY2LDAuODQ3NjYgOS4wMDM5MSwwLjUxMTcyIDguMzAwNzgsLTEuMzc1IDkuNDI1NzgsLTkuNSA5LjQyNTc4LC05LjUgeiBtIDAsMCIgaWQ9InBhdGgxMzU5IiAvPiA8cGF0aCBzdHlsZT0iZmlsbDojMDA0MjdmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJNIDEyMy4xMzI4MSw1MDYuODgyODEgSCAxMjUgdiA4LjAyMzQ0IGggMy42NzU3OCB2IDEuMjQyMTkgaCAtNS41NDI5NyB6IG0gMCwwIiBpZD0icGF0aDEzNjEiIC8+IDxwYXRoIHN0eWxlPSJmaWxsOiMwMDQyN2Y7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMTMyLjIzODI4LDUxNi4zMDg1OSBjIDIuMDc4MTMsMCAzLjQ4MDQ3LC0xLjQ5NjA5IDMuNDgwNDcsLTMuNTQ2ODcgMCwtMi4xNDQ1MyAtMS42OTE0MSwtMy4zODY3MiAtMy40ODA0NywtMy4zODY3MiAtMS43NzM0NCwwIC0zLjQ2ODc1LDEuMjQyMTkgLTMuNDY4NzUsMy4zODY3MiAwLDIuMDUwNzggMS40MDIzNCwzLjU0Njg3IDMuNDY4NzUsMy41NDY4NyBtIDAsLTAuOTgwNDcgYyAtMS4yNTc4MSwwIC0xLjYwMTU2LC0xLjQwMjM0IC0xLjYwMTU2LC0yLjU2NjQgMCwtMS4wOTc2NiAwLjM5ODQ0LC0yLjQxMDE2IDEuNjAxNTYsLTIuNDEwMTYgMS4yMzA0NywwIDEuNjE3MTksMS4zMTI1IDEuNjE3MTksMi40MTAxNiAwLDEuMTY0MDYgLTAuMzMyMDMsMi41NjY0IC0xLjYxNzE5LDIuNTY2NCIgaWQ9InBhdGgxMzYzIiAvPiA8cGF0aCBzdHlsZT0iZmlsbDojMDA0MjdmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDEzOC41NjY0MSw1MDkuNTMxMjUgaCAxLjczNDM3IHYgMC45MDIzNCBoIC0xLjczNDM3IHYgMy4yNTM5MSBjIDAsMS4wODU5NCAwLjMzMjAzLDEuNTUwNzggMC45MTQwNiwxLjU1MDc4IDAuMzgyODEsMCAwLjYwNTQ3LC0wLjEwOTM3IDAuODQ3NjUsLTAuMjI2NTYgbCAwLjMwMDc5LDAuODc1IGMgLTAuNTE1NjMsMC4yNzczNCAtMS4xNDg0NCwwLjQyMTg3IC0xLjczMDQ3LDAuNDIxODcgLTEuNDU3MDMsMCAtMi4wOTM3NSwtMC43NjU2MiAtMi4wOTM3NSwtMi4xMTcxOCB2IC0zLjc1NzgyIGggLTAuOTI1NzggdiAtMC45MDIzNCBoIDAuOTI1NzggdiAtMS41ODk4NCBsIDEuNzYxNzIsLTAuMzk0NTQgeiBtIDAsMCIgaWQ9InBhdGgxMzY1IiAvPiA8cGF0aCBzdHlsZT0iZmlsbDojMDA0MjdmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDE0My4xMjEwOSw1MTAuMzEyNSBjIDAuNTkzNzUsLTAuNjM2NzIgMS40Mjk2OSwtMC45NDE0MSAyLjI2MTcyLC0wLjk0MTQxIDEuNTQ2ODgsMCAyLjM3MTEsMC44NDc2NiAyLjM3MTEsMi41MTU2MyB2IDQuMjY1NjIgaCAtMS43NjE3MiB2IC00LjA2NjQgYyAwLC0wLjkyNTc4IC0wLjQxMDE2LC0xLjUzNTE2IC0xLjMyNDIyLC0xLjUzNTE2IC0wLjg1OTM4LDAgLTEuNTM1MTYsMC41NzAzMSAtMS41MzUxNiwxLjY1NjI1IHYgMy45NDUzMSBoIC0xLjc2MTcyIHYgLTkuNzMwNDcgaCAxLjc1IHogbSAwLDAiIGlkPSJwYXRoMTM2NyIgLz4gPHBhdGggc3R5bGU9ImZpbGw6IzAwNDI3ZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAxNDguNzE4NzUsNTA3LjU0Njg3IGMgMCwtMC41MDM5IDAuNDI1NzgsLTEuMDE5NTMgMS4wMTk1MywtMS4wMTk1MyAwLjYwOTM4LDAgMS4wODU5NCwwLjUwMzkxIDEuMDg1OTQsMS4wMTk1MyAwLDAuNTY2NDEgLTAuNDEwMTYsMS4xMDkzOCAtMS4wNTg2LDEuMTA5MzggLTAuNjIxMDksMCAtMS4wNDY4NywtMC41NDI5NyAtMS4wNDY4NywtMS4xMDkzOCBtIDEuOTMzNTksOC42MDE1NyBoIC0xLjc2MTcyIHYgLTYuNjE3MTkgaCAxLjc2MTcyIHogbSAwLDAiIGlkPSJwYXRoMTM2OSIgLz4gPHBhdGggc3R5bGU9ImZpbGw6IzAwNDI3ZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAxNTUuNTc0MjIsNTE1LjE4MzU5IGMgMCwwLjM1NTQ3IDAuMDM5MSwwLjc0MjE5IDAuMTcxODcsMC45NjQ4NSBoIDEuODY3MTkgYyAtMC4yMTA5NCwtMC40NjA5NCAtMC4yNzczNCwtMS4wODIwMyAtMC4yNzczNCwtMS42MTMyOCB2IC0yLjY5OTIyIGMgMCwtMi4wNjY0MSAtMS40OTYxLC0yLjQ2NDg1IC0yLjcxNDg1LC0yLjQ2NDg1IC0wLjkxMDE1LDAgLTEuNzE4NzUsMC4yMjY1NyAtMi41MzkwNiwwLjkwMjM1IGwgMC41NjY0MSwwLjgzMjAzIGMgMC40NjQ4NCwtMC4zOTQ1MyAwLjk5MjE4LC0wLjY3MTg4IDEuNzUsLTAuNjcxODggMC41NjY0LDAgMS4xMDkzNywwLjM4MjgyIDEuMjAzMTIsMC45OTIxOSBsIC0xLjU2MjUsMC40NjA5NCBjIC0xLjUzNTE1LDAuNDM3NSAtMi40NDkyMiwxLjE1MjM0IC0yLjQ0OTIyLDIuNDEwMTUgMCwxLjIxODc1IDAuODU5MzgsMi4wMTE3MiAxLjg5NDUzLDIuMDExNzIgMC42MDkzOCwwIDEuMjAzMTMsLTAuNDEwMTUgMS42OTUzMiwtMC43OTI5NyB6IG0gMC4wMjczLC0yLjg3MTA5IGMgMC4xMzI4MSwxLjk0NTMxIC0wLjc4MTI1LDIuODIwMzEgLTEuNDg0MzcsMi44MjAzMSAtMC40MjE4OCwwIC0wLjc5Mjk3LC0wLjM5ODQ0IC0wLjc5Mjk3LC0wLjk4MDQ3IDAsLTAuNzUzOSAwLjQzNzUsLTEuMjU3ODEgMS4yOTY4NywtMS41MjM0MyB6IG0gMCwwIiBpZD0icGF0aDEzNzEiIC8+IDxwYXRoIHN0eWxlPSJmaWxsOiMwMDQyN2Y7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMTYwLjI2MTcyLDUxMC4zMTI1IGMgMC41OTM3NSwtMC42MzY3MiAxLjQyOTY5LC0wLjk0MTQxIDIuMjYxNzIsLTAuOTQxNDEgMS41NTA3OCwwIDIuMzcxMDksMC44NDc2NiAyLjM3MTA5LDIuNTE1NjMgdiA0LjI2NTYyIGggLTEuNzYxNzIgdiAtNC4wNjY0IGMgMCwtMC45MjU3OCAtMC40MTAxNSwtMS41MzUxNiAtMS4zMjQyMiwtMS41MzUxNiAtMC44NTkzNywwIC0xLjUzNTE1LDAuNTcwMzEgLTEuNTM1MTUsMS42NTYyNSB2IDMuOTQ1MzEgaCAtMS43NTc4MiB2IC02LjYyMTA5IGggMS43NDYxIHogbSAwLDAiIGlkPSJwYXRoMTM3MyIgLz4gPC9nPiA8L2c+IDwvc3ZnPg==",

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
      category: "Pain relief in labour", source: "NHS Lothian", file: "epidural-pain-relief.pdf" },
    { id: "epir",  title: "Epidurals: risks and side effects",       desc: "A picture guide to how common the side effects and risks of an epidural are.",
      category: "Pain relief in labour", source: "OAA / RCoA",  file: "epidural-risks-side-effects.pdf" },
    { id: "mob",   title: "Moving around with an epidural",          desc: "How a mobile epidural lets you stay upright and move during labour.",
      category: "Pain relief in labour", source: "NHS Lothian", file: "mobilising-with-epidural.pdf", review: "Nov 2026" },
    { id: "remi",  title: "Remifentanil PCA pain relief for labour", desc: "A drip-based pain relief you control with a button, often used if an epidural isn't suitable.",
      category: "Pain relief in labour", source: "NHS Lothian", file: "remifentanil-pca.pdf" },

    // Anaesthesia for caesarean birth
    { id: "spin",  title: "Spinal anaesthetics: risks and side effects", desc: "A picture guide to the spinal anaesthetic used for most caesarean births.",
      category: "Anaesthesia for caesarean birth", source: "OAA / RCoA", file: "spinal-risks-side-effects.pdf" },
    { id: "ga",    title: "General anaesthetic for caesarean birth", desc: "Why a general anaesthetic is sometimes needed and what happens.",
      category: "Anaesthesia for caesarean birth", source: "OAA", file: "general-anaesthetic-caesarean-oaa.pdf" },
    { id: "gal",   title: "General anaesthetic for caesarean birth", desc: "Why a general anaesthetic is sometimes needed and what happens, at NHS Lothian.",
      category: "Anaesthesia for caesarean birth", source: "NHS Lothian", file: "general-anaesthetic-caesarean-nhsl.pdf", review: "Oct 2029" },
    { id: "risk",  title: "Risks of anaesthesia explained",          desc: "How likely the risks of epidurals, spinals and general anaesthetics are, compared with everyday risks.",
      category: "Anaesthesia for caesarean birth", source: "OAA", file: "risks-of-anaesthesia-explained.pdf" },

    // Your health in pregnancy
    { id: "bmi",   title: "Body mass index (BMI) and pregnancy",     desc: "Why you may be offered an anaesthetic appointment and how we plan for a safe birth.",
      category: "Your health in pregnancy", source: "NHS Lothian", file: "bmi-and-pregnancy.pdf", review: "May 2025" },
    { id: "lmwh",  title: "Blood thinning injections in pregnancy",  desc: "How the timing of your injections affects pain relief and anaesthetic choices.",
      category: "Your health in pregnancy", source: "NHS Lothian", file: "blood-thinning-injections.pdf" },
    { id: "back",  title: "Back problems and pain relief in labour", desc: "Pain relief and anaesthetic options if you have back problems.",
      category: "Your health in pregnancy", source: "NHS Lothian", file: "back-problems.pdf", review: "Jun 2021" },

    // Blood and bleeding
    { id: "cell",  title: "Cell salvage during caesarean birth",     desc: "How your own blood can be collected, cleaned and given back to you during a caesarean.",
      category: "Blood and bleeding", source: "NHS Lothian", file: "cell-salvage.pdf", review: "Oct 2021" },
    { id: "blood", title: "Choices if you may refuse blood products", desc: "Treatments and options available if you do not wish to receive blood.",
      category: "Blood and bleeding", source: "NHS Lothian", file: "refusing-blood-products.pdf" },

    // Emotional wellbeing
    { id: "mnpi",  title: "Maternity and Neonatal Psychological Interventions service", desc: "Support for emotional difficulties linked to pregnancy, birth or a baby's neonatal stay.",
      category: "Emotional wellbeing", source: "NHS Lothian", file: "psychological-support-mnpi.pdf", review: "Apr 2025" }
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

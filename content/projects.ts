/* Project Types */

export type ProjectSketch = {
  title: string;
  slug: string;
  description: string;
  interactionHint?: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectClient = {
  name: string;
  url?: string;
  label?: string;
  logo?: string;
};

export type ProjectShowcase = {
  type: "video" | "image";
  orientation?: "landscape" | "portrait";
  title?: string;
  src?: string;
  embedUrl?: string;
  alt?: string;
  caption?: string;
};

export type ProjectFeature = {
  eyebrow?: string;
  href: string;
  description: string;
  note?: string;
  image: string;
  imageAlt?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  ctaLabel?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  meta?: string;
  stack: string[];
  coverImage?: string;
  type: string; // Client Project, Independent Project, Commissioned Work, Experimental
  layout?: "triptych";

  client?: ProjectClient;
  showcase?: ProjectShowcase;
  featuredLink?: ProjectFeature;

  overview: string;
  triptych?: ProjectSketch[];
  buildNotes?: string[];
  reflection?: string;
  links?: ProjectLink[];
};

/* Project Data */

export const projects: Project[] = [

  /* Visualising Truth Project */
  {
    slug: "visualising-truth",
    title: "Visualising Truth: Interactive Spatial Reconstruction",
    tagline:
      "A Unity-based spatial reconstruction system organising fragmented visual evidence into an ethical, inspectable interface.",
    year: "2026",
    meta: "Unity • Spatial UX • Information Design",
    stack: ["Unity", "C#", "Maya", "Spatial UX", "Media Systems"],
    type: "Research Project",

    showcase: {
      type: "video",
      title: "Project Demo",
      embedUrl: "https://www.youtube.com/embed/EolRXYWnLg4",
      caption:
        "A walkthrough of the Visualising Truth interface, showing the spatial reconstruction, camera transitions, route progression, and layered evidence system.",
    },

    overview:
      "Visualising Truth is an interactive spatial reconstruction project exploring how fragmented visual evidence can be organised into a clearer and more ethically responsible digital experience. Built in Unity, the project examines a contested real-world event through six linked moments, a shared bird’s-eye overview, a visual route connecting the sequence, individual scene views, and layered text, image, and video evidence. Rather than presenting a definitive reconstruction, the project uses spatial interaction to help users examine relationships between source material, sequence, movement and context.",

    buildNotes: [
      "The experience is organised into six moments across different times and locations, guiding users from background context through the reconstructed sequence and into a reflective closing section.",
      "I developed a shared bird’s-eye overview and visual route that connect each scene to the wider sequence of events.",
      "Camera transitions move between the wider overview and individual scenes, helping users understand how each moment relates to the broader sequence.",
      "A layered evidence interface combines right-side moment panels, tabbed evidence cards, in-scene markers, and a reusable media overlay for text, image, and video sources.",
      "The project uses abstraction, restrained interface design, content warnings, and optional media access to support ethical engagement with sensitive material without forcing graphic content on the user.",
      "I resolved video playback and display issues in the built application, ensuring portrait and landscape media appeared reliably across the interface.",
    ],

    reflection:
      "This project helped me connect front-end thinking with real-time interaction design, research-led UX, and media ethics. It pushed me to think carefully about structure, clarity, and responsibility: not just how an interface looks, but how it guides attention, communicates uncertainty, supports understanding, and handles sensitive source material with care.",

    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/yasmeenbelhaj/Visualising_Truth",
      },
    ],
  },

  /* William Champion's Grotto Project*/
  {
    slug: "william-champions-grotto",
    title: "William Champion’s Grotto: Interactive 360° Heritage Experience",
    tagline:
      "An interactive 360° heritage experience extending public access to a historic site with limited public opening.",
    year: "2026",
    meta:
      "UX Design • Information Design • Stakeholder Collaboration",
    stack: ["Panoee", "360° Imaging", "Adobe Premiere Pro", "WordPress"],
    type: "Client Project",

    client: {
      name: "South Gloucestershire Council",
      url: "https://www.southglos.gov.uk",
      label: "Client",
      logo: "/images/south_glos_logo.png",
    },

    showcase: {
      type: "video",
      title: "Showcase Video",
      embedUrl: "https://player.vimeo.com/video/1179406322",
      caption:
        "A showcase video introducing the project, demonstrating the 360° walkthrough on a laptop, and showing VR headset screen capture from the tour experience.",
    },

    featuredLink: {
      eyebrow: "Main Deliverable",
      href: "https://tour.panoee.net/699493ada0d83f6b1c80c85e/699497cca0d83f7e3c80c8ed",
      description:
        "A fully interactive 360° walkthrough designed to make the grotto accessible beyond its limited public openings.",
      note: "Opens in a new tab",
      image: "/images/grotto.jpg",
      imageAlt: "William Champion’s Grotto",
      overlayTitle: "William Champion’s Grotto",
      overlaySubtitle: "360° Walkthrough Experience",
      ctaLabel: "Begin the walkthrough",
    },

    overview:
      "William Champion’s Grotto is a Grade II listed heritage site in Warmley with limited public opening. Developed by a multidisciplinary team in collaboration with South Gloucestershire Council, the project created an interactive 360° experience that allows people to explore the site remotely while supporting its digital documentation. The final outcome combines a publicly accessible walkthrough, process documentation and a showcase video communicating the functionality and atmosphere of the experience.",

    buildNotes: [
      "I contributed to pre-production planning by mapping navigation points, defining interactive touchpoints and preparing a structured shot list for capturing the grotto.",
      "On-site production required adapting to low light and limited access to power. The team used battery-powered LED panels to illuminate the space while maintaining consistent image quality.",
      "We assembled the captured 360° imagery into an interactive Panoee tour, connecting viewpoints into a clear exploratory journey through the site.",
      "I took responsibility for the showcase video, including storyboarding, directing, filming and editing in Adobe Premiere Pro to communicate the walkthrough’s functionality and atmosphere.",
      "I designed the supporting WordPress layout and organised the historical content, production stages and final deliverables into a clear process narrative.",
      "Through user testing and stakeholder feedback, we refined the experience’s navigation, usability and clarity.",
    ],

    reflection:
      "This project strengthened my ability to work within a multidisciplinary team and deliver a digital experience in a real client context. Collaborating with South Gloucestershire Council reinforced the importance of clear communication, iterative feedback and balancing stakeholder requirements with user needs. Adapting to on-site production constraints also developed my confidence in making practical decisions while maintaining the quality and accessibility of the final experience.",

    links: [
      {
        label: "Process Blog",
        href: "https://desgrotto.wordpress.com",
      },
      {
        label: "360° Walkthrough",
        href: "https://tour.panoee.net/699493ada0d83f6b1c80c85e/699497cca0d83f7e3c80c8ed",
      },
    ],
  },

  /* Palestine: Lit by Loss Project */
  {
    slug: "palestine-lit-by-loss",
    title: "Palestine: Lit by Loss",
    tagline:
      "A data-driven mobile AR experience translating real-world datasets into a spatial act of remembrance.",
    year: "2025",
    meta: "AR • Data Visualisation • Interactive Systems",
    stack: ["Unity", "C#", "AR Foundation", "Data Visualisation"],
    type: "Independent Project",

    showcase: {
      type: "video",
      orientation: "portrait",
      title: "Project Demo",
      embedUrl: "https://player.vimeo.com/video/1142112585",
      caption:
        "A project demo showing the AR map, region selection, generated candlelight vigil, and name-based data interaction.",
    },

    overview:
      "Palestine: Lit by Loss is a mobile augmented-reality project exploring how real-world data can be translated into a spatial act of remembrance. Built with Unity and AR Foundation, the experience uses datasets from Tech for Palestine to generate an AR candlelight vigil. Users select regions on a 3D map to view child death toll information, with candles generated in response to the data for each region. A separate Know Their Names feature displays the names of deceased children from Gaza, shifting the experience from numerical information towards individual remembrance.",

    buildNotes: [
      "I created the 3D map using QGIS, Adobe Illustrator and Autodesk Maya, then imported it into Unity as the central interface for exploring regional data.",
      "Datasets from Tech for Palestine connect each region’s child death toll with generated candle displays and name-based information.",
      "To maintain performance, I used object pooling and staggered spawning so large numbers of candles could appear gradually without overwhelming the application.",
      "Clear interaction states support region selection, guidance prompts and information panels, while subtle map movement contributes to the experience’s quiet visual atmosphere.",
      "I kept the interface and visual direction intentionally restrained, using AR to support reflection and remembrance rather than spectacle.",
    ],

    reflection:
      "This project changed how I thought about AR, showing how spatial media can shape the way people encounter information when data represents real lives rather than abstract numbers. It also established foundations for later Unity work involving interaction systems, performance constraints, sensitive subject matter and data-driven spatial experiences.",

    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/yasmeenbelhaj/Palestine_Lit_By_Loss",
      },
      {
        label: "Dataset Source",
        href: "https://data.techforpalestine.org/docs/datasets/",
      },
    ],
  },
  
  /* Generative Drawing Triptych Project */
  {
    slug: "generative-drawing-triptych",
    title: "Generative Drawing Triptych",
    tagline:
      "A three-part p5.js landscape series exploring procedural drawing, reusable visual systems and simple interaction.",
    year: "2021",
    meta: "Creative Coding • Generative Drawing • Interaction",
    stack: ["JavaScript", "p5.js", "HTML", "CSS"],
    type: "Independent Project",
    layout: "triptych",

    overview:
      "Generative Drawing Triptych is an early creative coding project exploring how p5.js can be used to build procedural visual systems and simple interactions. The series includes three landscape scenes: Snowy Mountains, City Skyline and Forest Cabin. Each piece uses reusable drawing functions, 2D geometry, layered colour and repeated forms to create a distinct atmosphere while maintaining a consistent visual language across the set.",

    triptych: [
      {
        title: "Snowy Mountains",
        slug: "snowy-mountains",
        description:
          "A geometric mountain scene built from layered shapes, repeated stars, and a soft gradient sky.",
      },
      {
        title: "City Skyline",
        slug: "city-skyline",
        description:
          "A night skyline drawing using repeated building forms, colour contrast, and a simple architectural rhythm.",
      },
      {
        title: "Forest Cabin",
        slug: "forest-cabin",
        description:
          "A forest scene with small interactive details that bring more movement and atmosphere to the final piece.",
        interactionHint: [
          "Press 1 — Launch a shooting star",
          "Press 2 — Trigger a meteor shower",
          "Press 0 — Clear the sky",
          "Click & hold the cabin window — Turn on the light",
        ],
      },
    ],

    buildNotes: [
      "Each scene was built from simple 2D shapes, using reusable drawing functions to repeat, reposition and adapt elements across the compositions.",
      "I created gradual sky transitions using repeated rectangles and colour arrays, adapting the system to produce different times of day and atmospheres.",
      "I explored loops, arrays and class-based structures to generate repeated elements such as stars and understand how different approaches affected the code and visual outcome.",
      "Forest Cabin introduced simple interaction states, including keyboard-triggered sky effects and a clickable window light.",
      "The series was influenced by Saskia Freeke’s use of bold colour and geometric form, which helped shape a consistent visual language across the three scenes.",
    ],

    reflection:
      "This project was an early step in learning how code could be used as a visual material. It helped me understand the value of reusable functions, procedural repetition and interaction states while also showing how technical constraints can become part of a project’s visual style.",
  },
];

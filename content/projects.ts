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

export const projects: Project[] = [
  {
    slug: "generative-drawing-triptych",
    title: "Generative Drawing Triptych",
    tagline:
      "A three-part p5.js landscape series using geometric forms, layered colour, and early creative coding experiments.",
    year: "2021",
    meta: "Creative Coding • Generative Drawing",
    stack: ["JavaScript", "p5.js", "HTML", "CSS"],
    type: "Independent Project",
    layout: "triptych",

    overview:
      "This project presents a generative drawing series created for an introductory creative coding module. The brief asked for three distinct p5.js drawings, with at least two static outcomes and the option for interaction. I approached this as a triptych of landscape scenes: Snowy Mountains, City Skyline, and Forest Cabin. Each piece explores geometric forms, bold colour, and simple generative systems, while maintaining a consistent visual language across the series.",

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
          "Click and hold the cabin window — Turn on the light",
        ],
      },
    ],

    buildNotes: [
      "Each scene was built from simple 2D shapes, with reusable functions making it easier to repeat and reposition elements across the composition.",
      "To create the skies, I used repeated rectangles and colour arrays to build gradual transitions, then adapted that approach for different times of day.",
      "I also tested more than one way of generating stars, including a basic loop and a class-based array setup, to understand how each method affected the final result.",
      "The visual direction was influenced by Saskia Freeke’s use of bold colour and geometric form, which helped guide the style of the series as a whole.",
    ],
  },

  {
    slug: "william-champions-grotto",
    title: "William Champion’s Grotto: 360° Walkthrough",
    tagline:
      "Opening up a rarely accessible historic site through an interactive 360° walkthrough.",
    year: "2026",
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
        "A showcase film presenting the interactive tour and demonstrating how users explore the grotto digitally.",
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
      "This project focused on digitally documenting William Champion’s Grotto, a Grade II listed heritage site in Warmley that is rarely open to the public. Working in collaboration with South Gloucestershire Council, the aim was to create an interactive digital experience that allows users to explore the space remotely, while also preserving it as a long-term record as the structure continues to deteriorate. The final outcome combines a 360° tour with a supporting showcase video to communicate both the functionality and the atmosphere of the space.",

    buildNotes: [
      "The project required detailed pre-production planning, including mapping navigation points, defining touchpoints, and preparing a structured shot list for capturing the grotto environment.",
      "On-site production presented technical challenges due to low light and lack of power. Battery-powered LED panels were used to illuminate the space while maintaining consistent image quality.",
      "360° imagery was captured and assembled into an interactive tour using Panoee, allowing users to navigate the grotto through a series of connected viewpoints.",
      "A showcase video was developed to communicate the experience of the tour. This included storyboard planning, directing, filming, and editing in Adobe Premiere Pro.",
      "User testing was conducted to refine navigation, usability, and clarity of interaction within the final experience.",
    ],

    reflection:
      "This project strengthened my ability to lead creative direction within a real client context, while also managing production constraints and team workflow. Working on-site in challenging conditions required adaptability and clear decision-making, particularly when balancing efficiency with quality. It also pushed me to develop confidence in directing and video production, an area I had previously been less comfortable with. Overall, the project reinforced the importance of communication, planning, and flexibility when delivering a professional outcome for a client.",

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
];
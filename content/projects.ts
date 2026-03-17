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

export type ProjectType = "standard" | "triptych";

export type ProjectTriptychSectionContent = {
  eyebrow?: string;
  intro?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  meta: string;
  roles: string[];
  stack: string[];
  coverImage?: string;
  type?: ProjectType;

  intro: string;
  overview: string;
  triptych?: ProjectSketch[];
  triptychSection?: ProjectTriptychSectionContent;
  buildNotes?: string[];
  reflection?: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "generative-drawing-triptych",
    title: "Generative Drawing Triptych",
    tagline:
      "A three-part p5.js landscape series exploring geometry, gradients, and early creative coding techniques.",
    year: "2021",
    meta: "Creative Coding • p5.js • Generative Drawing",
    roles: ["Creative Developer", "Designer"],
    stack: ["JavaScript", "p5.js", "HTML", "CSS"],
    type: "triptych",

    intro:
      "A portfolio presentation of a generative drawing project originally created for an introductory creative coding module. The brief called for three distinct p5.js drawings, with at least two static pieces and the option for a third to be animated or interactive.",

    overview:
      "My response was a cohesive triptych made up of three landscape scenes: Snowy Mountains, City Skyline, and Forest Cabin. Across the series, I focused on a shared geometric visual language, strong colour relationships, and repeated coded elements built through functions, arrays, and simple systems.",

    triptychSection: {
      eyebrow: "Triptych",
      intro:
        "The three sketches are presented together as a cohesive series, with each piece given its own editorial layout while preserving the overall rhythm of the project.",
    },

    triptych: [
      {
        title: "Snowy Mountains",
        slug: "snowy-mountains",
        description:
          "A geometric mountain landscape built through layered forms, repeated stars, and a gradient-based sky treatment.",
      },
      {
        title: "City Skyline",
        slug: "city-skyline",
        description:
          "A night skyline composition using repeated shapes, colour contrast, and a simple but cohesive architectural rhythm.",
      },
      {
        title: "Forest Cabin",
        slug: "forest-cabin",
        description:
          "A forest landscape with interactive details that add warmth and a subtle sense of narrative to the scene.",
        interactionHint: [
          "Press 1 — Launch a shooting star",
          "Press 2 — Trigger a meteor shower",
          "Press 0 — Clear the sky",
          "Click and hold the cabin window — Turn on the light",
        ],
      },
    ],

    buildNotes: [
      "The scenes were constructed through combinations of 2D geometric shapes, with reusable functions allowing elements to be drawn multiple times and repositioned through x/y coordinates.",
      "Gradient effects were created by drawing repeated rectangles and using arrays to control colour transitions, then adapting that method to produce dawn and dusk sky treatments.",
      "I also experimented with more than one method for generating stars, including a for loop and a class-based array approach, both of which produced similar visual outcomes.",
      "The overall visual direction was influenced by Saskia Freeke’s use of bold colour and geometry, which helped shape the consistent style across all three pieces.",
    ],

    reflection: [
      "One area I would refine further is the crescent moon in Snowy Mountains, which was built from overlapping arcs but ended up feeling heavier than intended.",
      "I also encountered issues while creating the shooting star vapour trail in Forest Cabin, where adjustments to the background introduced a brief white flash during setup.",
      "If I revisit the project, I would extend the Forest Cabin interaction by adding chimney smoke when the window light is switched on.",
    ],

    links: [
      {
        label: "Original project page",
        href: "https://yasmeenbelhaj.panel.uwe.ac.uk/wordpress/generative-drawing-triptych/",
      },
      {
        label: "Snowy Mountains",
        href: "http://yasmeenbelhaj.panel.uwe.ac.uk/intro_to_creative_coding/assignment/mountains/",
      },
      {
        label: "City Skyline",
        href: "http://yasmeenbelhaj.panel.uwe.ac.uk/intro_to_creative_coding/assignment/city/",
      },
      {
        label: "Forest Cabin",
        href: "http://yasmeenbelhaj.panel.uwe.ac.uk/intro_to_creative_coding/assignment/forest/",
      },
    ],
  },
];
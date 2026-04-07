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

  overview: string;
  triptych?: ProjectSketch[];
  triptychSection?: ProjectTriptychSectionContent;
  buildNotes?: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "generative-drawing-triptych",
    title: "Generative Drawing Triptych",
    tagline:
      "A three-part p5.js landscape series using geometric forms, layered colour, and early creative coding experiments.",
    year: "2021",
    meta: "Creative Coding • p5.js • Generative Drawing",
    roles: ["Creative Developer", "Designer"],
    stack: ["JavaScript", "p5.js", "HTML", "CSS"],
    type: "triptych",

    overview:
      "This project presents a generative drawing series created for an introductory creative coding module. The brief asked for three distinct p5.js drawings, with at least two static outcomes and the option for interaction. I approached this as a triptych of landscape scenes: Snowy Mountains, City Skyline, and Forest Cabin. Each piece explores geometric forms, bold colour, and simple generative systems, while maintaining a consistent visual language across the series.",

    triptychSection: {
      eyebrow: "Triptych",
      intro:
        "The three sketches are presented as a single series, with each drawing given space to stand on its own while still feeling part of the same visual language.",
    },

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
];
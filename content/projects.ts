export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  roles: string[];
  stack: string[];
  coverImage?: string;

  overview: string;
  sections: ProjectSection[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "ar-business-card",
    title: "AR Business Card",
    tagline: "Web-based AR experience with click-to-load 3D models.",
    year: "2026",
    roles: ["Creative Technologist", "Frontend"],
    stack: ["Next.js", "React", "Tailwind", "Framer Motion"],
    coverImage: "/images/placeholder.jpg",

    overview:
      "A lightweight web AR portfolio card. Users tap to load 3D content on demand to keep performance and bandwidth costs low.",

    sections: [
      {
        heading: "Problem",
        body: "Create a memorable portfolio artefact that loads fast, works on mobile, and stays within hosting bandwidth limits.",
      },
      {
        heading: "Approach",
        body: "Designed a click-to-load flow and structured the experience around three lightweight models, only loading assets when requested.",
      },
      {
        heading: "Outcome",
        body: "Delivered a responsive AR entry page and a scalable Next.js portfolio structure for adding new work quickly.",
      },
    ],

    links: [
      { label: "Live site", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/example" },
    ],
  },
  {
    slug: "data-visualisation",
    title: "Data Visualisation Project",
    tagline: "Turning complex information into clear interactive visuals.",
    year: "2025",
    roles: ["Design + Dev"],
    stack: ["TypeScript", "Web"],
    coverImage: "/images/placeholder.jpg",

    overview:
      "An interactive piece focused on making complex information easier to understand through narrative and visual hierarchy.",

    sections: [
      { heading: "Problem", body: "Communicate dense information clearly without overwhelming users." },
      { heading: "Approach", body: "Iterated on chart forms, annotation, and interaction patterns to support comprehension." },
      { heading: "Outcome", body: "A clear, accessible interactive with performance-conscious rendering." },
    ],
  },
];
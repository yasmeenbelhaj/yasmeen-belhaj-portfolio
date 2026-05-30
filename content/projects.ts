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
      "A Unity-based spatial reconstruction exploring how fragmented visual evidence can be organised into an ethical, inspectable interface.",
    year: "2026",
    meta: "Unity • Spatial UX • Evidence Interface",
    stack: ["Unity", "C#", "Maya", "Spatial UX", "Media Systems"],
    type: "Research Project",

    showcase: {
      type: "video",
      title: "Project Demo",
      embedUrl: "https://player.vimeo.com/video/1196156444",
      caption:
        "A walkthrough of the Visualising Truth interface, showing the spatial reconstruction, camera transitions, route progression, and layered evidence system.",
    },

    overview:
      "Visualising Truth is an interactive spatial reconstruction project exploring how fragmented visual evidence can be organised into a clearer and more ethically responsible digital experience. Built in Unity, the project examines a contested real-world event through six linked moments, a shared bird’s-eye analytical state, persistent route progression, local scene views, and layered text, image, and video evidence. Rather than claiming to produce a definitive reconstruction, the project frames spatial interaction as a way to make relationships between source material, sequence, movement, and context more inspectable.",

    buildNotes: [
      "The experience is structured around six spatial-temporal moments, guiding users from contextual framing into a reconstruction sequence and then into a separate reflective closing state.",
      "I developed a shared bird’s-eye transition state and persistent route system so each local scene remains connected to the wider event sequence rather than becoming an isolated fragment.",
      "Camera-led transitions move between analytical overview and local scene detail, using movement to communicate continuity, escalation, transfer, and aftermath rather than treating animation as decoration.",
      "A layered evidence interface combines right-side moment panels, tabbed evidence cards, in-scene markers, and a reusable media overlay for text, image, and video sources.",
      "The project uses abstraction, restrained interface design, content warnings, and optional media access to support ethical engagement with sensitive material without forcing graphic content on the user.",
      "I resolved built-application video playback issues by moving media into StreamingAssets, assigning video textures directly to RawImage components, and refining aspect-ratio handling for portrait and landscape media.",
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
      "This project focused on digitally documenting William Champion’s Grotto, a Grade II listed heritage site in Warmley that is rarely open to the public. Working as part of a team in collaboration with South Gloucestershire Council, I helped create an interactive 360° experience that allows people to explore the space remotely while preserving a digital record of the site. The final outcome combines a navigable 360° walkthrough, process documentation, and a showcase video communicating both the functionality and atmosphere of the experience.",

    buildNotes: [
      "The project required detailed pre-production planning, including mapping navigation points, defining touchpoints, and preparing a structured shot list for capturing the grotto environment.",
      "On-site production presented technical challenges due to low light and lack of power. Battery-powered LED panels were used to illuminate the space while maintaining consistent image quality.",
      "360° imagery was captured and assembled into an interactive tour using Panoee, allowing users to navigate the grotto through a series of connected viewpoints.",
      "A showcase video was developed to communicate the experience of the tour. This included storyboard planning, directing, filming, and editing in Adobe Premiere Pro.",
      "I also designed the supporting WordPress layout for the process blog, structuring the project documentation so the research, production stages, and final walkthrough could be presented clearly.",
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

  /* Palestine: Lit by Loss Project */
  {
    slug: "palestine-lit-by-loss",
    title: "Palestine: Lit by Loss",
    tagline:
      "A mobile AR candlelight vigil using real-world datasets to make names, numbers, and loss visible in physical space.",
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
      "Palestine: Lit by Loss is a mobile augmented-reality project exploring how real-world datasets can be translated into a quiet, spatial act of remembrance. Built with Unity and AR Foundation, the experience uses data from Tech for Palestine to generate an AR candlelight vigil. Users can select regions on a 3D map, view child death toll information, and see candles generated from the number of child deaths in each region. The Gaza region also includes a separate Know Their Names feature, which displays names of deceased children from a different dataset.",

    buildNotes: [
      "I created the 3D Palestine map model using QGIS, Adobe Illustrator, and Autodesk Maya, then brought it into Unity as the central spatial interface for the AR experience.",
      "The project uses Tech for Palestine datasets to connect regional death toll information with generated AR content, including candles instantiated from each selected region’s child death count.",
      "I developed performance-aware object generation using object pooling and staggered spawning so the AR scene could present many candle objects without overwhelming the application.",
      "Interaction design focused on keeping the experience clear and respectful, with region selection, UI prompts, name/detail panels, and responsive map behaviour that rotates toward the camera.",
      "The selected regions scale and gently move to give users feedback without disrupting the quiet tone of the experience.",
      "The visual approach was intentionally minimal, using immersive technology to support witnessing, reflection, and memory rather than spectacle.",
    ],

    reflection:
      "This project helped me think about AR as more than a novelty layer. It showed me how spatial media can change the way people encounter information, especially when data represents real lives rather than abstract numbers. It also built useful foundations for later Unity projects involving interaction systems, sensitive subject matter, performance constraints, and data-led visual experiences.",

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
      "A three-part p5.js landscape series exploring geometric form, layered colour, procedural repetition, and simple interaction.",
    year: "2021",
    meta: "Creative Coding • Generative Drawing",
    stack: ["JavaScript", "p5.js", "HTML", "CSS"],
    type: "Independent Project",
    layout: "triptych",

    overview:
      "This project presents an early creative coding series built in p5.js. I approached the brief as a triptych of landscape scenes: Snowy Mountains, City Skyline, and Forest Cabin. Each piece uses simple 2D geometry, layered colour, repeated forms, and small generative systems to create a distinct scene while maintaining a consistent visual language across the set.",

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
      "Each scene was built from simple 2D shapes, with reusable drawing functions helping me repeat, reposition, and adapt elements across each composition.",
      "To create the skies, I used repeated rectangles and colour arrays to build gradual transitions, then adjusted that system for different times of day and atmosphere.",
      "I explored different ways of generating repeated elements, including loop-based stars and a class-based array setup, to understand how structure affected the final visual result.",
      "The Forest Cabin scene introduced small interaction states, including keyboard-triggered sky effects and a clickable cabin window light.",
      "The visual direction was influenced by Saskia Freeke’s use of bold colour and geometric form, which helped guide the style of the series as a whole.",
    ],

    reflection:
      "This project was an early step in learning how code could be used as a visual material. It helped me understand the value of reusable functions, procedural repetition, and interaction states, while also showing how technical constraints can become part of a project’s visual style.",
  },
];

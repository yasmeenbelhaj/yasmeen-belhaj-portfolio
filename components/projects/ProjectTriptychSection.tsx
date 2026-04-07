import SnowyMountainsEmbed from "./generative-drawing-triptych/SnowyMountainsEmbed";
import CitySkylineEmbed from "./generative-drawing-triptych/CitySkylineEmbed";
import ForestCabinEmbed from "./generative-drawing-triptych/ForestCabinEmbed";
import TriptychSketchRow from "./generative-drawing-triptych/TriptychSketchRow";

import type { Project } from "../../content/projects";

type ProjectTriptychSectionProps = {
  project: Project;
};

export default function ProjectTriptychSection({
  project,
}: ProjectTriptychSectionProps) {
  if (!project.triptych?.length) return null;

  const sketchMap: Record<string, React.ReactNode> = {
    "snowy-mountains": <SnowyMountainsEmbed />,
    "city-skyline": <CitySkylineEmbed />,
    "forest-cabin": <ForestCabinEmbed />,
  };

  const eyebrow = project.triptychSection?.eyebrow ?? "Series";
  const intro = project.triptychSection?.intro;

  return (
    <section className="mt-24 md:mt-28">
      <div className="rounded-[2rem] border border-brand-sand/15 bg-brand-cream/[0.03] px-5 py-5 sm:px-6 sm:py-6 md:px-10 md:py-10">
        <div className="space-y-16 md:space-y-20">
          {project.triptych.map((sketch, index) => (
            <TriptychSketchRow
              key={sketch.slug}
              index={index}
              title={sketch.title}
              description={sketch.description}
              interactionHint={sketch.interactionHint}
            >
              {sketchMap[sketch.slug]}
            </TriptychSketchRow>
          ))}
        </div>
      </div>
    </section>
  );
}
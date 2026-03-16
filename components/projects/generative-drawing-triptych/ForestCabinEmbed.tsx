"use client";

import { useEffect, useRef } from "react";
import forestCabinSketch from "../../../lib/p5/forestCabinSketch";

const SKETCH_WIDTH = 700;
const SKETCH_HEIGHT = 1024;
const ASPECT_RATIO = SKETCH_HEIGHT / SKETCH_WIDTH;
const MAX_VIEWPORT_HEIGHT = 0.78;

export default function ForestCabinEmbed() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sketchRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;
    let observer: ResizeObserver | null = null;

    async function initSketch() {
      if (!mountRef.current || !outerRef.current) return;

      const p5Module = await import("p5");
      const P5 = p5Module.default;

      if (!isMounted || !mountRef.current || !outerRef.current) return;

      sketchRef.current = new P5(forestCabinSketch, mountRef.current);

      const updateCanvasSize = () => {
        if (!outerRef.current || !sketchRef.current?.canvas) return;

        const maxWidthFromContainer = outerRef.current.clientWidth;
        const maxHeightFromViewport = window.innerHeight * MAX_VIEWPORT_HEIGHT;
        const maxWidthFromHeight = maxHeightFromViewport / ASPECT_RATIO;

        const availableWidth = Math.min(
          maxWidthFromContainer,
          maxWidthFromHeight,
          SKETCH_WIDTH
        );

        const nextHeight = availableWidth * ASPECT_RATIO;

        const canvas = sketchRef.current.canvas as HTMLCanvasElement;

        canvas.style.width = `${availableWidth}px`;
        canvas.style.height = `${nextHeight}px`;
        canvas.style.display = "block";
      };

      updateCanvasSize();

      observer = new ResizeObserver(() => {
        updateCanvasSize();
      });

      observer.observe(outerRef.current);
      window.addEventListener("resize", updateCanvasSize);
    }

    initSketch();

    return () => {
      isMounted = false;
      observer?.disconnect();
      window.removeEventListener("resize", () => {});
      sketchRef.current?.remove?.();
      sketchRef.current = null;
    };
  }, []);

  return (
    <div ref={outerRef} className="w-full min-w-0">
      <div
        className="mx-auto"
        style={{
          maxWidth: `${SKETCH_WIDTH}px`,
        }}
      >
        <div ref={mountRef} />
      </div>
    </div>
  );
}
"use client";

import { useEffect, useRef } from "react";
import forestCabinSketch from "../../../lib/p5/forestCabinSketch";

const SKETCH_WIDTH = 700;
const SKETCH_HEIGHT = 1024;
const ASPECT_RATIO = SKETCH_HEIGHT / SKETCH_WIDTH;

function getMaxViewportHeight() {
  if (typeof window === "undefined") return 0.72;

  const isTabletPortrait = window.matchMedia(
    "(min-width: 768px) and (max-width: 1023px) and (orientation: portrait)"
  ).matches;

  if (isTabletPortrait) return 0.6;

  if (window.innerWidth < 768) return 0.72;

  return 0.78;
}

export default function ForestCabinEmbed() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sketchRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;
    let observer: ResizeObserver | null = null;

    const updateCanvasSize = () => {
      if (!outerRef.current || !sketchRef.current?.canvas) return;

      const maxWidthFromContainer = outerRef.current.clientWidth;
      const maxHeightFromViewport = window.innerHeight * getMaxViewportHeight();
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

    async function initSketch() {
      if (!mountRef.current || !outerRef.current) return;

      const p5Module = await import("p5");
      const P5 = p5Module.default;

      if (!isMounted || !mountRef.current || !outerRef.current) return;

      sketchRef.current = new P5(forestCabinSketch, mountRef.current);

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
      window.removeEventListener("resize", updateCanvasSize);
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
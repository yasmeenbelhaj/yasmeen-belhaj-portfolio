"use client";

import { useEffect, useRef, useState } from "react";
import citySkylineSketch from "../../../lib/p5/citySkylineSketch";

const SKETCH_WIDTH = 700;
const SKETCH_HEIGHT = 1024;
const MAX_VIEWPORT_HEIGHT = 0.78;

export default function CitySkylineEmbed() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sketchRef = useRef<any>(null);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!outerRef.current) return;

    const updateScale = () => {
      if (!outerRef.current) return;

      const availableWidth = outerRef.current.clientWidth;
      const availableHeight = window.innerHeight * MAX_VIEWPORT_HEIGHT;

      const widthScale = availableWidth / SKETCH_WIDTH;
      const heightScale = availableHeight / SKETCH_HEIGHT;

      const nextScale = Math.min(widthScale, heightScale, 1);
      setScale(nextScale);
    };

    updateScale();

    const observer = new ResizeObserver(() => {
      updateScale();
    });

    observer.observe(outerRef.current);
    window.addEventListener("resize", updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function initSketch() {
      if (!mountRef.current) return;

      const p5Module = await import("p5");
      const P5 = p5Module.default;

      if (!isMounted || !mountRef.current) return;

      sketchRef.current = new P5(citySkylineSketch, mountRef.current);
    }

    initSketch();

    return () => {
      isMounted = false;
      sketchRef.current?.remove?.();
      sketchRef.current = null;
    };
  }, []);

  const scaledWidth = SKETCH_WIDTH * scale;
  const scaledHeight = SKETCH_HEIGHT * scale;

  return (
    <div ref={outerRef} className="w-full min-w-0">
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
        }}
      >
        <div
          style={{
            width: `${SKETCH_WIDTH}px`,
            height: `${SKETCH_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div ref={mountRef} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
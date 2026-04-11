// Daniel Shiffman / The Coding Train p5.js example
// Temporary sketch used to validate P5Background functionality
// To be replaced with a custom p5.js drawing once the site structure is complete

"use client";

import { useEffect, useRef } from "react";

export default function P5Background() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let instance: any;

    /* Load p5 Instance */
    const loadP5 = async () => {
      const p5 = (await import("p5")).default;

      if (!containerRef.current) return;

      /* Sketch Setup */
      const sketch = (s: any) => {
        const getW = () =>
          containerRef.current?.clientWidth ?? window.innerWidth;
        const getH = () =>
          containerRef.current?.clientHeight ?? window.innerHeight;

        /* Canvas Setup */
        s.setup = () => {
          const canvas = s.createCanvas(getW(), getH());
          canvas.parent(containerRef.current!);
          s.pixelDensity(Math.min(2, window.devicePixelRatio || 1));
          s.background(244, 235, 221);
        };

        /* Interactive Cursor Drawing */
        s.draw = () => {
          if (s.mouseIsPressed === true) {
            s.fill(0);
            s.stroke(255);
          } else {
            s.fill(255);
            s.stroke(0);
          }

          s.circle(s.mouseX, s.mouseY, 100);
        };

        /* Responsive Canvas Resize */
        s.windowResized = () => {
          s.resizeCanvas(getW(), getH());
        };
      };

      instance = new p5(sketch);
    };

    loadP5();

    /* Cleanup p5 Instance */
    return () => {
      if (instance) instance.remove();
    };
  }, []);

  /* P5 Canvas Container */
  return <div ref={containerRef} className="h-full w-full" />;
}
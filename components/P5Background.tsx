"use client";

import { useEffect, useRef } from "react";

export default function P5Background() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let instance: any;

    const loadP5 = async () => {
      const p5 = (await import("p5")).default;

      if (!containerRef.current) return;

      const sketch = (s: any) => {
        const getW = () =>
          containerRef.current?.clientWidth ?? window.innerWidth;
        const getH = () =>
          containerRef.current?.clientHeight ?? window.innerHeight;

        s.setup = () => {
          const canvas = s.createCanvas(getW(), getH());
          canvas.parent(containerRef.current!);
          s.pixelDensity(Math.min(2, window.devicePixelRatio || 1));
          s.background(244, 235, 221);
        };

        s.draw = () => {
            if (s.mouseIsPressed === true) {
                s.fill(0);
            } else {
                s.fill(255);
            }

            s.circle(s.mouseX, s.mouseY, 100);
        };

        s.windowResized = () => {
          s.resizeCanvas(getW(), getH());
        };
      };

      instance = new p5(sketch);
    };

    loadP5();

    return () => {
      if (instance) instance.remove();
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
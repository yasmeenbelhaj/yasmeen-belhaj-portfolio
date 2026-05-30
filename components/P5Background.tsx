// Daniel Shiffman / The Coding Train p5.js example
// Temporary sketch used to validate P5Background functionality
// To be replaced with a custom p5.js drawing once the site structure is complete

"use client";

import { useEffect, useRef } from "react";

export default function P5Background() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let instance: any;
    let cleanupCanvasEvents: (() => void) | undefined;

    /* Load p5 Instance */
    const loadP5 = async () => {
      const p5 = (await import("p5")).default;

      if (!containerRef.current) return;

      /* Sketch Setup */
      const sketch = (s: any) => {
        const isTouchDevice =
          window.matchMedia("(pointer: coarse)").matches ||
          navigator.maxTouchPoints > 0;
        const getW = () =>
          containerRef.current?.clientWidth ?? window.innerWidth;
        const getH = () =>
          containerRef.current?.clientHeight ?? window.innerHeight;
        const touchState = {
          active: false,
          drawing: false,
          hasTouchInput: false,
          mode: "idle" as "idle" | "pending" | "drawing" | "scrolling",
          scrolling: false,
          startX: 0,
          startY: 0,
          previousY: 0,
          x: 0,
          y: 0,
        };

        /* Canvas Setup */
        s.setup = () => {
          const canvas = s.createCanvas(getW(), getH());
          canvas.parent(containerRef.current!);
          const touchTarget = containerRef.current!;
          canvas.elt.style.display = "block";
          canvas.elt.style.height = "100%";
          canvas.elt.style.touchAction = "none";
          canvas.elt.style.width = "100%";
          canvas.elt.style.userSelect = "none";
          touchTarget.style.touchAction = "none";
          touchTarget.style.userSelect = "none";
          s.pixelDensity(Math.min(2, window.devicePixelRatio || 1));
          s.background(244, 235, 221);

          const updateTouchPosition = (touch: Touch) => {
            const rect = touchTarget.getBoundingClientRect();

            touchState.x = touch.clientX - rect.left;
            touchState.y = touch.clientY - rect.top;
          };

          const isTouchInHero = (touch: Touch) => {
            const rect = touchTarget.getBoundingClientRect();

            return (
              touch.clientX >= rect.left &&
              touch.clientX <= rect.right &&
              touch.clientY >= rect.top &&
              touch.clientY <= rect.bottom &&
              window.scrollY < window.innerHeight * 1.8
            );
          };

          const handleTouchStart = (event: TouchEvent) => {
            const touch = event.touches[0];
            if (!touch) return;
            if (
              event.target instanceof Element &&
              event.target.closest("button, a, input, textarea, select")
            ) {
              return;
            }
            if (!isTouchInHero(touch)) return;

            touchState.active = true;
            touchState.drawing = true;
            touchState.hasTouchInput = true;
            touchState.mode = "pending";
            touchState.scrolling = false;
            touchState.startX = touch.clientX;
            touchState.startY = touch.clientY;
            touchState.previousY = touch.clientY;
            updateTouchPosition(touch);
          };

          const handleTouchMove = (event: TouchEvent) => {
            if (!touchState.active) return;

            const touch = event.touches[0];
            if (!touch) return;

            event.preventDefault();
            updateTouchPosition(touch);

            const deltaX = touch.clientX - touchState.startX;
            const deltaY = touch.clientY - touchState.startY;
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);

            if (
              touchState.mode === "pending" &&
              absY > 28 &&
              absY > absX * 1.25
            ) {
              touchState.drawing = false;
              touchState.mode = "scrolling";
              touchState.scrolling = true;
            }

            if (touchState.mode === "scrolling") {
              window.scrollBy(0, touchState.previousY - touch.clientY);
              touchState.previousY = touch.clientY;
              return;
            }

            if (
              touchState.mode === "pending" &&
              (absX > 12 || (absX + absY > 18 && absY <= absX * 1.25))
            ) {
              touchState.mode = "drawing";
            }

            if (touchState.mode === "drawing" || touchState.mode === "pending") {
              touchState.drawing = true;
              event.preventDefault();
            }
          };

          const handleTouchEnd = () => {
            touchState.active = false;
            touchState.drawing = false;
            touchState.mode = "idle";
            touchState.scrolling = false;
          };

          document.addEventListener("touchstart", handleTouchStart, {
            capture: true,
            passive: false,
          });
          document.addEventListener("touchmove", handleTouchMove, {
            capture: true,
            passive: false,
          });
          document.addEventListener("touchend", handleTouchEnd, {
            capture: true,
          });
          document.addEventListener("touchcancel", handleTouchEnd, {
            capture: true,
          });

          cleanupCanvasEvents = () => {
            document.removeEventListener("touchstart", handleTouchStart, {
              capture: true,
            });
            document.removeEventListener("touchmove", handleTouchMove, {
              capture: true,
            });
            document.removeEventListener("touchend", handleTouchEnd, {
              capture: true,
            });
            document.removeEventListener("touchcancel", handleTouchEnd, {
              capture: true,
            });
          };
        };

        /* Interactive Cursor Drawing */
        s.draw = () => {
          if (touchState.hasTouchInput) {
            const x = touchState.active ? touchState.x : s.mouseX;
            const y = touchState.active ? touchState.y : s.mouseY;

            s.fill(255);
            s.stroke(0);
            s.circle(x, y, 100);
            return;
          }

          if (isTouchDevice) {
            s.fill(255);
            s.stroke(0);
            s.circle(s.mouseX, s.mouseY, 100);
            return;
          }

          const isInteracting = touchState.active
            ? touchState.drawing && touchState.mode !== "scrolling"
            : s.mouseIsPressed === true;
          const x = touchState.active ? touchState.x : s.mouseX;
          const y = touchState.active ? touchState.y : s.mouseY;

          if (isInteracting) {
            s.fill(0);
            s.stroke(255);
          } else {
            s.fill(255);
            s.stroke(0);
          }

          s.circle(x, y, 100);
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
      cleanupCanvasEvents?.();
      if (instance) instance.remove();
    };
  }, []);

  /* P5 Canvas Container */
  return <div ref={containerRef} className="h-full w-full" />;
}

"use client";

import { useEffect, useRef } from "react";

const GLOW_SIZE = 500; // glow diameter in pixels

export default function CursorGlow() {
       const glowRef = useRef<HTMLDivElement>(null);

       useEffect(() => {
              const glow = glowRef.current;
              if (!glow) return;

              // Only run on devices with a real mouse, and respect "reduce motion"
              const hasMouse = window.matchMedia(
                     "(hover: hover) and (pointer: fine)"
              ).matches;
              const reduceMotion = window.matchMedia(
                     "(prefers-reduced-motion: reduce)"
              ).matches;
              if (!hasMouse || reduceMotion) return;

              let frame = 0;

              const handleMove = (e: MouseEvent) => {
                     cancelAnimationFrame(frame);
                     frame = requestAnimationFrame(() => {
                            glow.style.transform = `translate3d(${e.clientX - GLOW_SIZE / 2}px, ${e.clientY - GLOW_SIZE / 2}px, 0)`;
                            glow.style.opacity = "1";
                     });
              };

              const handleLeave = () => {
                     glow.style.opacity = "0";
              };

              window.addEventListener("mousemove", handleMove);
              document.documentElement.addEventListener("mouseleave", handleLeave);

              // Cleanup: remove listeners when the component disappears
              return () => {
                     cancelAnimationFrame(frame);
                     window.removeEventListener("mousemove", handleMove);
                     document.documentElement.removeEventListener("mouseleave", handleLeave);
              };
       }, []);

       return (
              <div
                     ref={glowRef}
                     aria-hidden="true"
                     className="pointer-events-none fixed top-0 left-0 z-50 rounded-full opacity-0 transition-opacity duration-300"
                     style={{
                            width: GLOW_SIZE,
                            height: GLOW_SIZE,
                            background:
                                   "radial-gradient(circle, rgba(217,164,65,0.30) 0%, rgba(248,232,191,0.18) 40%, transparent 70%)",
                     }}
              />
       );
}

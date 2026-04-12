"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

// Total frames in the sequence based on the user's provided assets.
const TOTAL_FRAMES = 46;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });
  
  // Track images so we can preload them efficiently
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    // Helper to preload images
    const loadImages = () => {
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        // The files provided are named frame_00_delay-0.041s.webp, frame_01_delay-0.041s.webp...
        const frameIndex = i.toString().padStart(2, "0");
        img.src = `/sequence/frame_${frameIndex}_delay-0.041s.webp`;
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    // Initial draw once the first image is loaded
    if (images.length > 0 && canvasRef.current) {
      const firstImage = images[0];
      firstImage.onload = () => {
        renderFrame(firstImage);
      };
      // In case it's already cached/loaded
      if (firstImage.complete) {
        renderFrame(firstImage);
      }
    }
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Map scroll progress (0-1) to an index in our image array
    const frameIndex = Math.min(
      Math.floor(latest * TOTAL_FRAMES),
      TOTAL_FRAMES - 1
    );
    
    if (images[frameIndex]) {
      renderFrame(images[frameIndex]);
    }
  });

  const renderFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use devicePixelRatio for crispness
    const dpr = window.devicePixelRatio || 1;
    // Set internal canvas resolution to match window + intrinsic dpi
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let renderWidth, renderHeight, x, y;
    
    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      x = 0;
      y = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      renderHeight = canvas.height;
      x = (canvas.width - renderWidth) / 2;
      y = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the image onto the canvas extending outwards to cover fully
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  };

  return (
    // 500vh container to give us plenty of scroll depth for scrubbing the sequence
    <div className="h-[500vh] relative w-full bg-[#121212]">
      {/* Sticky wrapper stays pinned to screen while inner scroll distance is traversed */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        <Overlay />
      </div>
    </div>
  );
}

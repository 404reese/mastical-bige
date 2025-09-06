import React, { useRef } from 'react';
import { TextReveal } from "@/components/magicui/text-reveal"; // Assuming this component exists
import { motion, useScroll, useTransform } from "framer-motion";

// Mock TextReveal if you don't have it - replace with your actual import
// const TextReveal = ({ children, className }) => <div className={className}>{children}</div>;


export const HeroScroll = () => {
  const collections = [
    { image: '/f1.jpg' }, { image: '/a2.png' }, { image: '/f2.jpg' },
    { image: '/a4.png' }, { image: '/a5.png' }, { image: '/a6.jpg' },
  ];

  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"] // Defines the scroll range for the animation (0 to 1)
  });

  // --- Configuration ---

  // INCREASED: Make images move further away from the center
  const imageSpreadDistance = 550; // Was 350, now 550 (adjust higher/lower as needed)

  // ADDED: Controls how quickly the animation completes (e.g., 0.7 = 70% of scroll duration)
  // A lower value means a faster visual transition.
  const animationCompletionPoint = 0.7; // Was implicitly 1.0, now 0.7

  const imageInitialRotationVariance = 10;
  const imageFinalRotation = 15;
  const imageInitialScale = 0.8;
  const imageFinalScale = 1;

  // Function to determine the target (final) position for each image
  const getTargetPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    // Uses the increased spread distance
    const x = imageSpreadDistance * Math.cos(angle);
    const y = imageSpreadDistance * Math.sin(angle);
    return { x, y };
  };

  return (
    // 1. Scroll Container
    <section
      ref={scrollContainerRef}
      className="relative bg-gray-900 text-[#e5e2e0] min-h-[500vh] w-full" // Increased from 300vh to 400vh
    >
      {/* 2. Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Text Reveal Component - Moved to front */}
        <div className="absolute inset-0 flex items-center justify-center z-50 p-4">
          <TextReveal className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl">

            Experience the luxury of a fabulous home with The Big E.

          </TextReveal>
        </div>

        {/* Images Container */}
        <div className="relative w-full h-full">
          {collections.map((collection, index) => {
            const { x: targetX, y: targetY } = getTargetPosition(index, collections.length);

            // MODIFIED: Input range changed from [0, 1] to [0, animationCompletionPoint]
            // This makes the animation complete faster within the scroll duration.
            const x = useTransform(scrollYProgress, [0, animationCompletionPoint], [0, targetX]);
            const y = useTransform(scrollYProgress, [0, animationCompletionPoint], [0, targetY]);

            // Apply the same faster completion point to other animations for consistency
            const rotate = useTransform(scrollYProgress, [0, animationCompletionPoint],
              [Math.random() * imageInitialRotationVariance * 2 - imageInitialRotationVariance,
               (index % 2 === 0 ? 1 : -1) * imageFinalRotation]
            );
            const scale = useTransform(scrollYProgress, [0, animationCompletionPoint], [imageInitialScale, imageFinalScale]);

            // Keep opacity mapped over a slightly wider range for smoother fade if needed
            const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

            return (
              <motion.div
                key={collection.image}
                className="absolute top-1/2 left-1/2"
                style={{
                  x, // Apply transformed X (faster, further)
                  y, // Apply transformed Y (faster, further)
                  rotate, // Apply transformed rotation (faster)
                  scale,  // Apply transformed scale (faster)
                  opacity, // Apply transformed opacity
                  translateX: "-50%",
                  translateY: "-50%",
                  zIndex: 20, // Removed + index to keep all images on same level
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-black/30 rounded-lg z-10"></div>
                  <img
                    src={collection.image}
                    alt={`Image ${index + 1}`}
                    className="max-w-[300px] max-h-[450px] w-auto h-auto object-contain rounded-lg shadow-2xl border-2 border-white/10"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
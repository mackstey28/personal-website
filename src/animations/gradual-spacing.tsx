'use client';

import React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export function GradualSpacing({
  text = 'Gradual Spacing',
  delayBeforeStart = 0, // wait this long before animation starts
  delayBeforeExit = 0,  // optional: extra delay before it exits
  onComplete,
}: {
  text: string;
  delayBeforeStart?: number; // in seconds
  delayBeforeExit?: number;  // in seconds
  onComplete?: () => void;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startAnimating, setStartAnimating] = React.useState(false);
  const [showText, setShowText] = React.useState(true);

  const totalDuration = text.length * 0.1 + 0.5; // estimate of full animation duration

  React.useEffect(() => {
    if (isInView) {
      const startTimer = setTimeout(() => {
        setStartAnimating(true);
      }, delayBeforeStart * 1000);

      return () => clearTimeout(startTimer);
    }
  }, [isInView, delayBeforeStart]);

  React.useEffect(() => {
    if (startAnimating) {
      const exitTimer = setTimeout(() => {
        setShowText(false);
      }, (totalDuration + delayBeforeExit) * 1000);

      return () => clearTimeout(exitTimer);
    }
  }, [startAnimating, totalDuration, delayBeforeExit]);

  // Call onComplete after exit finishes
  React.useEffect(() => {
    if (!showText) {
      const completeTimer = setTimeout(() => {
        onComplete?.();
      }, 1500); // match exit animation duration

      return () => clearTimeout(completeTimer);
    }
  }, [showText, onComplete]);
  
  return (
    <div className="flex space-x-1 justify-center centerText">
      <AnimatePresence>
        {showText &&
          text.split('').map((char, i) => (
            <motion.p
              ref={i === 0 ? ref : null} // only assign ref once
              key={i}
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
            >
              {char === ' ' ? <span>&nbsp;</span> : char}
            </motion.p>
          ))}
      </AnimatePresence>
    </div>
  );
}
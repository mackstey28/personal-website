'use client';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import * as React from 'react';

export const BlurIn = ({
  children,
  onComplete,
  delayBeforeExit = 0,
}: {
  children: React.ReactNode;
  onComplete: () => void;
  delayBeforeExit?: number; // optional delay before starting the exit
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startExit, setStartExit] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setStartExit(true);
      }, (1.2 + delayBeforeExit) * 3000); // entry duration + optional delay

      return () => clearTimeout(timeout);
    }
  }, [isInView, delayBeforeExit]);

  React.useEffect(() => {
    if (startExit) {
      // Wait for exit animation to finish before calling onComplete
      const timeout = setTimeout(() => {
        setVisible(false); // triggers exit
        onComplete?.();
      }, 800); // match exit animation duration

      return () => clearTimeout(timeout);
    }
  }, [startExit, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.h2
          ref={ref}
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={isInView && !startExit ? { filter: 'blur(0px)', opacity: 1 } : {}}
          exit={{ filter: 'blur(20px)', opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
        >
          {children}
        </motion.h2>
      )}
    </AnimatePresence>
  );
};
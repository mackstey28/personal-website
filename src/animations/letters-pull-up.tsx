'use client';
import { cn } from '../app/cn';
import React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export function LettersPullUp({
  text,
  className = '',
  onComplete,
  delayBeforeExit = 0,
}: {
  text: string;
  className?: string;
  onComplete: () => void;
  delayBeforeExit?: number; // optional delay before exit
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startExit, setStartExit] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const characters = text.split('');
  const totalDuration = characters.length * 0.05 + 1.5;

  // Start exit after entry animation finishes + optional delay
  React.useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setStartExit(true);
      }, (totalDuration + delayBeforeExit) * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView, totalDuration, delayBeforeExit]);

  // After exit animation ends, remove and trigger onComplete
  React.useEffect(() => {
    if (startExit) {
      const exitDuration = characters.length * 0.05 + 0.5;

      const timeout = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, exitDuration * 1000);

      return () => clearTimeout(timeout);
    }
  }, [startExit, onComplete, characters.length]);

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
    exit: (i: number) => ({
      y: -50,
      opacity: 0,
      transition: { delay: i * 0.1, duration: 1 },
    }),
  };

  return (
    <div className="flex justify-center centerText">
      <AnimatePresence>
        {visible &&
          characters.map((current, i) => (
            <motion.div
              key={i}
              ref={i === 0 ? ref : null} // only assign ref once
              variants={pullupVariant}
              initial="initial"
              animate={isInView && !startExit ? 'animate' : ''}
              exit="exit"
              custom={i}
              className={cn(
                'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
                className
              )}
            >
              {current === ' ' ? <span>&nbsp;</span> : current}
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}

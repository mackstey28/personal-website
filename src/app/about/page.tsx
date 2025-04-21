'use client';
 
import { LettersPullUp } from '@/animations/letters-pull-up';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <LettersPullUp
      text="ABOUT ME"
      onComplete={() => null}
  />
  );
}
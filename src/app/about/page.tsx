'use client';
 
import { LettersPullUp } from '@/animations/letters-pull-up';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <LettersPullUp
      className="pageTitle"
      text="WHO AM I..."
      onComplete={() => null}
      />
      <h1>24/M/NYC</h1>

      <h1>SWE</h1>

      <h1>BBOY</h1>
    </div>

  );
}
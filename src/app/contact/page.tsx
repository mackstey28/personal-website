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
      text="TALK TO ME"
      onComplete={() => null}
      />
      <h1>GITHUB</h1>

      <h1>LINKEDIN</h1>

      <h1>EMAIL</h1>
    </div>

  );
}
'use client';

import React from 'react';
import { GradualSpacing } from './gradual-spacing';
import { LettersPullUp } from './letters-pull-up';

export default function AnimatedSequence() {
  const [step, setStep] = React.useState(0);

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
      {step === 0 && (
        <GradualSpacing
          text="hello there"
          delayBeforeStart={0}
          delayBeforeExit={1}
          onComplete={() => setStep(1)}
        />
      )}
      {step === 1 && (
        <LettersPullUp
          text="welcome to my personal site"
          onComplete={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <GradualSpacing
          text="hope you enjoy your stay"
          delayBeforeStart={0}
          delayBeforeExit={1}
          onComplete={() => console.log('Done!')}
        />
      )}
    </div>
  );
}
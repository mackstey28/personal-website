'use client';

import React from 'react';
import { GradualSpacing } from '../animations/gradual-spacing';
import { LettersPullUp } from '../animations/letters-pull-up';
import { BlurIn } from '../animations/blur-in';
import { PathDrawing } from '../animations/path-drawing';
import { FrontMenu } from '../animations/front-menu';

export default function AnimatedSequence() {
  const [step, setStep] = React.useState(0);
  const [animationComplete, setAnimationComplete] = React.useState(false);

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
      {/* {step === 0 && (
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
        <BlurIn onComplete={() => setStep(3)}>
          enjoy!
        </BlurIn>
      )}
      {step === 3 && (
        <PathDrawing></PathDrawing>
      )} */}
      <PathDrawing onComplete={() => setAnimationComplete(true)}></PathDrawing>
      <FrontMenu visible={animationComplete}></FrontMenu>
    </div>
  );
}
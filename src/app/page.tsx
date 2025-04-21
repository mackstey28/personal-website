'use client';

import React from 'react';
import { PathDrawing } from '../animations/path-drawing';
import { FrontMenu } from '../animations/front-menu';
import { AnimatePresence, motion } from 'framer-motion';
import Parallax from '../animations/parallax';

export default function AnimatedSequence() {
  const [step, setStep] = React.useState(0);
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("");
  const [showIntro, setShowIntro] = React.useState(true);

  const handleMenuClick = (label: string) => {
    setShowIntro(false);
    setTimeout(() => {
      setCurrentPage(label);
    }, 500); // Delay to allow exit animation to complete
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen relative">
      <AnimatePresence>
        {showIntro && (
          <>
            <motion.div
              key="path"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <PathDrawing onComplete={() => setAnimationComplete(true)} />
            </motion.div>

            {animationComplete && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontFamily: 'Fireside',
                  display: 'flex',
                  gap: '1rem',
                  position: 'absolute',
                  zIndex: 10,
                  textAlign: 'center',
                  marginTop: 50,
                }}
              >
                {['ABOUT', 'CONTACT', 'MISC'].map((label, index) => (
                  <motion.button
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1, delay: index * 0.5, ease: 'easeOut' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleMenuClick(label)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      fontSize: '1rem',
                      color: '#ffffff',
                      cursor: 'pointer',
                    }}
                  >
                    {label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentPage=="ABOUT" && !showIntro && (
          <motion.div
            key="parallax"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Parallax />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
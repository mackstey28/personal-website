'use client';

import React from 'react';
import { PathDrawing } from '../animations/path-drawing';
import { FrontMenu } from '../animations/front-menu';
import { AnimatePresence, motion } from 'framer-motion';
import Parallax from '../animations/parallax';

import nameImg from '../static/name.png'
import backButtonImg from '../static/back_arrow.png'
import githubImg from '../static/github.png'
import linkedinImg from '../static/linkedin.png'

export default function AnimatedSequence() {
  const [step, setStep] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState("HOME");
  const [showIntro, setShowIntro] = React.useState(true);
    const [openingAnimationComplete, setOpeningAnimationComplete] = React.useState(false);


  const handleMenuClick = (label: string) => {
    setShowIntro(false);
    setTimeout(() => {
      setCurrentPage(label);
    }, 1000); // Delay to allow exit animation to complete
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen relative">
      {/* Homepage */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <>
            {/* Animated title */}
            <motion.div
              key="path"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <PathDrawing onComplete={() => setOpeningAnimationComplete(true)} />
            </motion.div>

            {/* Static title */}
            {/* <motion.div>
              <img
                src={nameImg.src}
                alt="Title goes here"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </motion.div> */}

            {/* Menu, spawns after opening animation */}
            {openingAnimationComplete && (
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

      {/* Back button */}
      {currentPage != "HOME" && !showIntro && (
        <motion.button
          key="backButton"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.5, ease: 'easeOut' } }}
          transition={{ duration: 1, delay: 0.5, transition: { duration: 0.5 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowIntro(true)}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            color: '#ffffff',
            cursor: 'pointer',
            position: 'fixed',
            top: 0,
            left: 0,
            margin: '16px',
            zIndex: 11,
          }}
        >
          <img
            src={backButtonImg.src}
            alt="Back"
            style={{
              width: '64px',
              height: '64px',
            }}
          />
        </motion.button>
      )}

      {/* About */}
      <AnimatePresence mode="wait">
        {currentPage == "ABOUT" && !showIntro && (
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

      {/* Contact */}
      <AnimatePresence mode="wait">
        {currentPage == "CONTACT" && !showIntro && (
          <motion.div>
            {/* Github */}
            <motion.button
              key="githubButton"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.5, ease: 'easeOut' } }}
              transition={{ duration: 1, delay: 0.5, transition: { duration: 0.5 } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://github.com/mackstey28/', '_blank', 'noopener,noreferrer')}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                color: '#ffffff',
                cursor: 'pointer',
                margin: '16px',
                zIndex: 11,
              }}
            >
              <img
                src={githubImg.src}
                alt="Back"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </motion.button>
            {/* Linkedin */}
            <motion.button
              key="linkedinButton"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.5, ease: 'easeOut' } }}
              transition={{ duration: 1, delay: 1, transition: { duration: 0.5 } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.linkedin.com/in/maxwell-tang/', '_blank', 'noopener,noreferrer')}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                color: '#ffffff',
                cursor: 'pointer',
                margin: '16px',
              }}
            >
              <img
                src={linkedinImg.src}
                alt="Back"
                style={{
                  width: '64px',
                  height: '64px',
                }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
'use client';

import React from 'react';
import { PathDrawing } from '../animations/path-drawing';
import { AnimatePresence, motion } from 'framer-motion';
import Parallax from '../animations/parallax';

import nameImg from '../static/name.png'
import backButtonImg from '../static/back_arrow.png'
import githubImg from '../static/github.png'
import linkedinImg from '../static/linkedin.png'

export default function AnimatedSequence() {
  // keep track of current "page" we're viewing
  // they're not separate pages, just different components we're displaying at the moment
  const [currentPage, setCurrentPage] = React.useState("HOME");
  // do I need this? might delete later
  const [showIntro, setShowIntro] = React.useState(true);
  // one time delay for menu to wait for opening animation
  const [openingAnimationComplete, setOpeningAnimationComplete] = React.useState(false);
  // we only run opening animation of my name once
  const [openingAnimationAlreadyDone, setOpeningAnimationAlreadyDone] = React.useState(false);
  // need this because when navigating between pages, motion components are not waiting 
  // for each other to finish their exit animations before starting their own
  const [animationCurrentlyPlaying, setAnimationCurrentlyPlaying] = React.useState(false);

  const handleMenuClick = (label: string) => {
    setOpeningAnimationAlreadyDone(true);
    setOpeningAnimationComplete(false);
    setShowIntro(false);
    setTimeout(() => {
      setCurrentPage(label);
    }, ); // Delay to allow exit animation to complete, removed due to it causing issues
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen relative">
      {/* Homepage */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <>
            {/* Animated title */}
            {!openingAnimationAlreadyDone && (
            <motion.div
              key="animatedIntro"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <PathDrawing onComplete={() => setOpeningAnimationComplete(true)} />
            </motion.div>
            )}

            {/* Static title */}
            {openingAnimationAlreadyDone && !animationCurrentlyPlaying && (
            <motion.div
              key="staticIntro"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={() => setOpeningAnimationComplete(true)}>
              <img
                src={nameImg.src}
                alt="Title goes here"
                style={{
                  width: '480px',
                  height: '150px',
                  transform: 'translate(0px, -100px)'
                }}
              />
            </motion.div>
            )}

            {/* Menu, spawns after opening animation */}
            {openingAnimationComplete && !animationCurrentlyPlaying && (
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
      <AnimatePresence mode="wait">
      {currentPage != "HOME" && !showIntro && (
        <motion.button
          key="backButton"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.5, ease: 'easeOut' } }}
          transition={{ duration: 1, delay: 0.5 }}
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
      </AnimatePresence>

      {/* About */}
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => setAnimationCurrentlyPlaying(false)}>
        {currentPage == "ABOUT" && !showIntro && (
            <motion.div
              key="parallax"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={() => setAnimationCurrentlyPlaying(true)}
            >
              <Parallax />
            </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => setAnimationCurrentlyPlaying(false)}>
        {currentPage == "CONTACT" && !showIntro && (
          <motion.div
            style={{
              position: "fixed"
            }}>
            {/* Github */}
            <motion.button
              key="githubButton"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.5, ease: 'easeOut' } }}
              transition={{ duration: 1, delay: 0.5 }}
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
              transition={{ duration: 1, delay: 1 }}
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
              onAnimationComplete={() => setAnimationCurrentlyPlaying(true)}
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

      {/* Misc */}
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => setAnimationCurrentlyPlaying(false)}>
        {currentPage == "MISC" && !showIntro && (
          <h1>HI!!! need to implement this puppy</h1>
        )}
      </AnimatePresence>
    </div>
  );
}
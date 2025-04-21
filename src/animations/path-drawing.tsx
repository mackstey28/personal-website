"use client"

import { motion, useAnimation } from "motion/react"
import React, { useState } from "react"
import { useEffect } from "react"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 2, bounce: 0, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

const dark = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 0.01, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

const moveUp = {
    initial: { y: -10 },
    up: { y: -100, transition: { duration: 1, delay: 2.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export function PathDrawing({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const drawControls = useAnimation();
    const moveControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await drawControls.start("visible");
            await moveControls.start("up");
        };
        sequence();
    }, []);

    useEffect(() => {
        const animationDuration = 3250; // milliseconds
        const timer = setTimeout(() => {
            onComplete();
        }, animationDuration);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div variants={moveUp} initial="initial" animate={moveControls}>
            <div className="centerText">
                <motion.svg
                    width="480"
                    height="150"
                    viewBox="0 0 500 180"
                    initial="hidden"
                    animate="visible">
                    {/* first stroke of M */}
                    <motion.line x1="10" y1="160" x2="10" y2="10" stroke="#ffffff" variants={draw} custom={0} style={round} />

                    {/* second stroke of M */}
                    <motion.line x1="11.09" y1="13.9" x2="76" y2="120" stroke="#ffffff" variants={draw} custom={2} style={round} />

                    {/* third stroke of M */}
                    <motion.line x1="64" y1="120" x2="128.91" y2="13.9" stroke="#ffffff" variants={draw} custom={0} style={round} />

                    {/* black stroke blocking second stroke of M */}
                    <motion.line x1="30.68" y1="74.34" x2="63.18" y2="127.79" stroke="#0a0a0a" variants={dark} custom={0} style={round} />

                    {/* black stroke blocking third stroke of M */}
                    <motion.line x1="76.82" y1="127.79" x2="109.32" y2="74.34" stroke="#0a0a0a" variants={dark} custom={0} style={round} />

                    {/* fourth stroke of M */}
                    <motion.line x1="130" y1="10" x2="130" y2="160" stroke="#ffffff" variants={draw} custom={2} style={round} />

                    {/* first stroke of A */}
                    <motion.line x1="190" y1="167.5" x2="250" y2="10" stroke="#ffffff" variants={draw} custom={0} style={round} />

                    {/* second stroke of A */}
                    <motion.line x1="250" y1="10" x2="310" y2="167.5" stroke="#ffffff" variants={draw} custom={2} style={round} />

                    {/* black stroke blocking top of A */}
                    <motion.line x1="230" y1="2.5" x2="270" y2="2.5" stroke="#0a0a0a" variants={dark} custom={0} style={round} />

                    {/* black stroke blocking bottom of A */}
                    <motion.line x1="150" y1="167.5" x2="350" y2="167.5" stroke="#0a0a0a" variants={dark} custom={0} style={round} />

                    {/* first stroke of X */}
                    <motion.line x1="480" y1="2.5" x2="360" y2="167.5" stroke="#ffffff" variants={draw} custom={0} style={round} />

                    {/* second stroke of X */}
                    <motion.line x1="360" y1="2.5" x2="480" y2="167.5" stroke="#ffffff" variants={draw} custom={2} style={round} />

                    {/* black stroke blocking top of X */}
                    <motion.line x1="340" y1="2.5" x2="500" y2="2.5" stroke="#0a0a0a" variants={dark} custom={0} style={round} />

                    {/* black stroke blocking bottom of X */}
                    <motion.line x1="340" y1="167.5" x2="500" y2="167.5" stroke="#0a0a0a" variants={dark} custom={0} style={round} />
                </motion.svg>
            </div>
        </motion.div>

    )
}

const round: React.CSSProperties = {
    strokeWidth: 15,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    fill: "transparent",
}
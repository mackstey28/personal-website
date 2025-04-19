"use client"

import { motion } from "motion/react"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
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
                pathLength: { delay, type: "spring", duration: 0.1, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

export function PathDrawing() {
    return (
        <div className="centerText">
            <motion.svg
                width="1920"
                height="600"
                viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
            >
                <motion.line // first stoke of M
                    x1="0"
                    y1="160"
                    x2="0"
                    y2="10"
                    stroke="#ffffff"
                    variants={draw}
                    custom={0}
                    style={round}
                />
                <motion.line // second stroke of M
                    x1="1.09"
                    y1="13.9"
                    x2="66"
                    y2="120"
                    stroke="#ffffff"
                    variants={draw}
                    custom={2}
                    style={round}
                />
                <motion.line // third stroke of M
                    x1="54"
                    y1="120"
                    x2="118.91"
                    y2="13.9"
                    stroke="#ffffff"
                    variants={draw}
                    custom={0}
                    style={round}
                />
                <motion.line // black stroke blocking second stroke of M
                    x1="20.68"
                    y1="74.34"
                    x2="53.18"
                    y2="127.79"
                    stroke="#0a0a0a"
                    variants={dark}
                    custom={0}
                    style={round}
                />
                <motion.line // black stroke blocking third stroke of M
                    x1="66.82"
                    y1="127.79"
                    x2="99.32"
                    y2="74.34"
                    stroke="#0a0a0a"
                    variants={dark}
                    custom={0}
                    style={round}
                />
                <motion.line // fourth stroke of M
                    x1="120"
                    y1="10"
                    x2="120"
                    y2="160"
                    stroke="#ffffff"
                    variants={draw}
                    custom={2}
                    style={round}
                />

                <motion.line // first stoke of A
                    x1="180"
                    y1="167.5"
                    x2="240"
                    y2="10"
                    stroke="#ffffff"
                    variants={draw}
                    custom={0}
                    style={round}
                />
                <motion.line // second stoke of A
                    x1="240"
                    y1="10"
                    x2="300"
                    y2="167.5"
                    stroke="#ffffff"
                    variants={draw}
                    custom={2}
                    style={round}
                />
                <motion.line // black stroke blocking top of A
                    x1="220"
                    y1="2.5"
                    x2="260"
                    y2="2.5"
                    stroke="#0a0a0a"
                    variants={dark}
                    custom={0}
                    style={round}
                />
                <motion.line // black stroke blocking bottom of A
                    x1="140"
                    y1="167.5"
                    x2="340"
                    y2="167.5"
                    stroke="#0a0a0a"
                    variants={dark}
                    custom={0}
                    style={round}
                />

                <motion.line // first stoke of X
                    x1="470"
                    y1="2.5"
                    x2="350"
                    y2="167.5"
                    stroke="#ffffff"
                    variants={draw}
                    custom={0}
                    style={round}
                />
                <motion.line // second stoke of X
                    x1="350"
                    y1="2.5"
                    x2="470"
                    y2="167.5"
                    stroke="#ffffff"
                    variants={draw}
                    custom={2}
                    style={round}
                />
                <motion.line // black stroke blocking top of X
                    x1="330"
                    y1="2.5"
                    x2="490"
                    y2="2.5"
                    stroke="#0a0a0a"
                    variants={dark}
                    custom={0}
                    style={round}
                />
                <motion.line // black stroke blocking bottom of X
                    x1="330"
                    y1="167.5"
                    x2="490"
                    y2="167.5"
                    stroke="#0a0a0a"
                    variants={dark}
                    custom={0}
                    style={round}
                />
            </motion.svg>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
const round: React.CSSProperties = {
    strokeWidth: 15,
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    fill: "transparent",
}
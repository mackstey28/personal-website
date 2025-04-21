/*
     <LettersPullUp
      className="pageTitle"
      text="WHO AM I..."
      onComplete={() => null}
      />
      <h1>24/M/NYC</h1>

      <h1>SWE</h1>

      <h1>BBOY</h1>
*/

"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"

import imgOne from "./pics/1.jpg";
import imgTwo from "./pics/2.jpg";
import imgThr from "./pics/3.jpg";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

export default function About() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const ref = useRef(null);
    const y = useParallax(scrollYProgress, 300);

    return (
        <div id="aboutScroll">
            {/* {[1, 2, 3, 4, 5].map((image) => (
                <Image key={image} id={image} />
            ))} */}
            <section className="img-container">
                <div ref={ref}>
                    <img
                        src={imgOne.src}
                        alt="ME!!!"
                    />
                </div>
                <motion.h2
                    // Hide until scroll progress is measured
                    initial={{ visibility: "hidden" }}
                    animate={{ visibility: "visible" }}
                >{`24/M/NYC`}</motion.h2>
            </section>
            <section className="img-container">
                <div ref={ref}>
                    <img
                        src={imgTwo.src}
                        alt="ME!!!"
                    />
                </div>
                <motion.h2
                    // Hide until scroll progress is measured
                    initial={{ visibility: "hidden" }}
                    animate={{ visibility: "visible" }}
                >{`SWE`}</motion.h2>
            </section>
            <section className="img-container">
                <div ref={ref}>
                    <img
                        src={imgThr.src}
                        alt="ME!!!"
                    />
                </div>
                <motion.h2
                    // Hide until scroll progress is measured
                    initial={{ visibility: "hidden" }}
                    animate={{ visibility: "visible" }}
                >{`BBOY`}</motion.h2>
            </section>
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #ffffff;
            margin: 0;
            font-family: "Poppins";
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }
        }
    `}</style>
    )
}
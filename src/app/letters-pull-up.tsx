'use client';
import { cn } from './cn';
import React from 'react';
import { motion, useInView } from 'framer-motion';

export function LettersPullUp({
    text,
    className = '',
    onComplete,
}: {
    text: string;
    className?: string;
    onComplete: () => void;
}) {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const [startAnimating, setStartAnimating] = React.useState(false);
    const [showText, setShowText] = React.useState(true);

    const totalDuration = text.length * 0.1 + 0.5; // estimate of full animation duration

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            onComplete();
        }, totalDuration * 1000);
        return () => clearTimeout(timeout);
    }, [text, onComplete]);
    const splittedText = text.split('');

    const pullupVariant = {
        initial: { y: 10, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };

    return (
        <div className="flex justify-center centerText">
            {splittedText.map((current, i) => (
                <motion.div
                    key={i}
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={cn(
                        'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
                        className
                    )}
                >
                    {current == ' ' ? <span>&nbsp;</span> : current}
                </motion.div>
            ))}
        </div>
    );
}
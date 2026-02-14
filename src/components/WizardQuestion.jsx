import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from './FloatingHearts';
import StarField from './StarField';
import ShakeButton from './ShakeButton';

function HeartBurst({ x, y }) {
    const hearts = Array.from({ length: 10 }, (_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        return {
            id: i,
            tx: Math.cos(angle) * distance,
            ty: Math.sin(angle) * distance,
            color: ['#FF1744', '#FF4081', '#FFD700', '#E040FB'][Math.floor(Math.random() * 4)],
        };
    });

    return (
        <div className="fixed pointer-events-none" style={{ left: x, top: y, zIndex: 100 }}>
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute"
                    style={{ fontSize: '18px', color: heart.color, filter: `drop-shadow(0 0 4px ${heart.color})` }}
                    initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                    animate={{
                        scale: [0, 1.3, 0],
                        opacity: [1, 1, 0],
                        x: heart.tx,
                        y: heart.ty,
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    ♥
                </motion.div>
            ))}
        </div>
    );
}

export default function WizardQuestion({ question, currentStep, totalSteps, onYes }) {
    const [bursts, setBursts] = useState([]);

    const handleYes = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const newBurst = {
            id: Date.now(),
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };
        setBursts((prev) => [...prev, newBurst]);

        setTimeout(() => {
            onYes();
        }, 400);
    }, [onYes]);

    return (
        <motion.div
            className="w-full h-full flex flex-col items-center justify-center relative romantic-wizard-bg"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <StarField count={40} />
            <FloatingHearts count={10} />

            {/* Ambient orbs */}
            <div className="orb w-[300px] h-[300px] bg-rose-deep top-[10%] left-[-5%]" />
            <div className="orb w-[250px] h-[250px] bg-secondary bottom-[10%] right-[-5%]" />

            {/* Heart bursts */}
            <AnimatePresence>
                {bursts.map((burst) => (
                    <HeartBurst key={burst.id} x={burst.x} y={burst.y} />
                ))}
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 w-full max-w-xl mx-auto px-4">
                {/* Question Card */}
                <motion.div
                    className="glass-card-glow p-8 md:p-12 text-center"
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                    {/* Question emoji */}
                    <motion.div
                        className="text-6xl md:text-7xl mb-6"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 180, delay: 0.2 }}
                        style={{ filter: 'drop-shadow(0 0 12px rgba(255,64,129,0.4))' }}
                    >
                        {question.emoji}
                    </motion.div>

                    {/* Question text */}
                    <motion.h2
                        className="font-dancing text-2xl md:text-4xl text-white mb-10 leading-relaxed glow-text-soft"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {question.question}
                    </motion.h2>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            className="yes-btn text-lg px-10 py-4"
                            onClick={handleYes}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            YES! 💖
                        </motion.button>

                        <ShakeButton>No</ShakeButton>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

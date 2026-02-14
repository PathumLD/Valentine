import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import FloatingHearts from './FloatingHearts';
import StarField from './StarField';

function GlowingHeart() {
    return (
        <motion.div
            className="text-8xl md:text-9xl"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.3 }}
        >
            <motion.span
                className="inline-block"
                animate={{
                    scale: [1, 1.15, 1],
                    filter: [
                        'drop-shadow(0 0 10px rgba(255,23,68,0.4))',
                        'drop-shadow(0 0 30px rgba(255,23,68,0.7)) drop-shadow(0 0 60px rgba(255,64,129,0.4))',
                        'drop-shadow(0 0 10px rgba(255,23,68,0.4))',
                    ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                💖
            </motion.span>
        </motion.div>
    );
}

function SparkleRing() {
    const sparkles = useMemo(() => {
        return Array.from({ length: 12 }, (_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 120;
            return {
                id: i,
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                delay: i * 0.1,
                size: 3 + Math.random() * 4,
            };
        });
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {sparkles.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute rounded-full"
                    style={{
                        width: s.size,
                        height: s.size,
                        background: '#FFD700',
                        boxShadow: '0 0 6px rgba(255,215,0,0.6)',
                    }}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0],
                        x: s.x,
                        y: s.y,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5 + s.delay,
                        repeat: Infinity,
                        repeatDelay: 2,
                    }}
                />
            ))}
        </div>
    );
}

export default function CelebrationPage({ onReset }) {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => setShowConfetti(false), 8000);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    const confettiColors = ['#FF1744', '#FF4081', '#FFD700', '#E040FB', '#FF6090', '#F8BBD0', '#FFFFFF'];

    return (
        <motion.div
            className="w-full h-full flex flex-col items-center justify-center relative celebration-bg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <StarField count={70} />
            <FloatingHearts count={25} />

            {/* Ambient orbs */}
            <div className="orb w-[500px] h-[500px] bg-primary top-[-15%] left-[20%]" style={{ opacity: 0.12 }} />
            <div className="orb w-[400px] h-[400px] bg-secondary bottom-[-10%] right-[-5%]" style={{ opacity: 0.1 }} />
            <div className="orb w-[300px] h-[300px] bg-gold top-[50%] left-[-10%]" style={{ opacity: 0.06 }} />

            {/* Confetti */}
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    numberOfPieces={300}
                    recycle={true}
                    colors={confettiColors}
                    gravity={0.15}
                    wind={0.01}
                    opacity={0.9}
                />
            )}

            {/* Content */}
            <motion.div
                className="glass-card-glow px-8 py-10 md:px-16 md:py-14 text-center relative z-10 max-w-lg mx-4"
                initial={{ scale: 0.7, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
                {/* Sparkle ring */}
                <SparkleRing />

                {/* Big Heart */}
                <GlowingHeart />

                {/* Title */}
                <motion.h1
                    className="font-vibes text-4xl md:text-7xl text-white mt-4 mb-2 glow-text"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Yayyyy! 🎉
                </motion.h1>

                <motion.p
                    className="font-outfit text-lg md:text-xl text-white/70 mb-2 tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    I knew you would say yes!
                </motion.p>

                <motion.p
                    className="font-dancing text-2xl md:text-3xl mt-4 mb-6"
                    style={{ color: '#FFD700' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, type: 'spring' }}
                >
                    <span className="gold-glow">You've made me the happiest! ✨</span>
                </motion.p>

                {/* Divider */}
                <motion.div
                    className="w-24 h-[1px] mx-auto mb-6"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                />

                <motion.p
                    className="font-outfit text-white/40 text-sm mb-8 tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    Forever & Always 💕
                </motion.p>

                {/* Reset button */}
                <motion.button
                    className="text-white/30 hover:text-white/60 font-outfit text-xs tracking-widest uppercase transition-colors duration-300 border border-white/10 px-6 py-2 rounded-full hover:border-white/20"
                    onClick={onReset}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start Over
                </motion.button>
            </motion.div>

            {/* Bottom text */}
            <motion.p
                className="absolute bottom-6 font-dancing text-white/15 text-sm z-10 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
            >
                Made with ❤️ just for you
            </motion.p>
        </motion.div>
    );
}

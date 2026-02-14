import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import FloatingHearts from './FloatingHearts';
import StarField from './StarField';
import ShakeButton from './ShakeButton';

export default function LandingPage({ onYes }) {
    return (
        <motion.div
            className="w-full h-full flex flex-col items-center justify-center relative romantic-night-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
        >
            <StarField count={60} />
            <FloatingHearts count={18} />

            {/* Ambient glow orbs */}
            <div className="orb w-[400px] h-[400px] bg-rose-deep top-[-10%] left-[-10%]" />
            <div className="orb w-[300px] h-[300px] bg-secondary bottom-[-5%] right-[-5%]" />
            <div className="orb w-[200px] h-[200px] bg-primary top-[40%] right-[20%]" style={{ opacity: 0.08 }} />

            {/* Decorative sparkles */}
            <motion.div
                className="absolute top-[12%] left-[12%] text-gold"
                animate={{ scale: [1, 1.4, 1], rotate: [0, 15, -15, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Sparkles size={24} />
            </motion.div>
            <motion.div
                className="absolute top-[18%] right-[10%] text-secondary"
                animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
                <Sparkles size={20} />
            </motion.div>
            <motion.div
                className="absolute bottom-[22%] left-[8%] text-primary"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
                <Heart size={18} fill="currentColor" />
            </motion.div>
            <motion.div
                className="absolute bottom-[30%] right-[15%] text-gold"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
                <Heart size={14} fill="currentColor" />
            </motion.div>

            {/* Main content card */}
            <motion.div
                className="glass-card-glow px-8 py-12 md:px-16 md:py-16 text-center relative z-10 max-w-lg mx-4"
                initial={{ scale: 0.85, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
                {/* Decorative heart above */}
                <motion.div
                    className="text-6xl mb-4"
                    animate={{
                        scale: [1, 1.18, 1],
                        filter: [
                            'drop-shadow(0 0 8px rgba(255,23,68,0.3))',
                            'drop-shadow(0 0 20px rgba(255,23,68,0.6))',
                            'drop-shadow(0 0 8px rgba(255,23,68,0.3))',
                        ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    💕
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="font-pacifico text-3xl md:text-5xl text-white mb-2 glow-text leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Will You Be My
                </motion.h1>
                <motion.h1
                    className="font-vibes text-5xl md:text-7xl mb-6 leading-tight"
                    style={{ color: '#FF4081' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <span className="glow-text">Forever Valentine?</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="font-outfit text-white/50 text-base md:text-lg mb-10 tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    I have a very important question for you...
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                >
                    <motion.button
                        className="yes-btn text-lg md:text-xl px-10 py-4 animate-pulse-glow"
                        onClick={onYes}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        YES! 💖
                    </motion.button>

                    <ShakeButton>No</ShakeButton>
                </motion.div>
            </motion.div>

            {/* Bottom decorative text */}
            <motion.p
                className="absolute bottom-6 font-dancing text-white/20 text-sm z-10 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                Made with ❤️ just for you
            </motion.p>
        </motion.div>
    );
}

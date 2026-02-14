import { useMemo } from 'react';
import { motion } from 'framer-motion';

const heartColors = ['#FF1744', '#FF4081', '#F48FB1', '#E040FB', '#FF6090', '#FFD700'];
const heartChars = ['♥', '♡', '❤', '💕'];

function Heart({ delay, duration, size, left, color, char }) {
    return (
        <motion.div
            className="absolute bottom-0 pointer-events-none select-none"
            style={{
                left: `${left}%`,
                fontSize: `${size}px`,
                color: color,
                zIndex: 0,
                filter: `drop-shadow(0 0 ${size / 4}px ${color}40)`,
            }}
            initial={{ y: 20, opacity: 0, rotate: 0 }}
            animate={{
                y: [20, -window.innerHeight - 100],
                opacity: [0, 0.8, 0.8, 0],
                rotate: [0, Math.random() > 0.5 ? 20 : -20, 0],
                x: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {char}
        </motion.div>
    );
}

export default function FloatingHearts({ count = 20 }) {
    const hearts = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            delay: Math.random() * 10,
            duration: 8 + Math.random() * 8,
            size: 14 + Math.random() * 28,
            left: Math.random() * 100,
            color: heartColors[Math.floor(Math.random() * heartColors.length)],
            char: heartChars[Math.floor(Math.random() * heartChars.length)],
        }));
    }, [count]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {hearts.map((heart) => (
                <Heart key={heart.id} {...heart} />
            ))}
        </div>
    );
}

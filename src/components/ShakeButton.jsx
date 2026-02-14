import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function ShakeButton({ onClick, children, className = '' }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [shrinkFactor, setShrinkFactor] = useState(1);
    const [attempts, setAttempts] = useState(0);

    const runAway = useCallback(() => {
        const maxX = 200;
        const maxY = 150;
        const newX = (Math.random() - 0.5) * maxX * 2;
        const newY = (Math.random() - 0.5) * maxY * 2;

        setPosition({ x: newX, y: newY });
        setAttempts((prev) => prev + 1);
        setShrinkFactor((prev) => Math.max(0.3, prev - 0.1));
    }, []);

    const messages = [
        "No",
        "Are you sure? 🥺",
        "Think again! 💔",
        "Don't do this... 😢",
        "Please? 🥹",
        "I'll cry! 😭",
        "Last chance! 💕",
        "Pretty please? 🙏",
        "You sure? 😿",
        "Nooo! 💗",
    ];

    return (
        <motion.button
            className={`no-btn ${className}`}
            style={{
                transform: `scale(${shrinkFactor})`,
            }}
            animate={{
                x: position.x,
                y: position.y,
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
            }}
            onMouseEnter={runAway}
            onTouchStart={runAway}
            onClick={onClick}
            whileTap={{ scale: 0.9 * shrinkFactor }}
        >
            {messages[attempts % messages.length]}
        </motion.button>
    );
}

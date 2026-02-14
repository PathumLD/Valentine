import { useMemo } from 'react';

export default function StarField({ count = 50 }) {
    const stars = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 1 + Math.random() * 3,
            duration: 2 + Math.random() * 4,
            delay: Math.random() * 5,
            opacity: 0.2 + Math.random() * 0.5,
        }));
    }, [count]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        '--duration': `${star.duration}s`,
                        '--delay': `${star.delay}s`,
                        opacity: star.opacity,
                    }}
                />
            ))}
        </div>
    );
}

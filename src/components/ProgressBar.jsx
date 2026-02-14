import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }) {
    const progress = (current / total) * 100;

    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div className="flex justify-between mb-2">
                <span className="text-sm font-poppins font-medium text-deep/70">
                    Question {current} of {total}
                </span>
                <span className="text-sm font-poppins font-medium text-secondary">
                    {Math.round(progress)}%
                </span>
            </div>
            <div className="w-full h-3 bg-accent/50 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: 'linear-gradient(90deg, #FF1744, #FF4081, #E040FB)',
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                />
            </div>
            {/* Progress dots */}
            <div className="flex justify-between mt-3">
                {Array.from({ length: total }, (_, i) => (
                    <motion.div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i < current
                                ? 'bg-primary'
                                : i === current
                                    ? 'bg-secondary'
                                    : 'bg-accent'
                            }`}
                        initial={false}
                        animate={{
                            scale: i < current ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </div>
        </div>
    );
}

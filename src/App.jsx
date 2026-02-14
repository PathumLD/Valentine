import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import WizardQuestion from './components/WizardQuestion';
import CelebrationPage from './components/CelebrationPage';

const questions = [
  {
    id: 1,
    question: "Will you share your snacks with me? 🍕🍫",
    emoji: "🍿",
  },
  {
    id: 2,
    question: "Will you let me annoy you every single day? 😜",
    emoji: "😘",
  },
  {
    id: 3,
    question: "Will you watch my favorite movies, even the boring ones? 🎬",
    emoji: "🎥",
  },
  {
    id: 4,
    question: "Will you steal my hoodies and never give them back? 👕",
    emoji: "🧥",
  },
  {
    id: 5,
    question: "Will you be my partner in crime forever? 💑",
    emoji: "❤️",
  },
];

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleYesLanding = useCallback(() => {
    setCurrentScreen('wizard');
  }, []);

  const handleYesWizard = useCallback(() => {
    const newAnswers = [...answers, true];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentScreen('celebration');
    }
  }, [answers, currentQuestion]);

  const handleReset = useCallback(() => {
    setCurrentScreen('landing');
    setCurrentQuestion(0);
    setAnswers([]);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === 'landing' && (
          <LandingPage key="landing" onYes={handleYesLanding} />
        )}
        {currentScreen === 'wizard' && (
          <WizardQuestion
            key={`wizard-${currentQuestion}`}
            question={questions[currentQuestion]}
            currentStep={currentQuestion + 1}
            totalSteps={questions.length}
            onYes={handleYesWizard}
          />
        )}
        {currentScreen === 'celebration' && (
          <CelebrationPage key="celebration" onReset={handleReset} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

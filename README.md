# 💕 Will You Be My Forever Valentine? 💕

A romantic, interactive Valentine's Day proposal website built with React and Framer Motion. Surprise your special someone with a beautifully animated wizard-style questionnaire that's impossible to say "No" to!

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

---

## ✨ Features

- **🌙 Romantic Landing Page** — A stunning night-sky themed landing with a glowing "Will You Be My Forever Valentine?" prompt, floating hearts, twinkling stars, and ambient glow orbs.
- **📝 5-Question Wizard Flow** — A series of fun, playful questions with smooth slide transitions and heart-burst animations on every "Yes" click.
- **🎉 Celebration Page** — An epic confetti explosion with animated glowing hearts, sparkle rings, and a heartfelt love message.
- **💖 "No" Button That Shakes** — The "No" button playfully shakes and dodges away, making it impossible to refuse!
- **🌟 Glassmorphism UI** — Beautiful frosted glass cards with glowing borders and soft neon effects.
- **📱 Fully Responsive** — Looks gorgeous on mobile, tablet, and desktop.
- **🎨 Rich Animations** — Floating hearts, star fields, pulse glows, spring-based transitions, and heart-burst particle effects powered by Framer Motion.

---

## 🖥️ Pages

### 1. Landing Page
The main proposal screen with:
- Animated pulsing 💕 emoji
- "Will You Be My Forever Valentine?" in elegant script fonts (Pacifico & Great Vibes)
- Twinkling star field background
- Floating hearts
- **YES!** button with glow animation
- **No** button that shakes when clicked

### 2. Wizard Questions
Five fun questions with smooth transitions:
1. 🍿 *Will you share your snacks with me?*
2. 😘 *Will you let me annoy you every single day?*
3. 🎥 *Will you watch my favorite movies, even the boring ones?*
4. 🧥 *Will you steal my hoodies and never give them back?*
5. ❤️ *Will you be my partner in crime forever?*

Each "Yes" triggers a heart-burst particle explosion! 💥

### 3. Celebration Page
After saying "Yes" to everything:
- Full-screen confetti rain
- Animated glowing heart with sparkle ring
- *"You've Made Me the Happiest Person!"* message
- Option to relive the experience

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 7](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion 12](https://www.framer.com/motion/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icons (Hearts, Sparkles) |
| [React Confetti](https://github.com/alampros/react-confetti) | Celebration confetti effect |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/valentine.git
cd valentine

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 📁 Project Structure

```
valentine/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx       # Main proposal landing screen
│   │   ├── WizardQuestion.jsx    # Interactive question wizard
│   │   ├── CelebrationPage.jsx   # Confetti celebration finale
│   │   ├── ShakeButton.jsx       # "No" button that shakes
│   │   ├── FloatingHearts.jsx    # Animated floating hearts
│   │   ├── StarField.jsx         # Twinkling star background
│   │   └── ProgressBar.jsx       # Wizard progress indicator
│   ├── App.jsx          # Main app with screen routing
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles & design tokens
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

---

## 🎨 Design Details

- **Color Palette:** Deep rose (#FF1744), pink (#FF4081), gold (#FFD700), and rich dark backgrounds
- **Fonts:** Pacifico, Great Vibes, Dancing Script, Poppins, Outfit (via Google Fonts)
- **Effects:** Glassmorphism cards, neon text glow, ambient orbs, pulse animations
- **Theme:** Romantic night-sky aesthetic ✨

---

## 📜 License

This project is made with ❤️ — feel free to fork it and personalize it for your special someone!

---

> *"Made with ❤️ just for you"*

import { useState, useEffect } from "react";
import "./WelcomeMessage.css";
import "./colors.css";

const messages = [
  "Welcome, traveler. You've stumbled upon my workshop of curiosities — a collection of applications forged from brass and shadow, inspired by Victorian elegance, steampunk machinery, and gothic mystery. Built first for my own amusement, I now open the doors to you. May they serve you well.",

  "Ah, you've found my peculiar little corner of the aether! Here I tinker away, crafting apps wound with gears, draped in fog, and haunted by just the right amount of gothic charm. I made them for myself, but what good is a contraption if it can't bring others a bit of dark delight?",

  "Welcome to the workshop. I build apps powered by steam, shadow, and a touch of the macabre. Originally crafted for my own use — now yours to explore.",

  "Step inside. Within these walls, I craft curious applications — part Victorian invention, part gothic dream, all steampunk heart. They were born from my own need, but perhaps they'll find a home with you as well.",

  "Greetings, kindred spirit. You've discovered my fog-laden workshop where I craft apps steeped in brass, mystery, and a love for all things beautifully eerie. I built them for myself first, but I'd be delighted to share them with fellow souls who wander the darker side of design.",
];

function WelcomeMessage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={`welcome-message ${fade ? "fade-in" : "fade-out"}`}>
      {messages[currentIndex]}
    </p>
  );
}

export default WelcomeMessage;

import { useState, useEffect } from "react";
import "./WelcomeMessage.css";
import "./colors.css";

const messages = [
  "Darkly delightful apps, forged in a laboratory by one mad scientist and an unreasonable number of bats.",

  "Everyday apps with a haunted heart. Built by moonlight, powered by gears, guarded by bats.",

  "Spooky little apps for ordinary life. Assembled from copper, chaos, and questionable amounts of caffeine.",

  "Where modern machinery meets  mischief. Apps that work in daylight but come alive after dark.",

  "Handcrafted gothic apps. Every gear turned, every bat placed, with unsettling amounts of love.",

  "Practical apps in impractical costumes. The laboratory never closes.",

  "Apps stitched together from moonlight, brass, and bad ideas that turned out great.",

  "We make the apps other laboratories are afraid to. Mostly because of the bats.",

  "Beautiful, strange, and surprisingly useful. Apps from a workshop where the gears whisper.",

  "One laboratory. Too many bats. Maybe a dragon? Apps with souls (ethically sourced).",
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
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={`welcome-message ${fade ? "fade-in" : "fade-out"}`}>
      {messages[currentIndex]}
    </p>
  );
}

export default WelcomeMessage;

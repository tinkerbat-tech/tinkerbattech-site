import { useState, useEffect } from "react";
import "./colors.css";
import "./QuoteBanner.css";

const quotes = [
  {
    text: "We are all broken. That's how the light gets in.",
    author: "Ernest Hemingway",
  },
  {
    text: "There is no exquisite beauty without some strangeness in the proportion.",
    author: "Edgar Allan Poe",
  },
  {
    text: "One need not be a chamber to be haunted.",
    author: "Emily Dickinson",
  },
  {
    text: "I have loved the stars too fondly to be fearful of the night.",
    author: "Sarah Williams",
  },
  {
    text: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
    author: "H.P. Lovecraft",
  },
  {
    text: "Beware; for I am fearless, and therefore powerful.",
    author: "Mary Shelley",
  },
  {
    text: "It is not light that we need, but fire.",
    author: "Frederick Douglass",
  },
  {
    text: "Even the darkest night will end and the sun will rise.",
    author: "Victor Hugo",
  },
];

function QuoteBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-banner">
      <div className={`quote-content ${fade ? "fade-in" : "fade-out"}`}>
        <p className="quote-text">"{quotes[currentIndex].text}"</p>
        <p className="quote-author">— {quotes[currentIndex].author}</p>
      </div>
    </div>
  );
}

export default QuoteBanner;

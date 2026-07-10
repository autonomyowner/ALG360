"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 100,
  className = "",
  onComplete,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      {index < text.length && <span className="inline-block w-1 h-8 bg-current animate-blink ml-1 align-bottom" />}
      {index >= text.length && showCursor && <span className="inline-block w-1 h-8 bg-current animate-blink ml-1 align-bottom" />}
    </span>
  );
}
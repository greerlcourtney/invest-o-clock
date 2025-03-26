import React from "react";

const newsItems = [
  "Former Cruise CEO Vogt's robotics startup valued at $2 billion in new funding",
  "Tech funding news for today, March 24, 2025",
  "25 Fastest Growing Companies & Startups (2025)",
];

export const NewsTicker = () => {
  return (
    <div className="bg-matrix-dark border-y border-matrix-green/30 overflow-hidden py-2">
      <div className="animate-ticker whitespace-nowrap">
        {newsItems.map((item, index) => (
          <span key={index} className="inline-block mx-8 text-matrix-green font-mono">
            {item} • 
          </span>
        ))}
      </div>
    </div>
  );
};
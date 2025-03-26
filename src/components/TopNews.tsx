import React from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
export const TopNews = () => {
  // This would be replaced with actual data from your database
  const newsArticles = [
    {
      headline: "Former Cruise CEO Vogt's robotics startup valued at $2 billion in new funding",
      summary: "Kyle Vogt, ex-CEO of Cruise, has raised $150 million for his robotics startup The Bot Company, focusing on household robots for everyday chores.",
      link: "https://www.reuters.com/technology/former-cruise-ceo-vogts-robotics-startup-valued-2-billion-new-funding-sources-2025-03-21/",
      source: "Reuters",
    },
    {
      headline: "Tech funding news for today, March 24, 2025",
      summary: "Multiple startups secure funding including The Bot Company's $150M, SkySpecs' $20M for wind energy, and a stealth cybersecurity startup raising $55M.",
      link: "https://techstartups.com/2025/03/24/tech-funding-news-today-march-24-2025/",
      source: "TechStartups.com",
    },
    {
      headline: "25 Fastest Growing Companies & Startups (2025)",
      summary: "Comprehensive analysis of rapidly growing companies in 2025, featuring ZeroTier, Deepgram, Scale AI, and Cradlewise with insights on growth and funding.",
      link: "https://explodingtopics.com/blog/fast-growing-companies",
      source: "Exploding Topics",
    },
  ];
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h2 className="text-2xl font-mono text-matrix-green mb-6">In the News</h2>
      <div className="space-y-4">
        {newsArticles.map((article, index) => (
          <div key={index} className="border-b border-matrix-green/30 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-matrix-green hover:brightness-125 transition-all">
                {article.headline}
              </h3>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-matrix-green hover:brightness-125 transition-all"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-white/80 text-sm mb-2">{article.summary}</p>
            <span className="text-matrix-green/60 text-xs">{article.source}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
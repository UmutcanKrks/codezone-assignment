"use client";

import React from "react";
import { TrendBox, type TrendItem } from "./common/trend-box";
import { cn } from "@/lib/utils";
import SkewButton from "./common/skew-button";

interface TrendsSectionProps {
  className?: string;
  title?: string;
  viewAllText?: string;
  trends?: TrendItem[];
}

// Mock data - replace with actual data source
const mockTrends: TrendItem[] = [
  {
    id: "1",
    number: "01",
    author: {
      name: "Jonathan Stewart",
      avatar: "/images/avatars/jon.png",
    },
    title:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa mi.",
    readMoreText: "Daha Fazla Oku",
  },
  {
    id: "2",
    number: "02",
    author: {
      name: "Steve Rogerson",
      avatar: "/images/avatars/steve.png",
    },
    title:
      "Praesent lorem orci, mattis non efficitur id curabitur at risus sodales aenean at.",
    readMoreText: "Daha Fazla Oku",
  },
  {
    id: "3",
    number: "03",
    author: {
      name: "Ismail Kor",
      avatar: "/images/avatars/ismail.png",
    },
    title:
      "Ultrices dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus.",
    readMoreText: "Daha Fazla Oku",
  },
  {
    id: "4",
    number: "04",
    author: {
      name: "Jonathan Stewart",
      avatar: "/images/avatars/jon.png",
    },
    title:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa mi.",
    readMoreText: "Daha Fazla Oku",
  },
  {
    id: "5",
    number: "05",
    author: {
      name: "Steve Rogerson",
      avatar: "/images/avatars/steve.png",
    },
    title:
      "Praesent lorem orci, mattis non efficitur id curabitur at risus sodales aenean at.",
    readMoreText: "Daha Fazla Oku",
  },
  {
    id: "6",
    number: "06",
    author: {
      name: "Ismail Kor",
      avatar: "/images/avatars/ismail.png",
    },
    title:
      "Ultrices dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus.",
    readMoreText: "Daha Fazla Oku",
  },
];

const TrendsSection: React.FC<TrendsSectionProps> = ({
  className,
  title = "TRENDLER",
  viewAllText = "Tümünü Gör",
  trends = mockTrends,
}) => {
  return (
    <section className={cn("py-16 px-4 bg-[#121212]", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-white text-3xl font-bold font-saira-condensed uppercase tracking-wider">
              {title}
            </h2>
            {/* Trending Icon */}
            <div className="text-[#f0e74d]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trends.map((trend) => (
            <TrendBox key={trend.id} item={trend} className="h-full" />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <SkewButton className="bg-rapkology-white text-rapkology-black">
            {viewAllText}
          </SkewButton>
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;

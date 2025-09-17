"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TrendBox, TrendItem } from "../common/trend-box";
import { cn } from "../../lib/utils";

type ViewMode = "single" | "dual";

// Sample data for demonstration - this would typically come from props or API
const sampleExploreItems: TrendItem[] = [
  {
    id: "explore-1",
    number: "01",
    author: {
      name: "Jonathan Stewart",
      avatar: "/images/explore/explore-1.jpg"
    },
    title: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI. MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    readMoreText: "Daha Fazla Oku",
    image: "/images/explore/explore-1.jpg",
    date: "29 Mart 2022"
  },
  {
    id: "explore-2",
    number: "02",
    author: {
      name: "Jonathan Stewart",
      avatar: "/images/explore/explore-2.jpg"
    },
    title: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI. MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    readMoreText: "Daha Fazla Oku",
    image: "/images/explore/explore-2.jpg",
    date: "29 Mart 2022"
  },
  {
    id: "explore-3",
    number: "03",
    author: {
      name: "Jonathan Stewart",
      avatar: "/images/explore/explore-3.jpg"
    },
    title: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI. MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...",
    readMoreText: "Daha Fazla Oku",
    image: "/images/explore/explore-3.jpg",
    date: "29 Mart 2022"
  }
];

interface ExploreMainProps {
  items?: TrendItem[];
  className?: string;
}

export const ExploreMain: React.FC<ExploreMainProps> = ({
  items = sampleExploreItems,
  className
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>("single");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search query:", searchQuery);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={cn("w-full", className)}>
      {/* Header with interactive controls */}
      <div className="flex items-center justify-between mb-8 ">
        <h1 className="text-white text-6xl font-bold font-saira-condensed uppercase">
          KEŞFET
        </h1>
        
        {/* Interactive controls positioned at top right */}
        <div className="flex items-center gap-4">
          {/* Search functionality */}
          <div className="flex items-center gap-2">
            
            <button
              onClick={handleSearch}
              className="p-2 hover:bg-gray-800 rounded transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Image
                src="/common/search.svg"
                alt="Search"
                width={20}
                height={20}
                className=""
              />
            </button>
          </div>

          {/* View mode toggles */}
          <div className="flex items-center gap-2 overflow-hidden">
            <button
              onClick={() => handleViewModeChange("single")}
              className={cn(
                "p-2 transition-colors",
                viewMode === "single" 
                  ? "bg-[#3B3B3B] text-black cursor-pointer" 
                  : "bg-transparent text-white hover:bg-gray-800"
              )}
              aria-label="Single row view"
            >
              <Image
                src="/common/list-duo.svg"
                alt="Single row view"
                width={20}
                height={20}
                className=""
              />
            </button>
            <button
              onClick={() => handleViewModeChange("dual")}
              className={cn(
                "p-2 transition-colors cursor-pointer",
                viewMode === "dual" 
                  ? "bg-[#3B3B3B] text-black" 
                  : "bg-transparent text-white hover:bg-gray-800"
              )}
              aria-label="Dual row view"
            >
              <Image
                src="/common/list-single.svg"
                alt="Dual row view"
                width={20}
                height={20}
                className=""
              />
            </button>
          </div>
        </div>
      </div>

      {/* Content area with responsive grid based on view mode */}
      <div className={cn(
        "grid gap-6",
        viewMode === "single" 
          ? "grid-cols-1" 
          : "grid-cols-1 md:grid-cols-2"
      )}>
        {filteredItems.map((item) => (
          <TrendBox
            key={item.id}
            item={item}
            variant="explore"
            layout={viewMode === "dual" ? "vertical" : "horizontal"}
            className=""
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            Arama kriterlerinize uygun sonuç bulunamadı.
          </p>
        </div>
      )}
    </div>
  );
};

export default ExploreMain;
"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { TrendBox, TrendItem } from "../common/trend-box";
import { cn } from "../../lib/utils";
import exploreData from "../../data/data.json";

type ViewMode = "single" | "dual";

// Transform data from JSON to TrendItem format
const transformDataToTrendItems = (): TrendItem[] => {
  return exploreData.map((item, index) => {
    // Format date from ISO string to readable format
    const date = new Date(item.createdAt);
    const formattedDate = date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    return {
      id: item._id,
      number: String(index + 1).padStart(2, '0'),
      author: {
        name: item.attributes.authors[0] || "Rapkology",
        avatar: item.attributes.img
      },
      title: item.attributes.title.toUpperCase(),
      readMoreText: "Daha Fazla Oku",
      image: item.attributes.img,
      date: formattedDate,
      description: item.attributes.desc
    };
  });
};

interface ExploreMainProps {
  items?: TrendItem[];
  className?: string;
}

export const ExploreMain: React.FC<ExploreMainProps> = ({
  items = transformDataToTrendItems(),
  className
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>("single");
  const [searchQuery, setSearchQuery] = useState("");
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 3;

  // Filter items based on search query (memoized to prevent infinite loops)
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  // Calculate displayed items based on current page
  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, currentPage * ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  // Check if there are more items to load
  const hasMore = displayedItems.length < filteredItems.length;

  // Load more items function
  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsLoading(false);
    }, 800); // 800ms loading delay
  }, [isLoading, hasMore]);

  // Reset pagination when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreItems();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMoreItems, hasMore, isLoading]);

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search query:", searchQuery);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Header with interactive controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-8 gap-4 lg:gap-0">
        <h1 className="text-white text-3xl lg:text-6xl font-bold font-saira-condensed uppercase">
          KEŞFET
        </h1>
        
        {/* Interactive controls */}
        <div className="flex items-center gap-3 lg:gap-4">
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
                width={18}
                height={18}
                className="lg:w-[20px] lg:h-[20px]"
              />
            </button>
          </div>

          {/* View mode toggles */}
          <div className="flex items-center gap-1 lg:gap-2 overflow-hidden">
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
                width={18}
                height={18}
                className="lg:w-[20px] lg:h-[20px]"
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
                width={18}
                height={18}
                className="lg:w-[20px] lg:h-[20px]"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Content area with responsive grid based on view mode */}
      <div className={cn(
        "grid gap-4 lg:gap-6",
        viewMode === "single" 
          ? "grid-cols-1" 
          : "grid-cols-1 lg:grid-cols-2"
      )}>
        {displayedItems.map((item) => (
          <TrendBox
            key={item.id}
            item={item}
            variant="explore"
            layout={viewMode === "dual" ? "vertical" : "horizontal"}
            className=""
          />
        ))}
      </div>

      {/* Loading spinner */}
      {isLoading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}

      {/* Scroll trigger element */}
      {hasMore && !isLoading && (
        <div ref={observerRef} className="h-4 w-full" />
      )}

      {/* End of content message */}
      {!hasMore && displayedItems.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400 text-sm">
            Tüm içerikler yüklendi
          </p>
        </div>
      )}

      {/* Empty state */}
      {displayedItems.length === 0 && !isLoading && (
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
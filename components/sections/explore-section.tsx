"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ExploreCategories from "@/components/explore/explore-categories";
import ExploreMain from "@/components/explore/explore-main";
import Footer from "@/components/layout/footer";

interface ExploreSectionProps {
  className?: string;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ className }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategories((prev) => {
      const isSelected = prev.includes(categoryId);
      if (isSelected) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  return (
    <section
      className={cn("w-full bg-rapkology-black py-8 lg:py-16", className)}
    >
      <div className="max-w-sm sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 lg:px-0 overflow-hidden">
        {/* Mobile Layout: Categories at top, then main content */}
        <div className="lg:hidden">
          {/* Categories Section - Mobile: Horizontal at top */}
          <div className="mb-8">
            <ExploreCategories
              selectedCategories={selectedCategories}
              onCategorySelect={handleCategorySelect}
              className="w-full"
            />
          </div>

          {/* Main Content Section - Mobile: Below categories */}
          <div className="mb-8">
            <ExploreMain
              className="w-full"
              selectedCategories={selectedCategories}
            />
          </div>

          {/* Footer - Mobile: At bottom */}
          <Footer />
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Main Content Section - Desktop: Left side */}
          <div className="lg:col-span-7">
            <ExploreMain
              className="w-full"
              selectedCategories={selectedCategories}
            />
          </div>

          {/* Categories Section - Desktop: Right side */}
          <div className="col-start-9 col-end-13">
            <ExploreCategories
              selectedCategories={selectedCategories}
              onCategorySelect={handleCategorySelect}
              className="sticky top-8"
            />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;

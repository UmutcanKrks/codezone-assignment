"use client";

import React, { useState } from "react";
import { cn } from "../lib/utils";
import ExploreCategories from "./explore/explore-categories";
import ExploreMain from "./explore/explore-main";
import Footer from "./layout/footer";

interface ExploreSectionProps {
  className?: string;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ className }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(categoryId);
      if (isSelected) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  return (
    <section className={cn("w-full bg-rapkology-black py-16", className)}>
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Section - Left side in the image */}
          <div className="lg:col-span-6 px-6">
            <ExploreMain 
              className="w-full"
            />
          </div>
          {/* Categories Section - Right side in the image */}
          <div className="col-start-9 col-end-13">
            <ExploreCategories 
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
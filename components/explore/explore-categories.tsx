"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface Category {
  id: string;
  label: string;
  isActive?: boolean;
}

const defaultCategories: Category[] = [
  { id: "turk-rap", label: "Türk Rap" },
  { id: "yabanci-rap", label: "Yabancı Rap", isActive: true },
  { id: "rap-haberleri", label: "Rap Haberleri" },
  { id: "haftanin-klipleri", label: "Haftanın Klipleri" },
  { id: "ayin-klipleri", label: "Ayın Klipleri" },
  { id: "rap-sohbetleri", label: "Rap Sohbetleri" },
  { id: "rap-musabakalari", label: "Rap Müsabakaları" }
];

interface ExploreCategoriesProps {
  categories?: Category[];
  selectedCategories?: string[];
  onCategorySelect?: (categoryId: string) => void;
  className?: string;
  title?: string;
}

export const ExploreCategories: React.FC<ExploreCategoriesProps> = ({
  categories = defaultCategories,
  selectedCategories = [],
  onCategorySelect,
  className,
  title = "NE GÖRMEK İSTERSİN?"
}) => {
  const handleCategoryClick = (categoryId: string) => {
    // Call the callback if provided
    onCategorySelect?.(categoryId);
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Title */}
      <h2 className="text-white text-2xl lg:text-[40px] font-bold font-saira-condensed uppercase mb-4 lg:mb-6 tracking-wide">
        {title}
      </h2>
      
      {/* Category Buttons */}
      <div className="lg:flex lg:flex-wrap lg:gap-3">
        {/* Mobile: Horizontal scrollable row */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 pb-2 min-w-max">
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category.id);
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium font-saira transition-all duration-200 border border-transparent cursor-pointer whitespace-nowrap flex-shrink-0",
                    "hover:scale-105 hover:shadow-lg",
                    "focus:outline-none focus:ring-2 focus:ring-rapkology-yellow focus:ring-opacity-50",
                    isSelected
                      ? "bg-rapkology-yellow text-black border-rapkology-yellow shadow-md"
                      : "bg-transparent text-white border-gray-600 hover:border-gray-400 hover:bg-gray-800"
                  )}
                  aria-pressed={isSelected}
                  role="button"
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop: Wrapped layout */}
        <div className="hidden lg:flex lg:flex-wrap lg:gap-3">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.id);
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={cn(
                  "px-6 py-2 text-sm font-medium font-saira transition-all duration-200 border border-transparent cursor-pointer whitespace-nowrap",
                  "hover:scale-105 hover:shadow-lg",
                  "focus:outline-none focus:ring-2 focus:ring-rapkology-yellow focus:ring-opacity-50",
                  isSelected
                    ? "bg-rapkology-yellow text-black border-rapkology-yellow shadow-md"
                    : "bg-transparent text-white border-gray-600 hover:border-gray-400 hover:bg-gray-800"
                )}
                aria-pressed={isSelected}
                role="button"
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
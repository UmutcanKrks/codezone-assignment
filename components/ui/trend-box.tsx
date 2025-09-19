import React from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";

export interface TrendItem {
  id: string;
  number: string;
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  readMoreText?: string;
  // Properties for explore variant
  image?: string;
  date?: string;
  description?: string;
}

interface TrendBoxProps {
  item: TrendItem;
  className?: string;
  variant?: "default" | "compact" | "explore";
  layout?: "horizontal" | "vertical"; // For explore variant dual mode
}

export const TrendBox: React.FC<TrendBoxProps> = ({
  item,
  className,
  variant = "default",
  layout = "horizontal",
}) => {
  if (variant === "explore") {
    // Vertical layout for dual mode
    if (layout === "vertical") {
      return (
        <div
          className={cn(
            "relative bg-rapkology-black p-3 lg:p-4 transition-all duration-300 flex flex-col",
            className
          )}
        >
          {/* Image on top */}
          {item.image && (
            <div className="relative w-full h-40 lg:h-48 mb-3 lg:mb-4 overflow-hidden ">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
             
            </div>
          )}

          {/* Date */}
          {item.date && (
            <div className="text-[#888] text-xs lg:text-sm font-saira mb-2">
              {item.date}
            </div>
          )}

          {/* Title */}
          <h3 className="mb-2 lg:mb-3 font-saira-condensed font-bold text-base lg:text-lg leading-tight uppercase text-rapkology-white">
            {item.title}
          </h3>

          {/* Description text */}
          {item.description && (
            <p className="text-gray-300 text-xs lg:text-sm font-saira mb-3 lg:mb-4 line-clamp-3">
              {item.description}
            </p>
          )}

          {/* Divider line */}
          <div className="h-px bg-[#3b3b3b] mb-2 lg:mb-3"></div>

          {/* Read More Link */}
          <div>
            <span className="text-rapkology-white text-xs lg:text-sm font-saira cursor-pointer">
              Devamını Oku
            </span>
          </div>
        </div>
      );
    }

    // Horizontal layout (default for single mode)
    return (
      <div
        className={cn(
          "relative bg-rapkology-black py-3 lg:py-4 transition-all duration-300",
          // Mobile: Stack vertically, Desktop: Side by side
          "flex flex-col lg:flex-row gap-3 lg:gap-4",
          className
        )}
      >
        {/* Image and Date Section */}
        <div className="flex-shrink-0">
          {item.image && (
            <div className="relative w-full lg:w-80 h-50 lg:h-45 mb-2 overflow-hidden bg-gray-900">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain bg-rapkology-black"
              />
            </div>
          )}
          {item.date && (
            <div className="text-[#888] text-xs lg:text-sm font-saira">
              {item.date}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1">
          {/* Author Info */}
          <div className="flex items-center gap-2 mb-2 lg:mb-3">
            <div className="relative w-5 h-5 lg:w-6 lg:h-6 rounded-lg overflow-hidden">
              <Image
                src={item.author.avatar}
                alt={item.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-saira font-normal text-sm lg:text-[16px] leading-[120%] tracking-[0.015em] text-rapkology-white">
              {item.author.name}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 lg:mb-3 font-saira-condensed font-bold text-lg lg:text-[25px] leading-[104%] uppercase text-rapkology-white tracking-[0]">
            {item.title}
          </h3>

          {/* Divider line */}
          <div className="h-px bg-[#3b3b3b] mb-2 lg:mb-3"></div>

          {/* Read More Link */}
          <div>
            <span className="block text-rapkology-white opacity-100 text-xs lg:text-sm font-saira cursor-pointer">
              {item.readMoreText || "Daha Fazla Oku"}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative bg-rapkology-black px-6 py-4 transition-all duration-300",
        variant === "compact" && "p-4",
        className
      )}
    >
      {/* Trend Number */}
      <div className="absolute top-0 left-0">
        <span className="text-[2.5rem] font-bold text-[#2a2a2a] font-saira-condensed">
          {item.number}
        </span>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-2 mb-3 ml-[50px]">
        <div className="relative w-6 h-6 rounded-lg overflow-hidden">
          <Image
            src={item.author.avatar}
            alt={item.author.name}
            fill
            className="object-cover"
          />
        </div>
        <span className="font-saira font-normal text-[16px] leading-[120%] tracking-[0.015em] text-rapkology-white">
          {item.author.name}
        </span>
      </div>

      {/* Title */}
      <h3 className="ml-[50px] mb-3 font-saira-condensed font-bold text-[25px] leading-[104%] uppercase text-rapkology-white tracking-[0]">
        {item.title}
      </h3>

      {/* Divider line */}
      <div className="h-px bg-[#3b3b3b] ml-[50px] mr-6 mb-3"></div>

      {/* Read More Link */}
      <div className="ml-[50px]">
        <span className="block w-[128.16px] h-[17px] text-rapkology-white opacity-100 text-sm font-saira cursor-pointer">
          {item.readMoreText || "Daha Fazla Oku"}
        </span>
      </div>
    </div>
  );
};

export default TrendBox;

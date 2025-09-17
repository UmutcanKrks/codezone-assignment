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
            "relative bg-rapkology-black p-4 transition-all duration-300 flex flex-col",
            className
          )}
        >
          {/* Image on top */}
          {item.image && (
            <div className="relative w-full h-48 mb-4 overflow-hidden border-4 border-rapkology-yellow">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              {/* Rapkology logo overlay */}
              <div className="absolute top-2 left-2">
                <Image
                  src="/logos/rapkology-logo.png"
                  alt="Rapkology"
                  width={80}
                  height={20}
                  className="filter brightness-0 invert"
                />
              </div>
            </div>
          )}

          {/* Date */}
          {item.date && (
            <div className="text-[#888] text-sm font-saira mb-2">
              {item.date}
            </div>
          )}

          {/* Title */}
          <h3 className="mb-3 font-saira-condensed font-bold text-lg leading-tight uppercase text-rapkology-white">
            {item.title}
          </h3>

          {/* Description text */}
          <p className="text-gray-300 text-sm font-saira mb-4 line-clamp-3">
            "Bulamazsin", İngilizce ve Türkçe sözlerin harmanlandığı bir şarkı. Parça, karşılıksız sevgiye, güven kaybını ve yaşanan hayal kırıklıklarını...
          </p>

          {/* Divider line */}
          <div className="h-px bg-[#3b3b3b] mb-3"></div>

          {/* Read More Link */}
          <div>
            <span className="text-rapkology-white text-sm font-saira">
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
          "relative bg-rapkology-black  py-4 transition-all duration-300 flex gap-4",
          className
        )}
      >
        {/* Left side - Image and Date */}
        <div className="flex-shrink-0">
          {item.image && (
            <div className="relative w-70 h-45 mb-2 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover ml-1"
              />
            </div>
          )}
          {item.date && (
            <div className="text-[#888] text-sm font-saira">
              {item.date}
            </div>
          )}
        </div>

        {/* Right side - Content */}
        <div className="flex-1">
          {/* Author Info */}
          <div className="flex items-center gap-2 mb-3">
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
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
          <h3 className="mb-3 font-saira-condensed font-bold text-[25px] leading-[104%] uppercase text-rapkology-white tracking-[0]">
            {item.title}
          </h3>

          {/* Divider line */}
          <div className="h-px bg-[#3b3b3b] mb-3"></div>

          {/* Read More Link */}
          <div>
            <span className="block w-[128.16px] h-[17px] text-rapkology-white opacity-100 text-sm font-saira">
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
        <div className="relative w-6 h-6 rounded-full overflow-hidden">
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
        <span className="block w-[128.16px] h-[17px] text-rapkology-white opacity-100 text-sm font-saira">
          {item.readMoreText || "Daha Fazla Oku"}
        </span>
      </div>
    </div>
  );
};

export default TrendBox;

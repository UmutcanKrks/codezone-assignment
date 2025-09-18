import React from "react";

interface FavCoverProps {
  placement: number;
  coverPhoto: string;
  singer: string;
  songName: string;
}

export default function FavCover({ placement, coverPhoto, singer, songName }: FavCoverProps) {
  return (
    <div
      className="relative w-full overflow-hidden aspect-[5/6] md:aspect-[1/1] cursor-pointer group"
      style={{
        backgroundImage: "url('/images/month-favs/fav-cover-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="absolute top-8 -left-28 w-46 h-46 -rotate-12 overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out group-hover:left-9 group-hover:rotate-0 group-hover:scale-100">
          <img
            src={coverPhoto}
            alt={songName}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:rotate-0"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 rotate-10 flex items-center justify-center">
            <img
              src="/images/month-favs/play-button.svg"
              alt="Play"
              className="w-18 h-18 "
            />
          </div>
        </div>

        {/* Desktop Text Info */}
        <div className="ml-28 flex flex-col justify-center h-40 items-center text-center mt-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          <span className="text-xs font-semibold text-rapkology-white border-none rounded-xl px-2 py-1 bg-[#323232]">
            Top 10 ({placement}. Sıra)
          </span>
          <span className="font-saira text-xl font-normal text-rapkology-white mt-4">
            {singer}
          </span>
          <span className="text-xl font font-bold  text-rapkology-white ">
            {songName}
          </span>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-full">
        {/* Mobile Image - Centered */}
        <div className="flex items-start justify-center px-4 pt-10">
          <div className="w-36 h-36 sm:w-40 sm:h-40 overflow-hidden rounded-lg shadow-lg relative -rotate-12">
            <img
              src={coverPhoto}
              alt={songName}
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center mt-">
              <img
                src="/images/month-favs/play-button.svg"
                alt="Play"
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
            </div>
          </div>
        </div>

        {/* Mobile Text Info - Below Image */}
        <div className="flex flex-col items-center text-center pb-4 px-4 mt-6">
          <span className="text-xs font-semibold text-rapkology-white border-none rounded-xl px-2 py-1 bg-[#323232] mb-2">
            Top 10 ({placement}. Sıra)
          </span>
          <span><span className="font-saira text-lg font-normal text-rapkology-white">
            {singer}
          </span>
          <span className="text-lg font-normal text-rapkology-white mx-2">
            -
          </span>
          <span className="text-lg font-bold text-rapkology-white">
            {songName}
          </span></span>
          
        </div>
      </div>
    </div>
  );
}

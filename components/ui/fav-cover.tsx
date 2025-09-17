import React from "react";

export default function FavCover({ placement, coverPhoto, singer, songName }) {
  return (
    <div
      className="relative w-64 overflow-hidden aspect-[1/1] group cursor-pointer"
      style={{
        backgroundImage: "url('/images/month-favs/fav-cover-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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

      {/* Text Info */}
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
  );
}

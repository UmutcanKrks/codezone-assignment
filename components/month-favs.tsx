"use client"
import Image from "next/image";
import FavSwiper from "./ui/fav-swiper";

export default function MonthFavs() {
  const favorites = [
    {
      id: 1,
      placement: 2,
      singer: "50 CENT",
      songName: "CURTIS",
      coverPhoto: "/images/month-favs/50cent.png", // Using existing image as placeholder
      platform: "youtube"
    },
    {
      id: 2,
      placement: 3,
      singer: "SNOOP DOGG",
      songName: "ALGORITHM",
      coverPhoto: "/images/month-favs/snopp.png", // Using existing image as placeholder
      platform: "spotify"
    },
    {
      id: 3,
      placement: 4,
      singer: "EMINEM",
      songName: "RECOVERY",
      coverPhoto: "/images/month-favs/ceza.png", // Using existing image as placeholder
      platform: "youtube"
    },
    {
      id: 4,
      placement: 6,
      singer: "EMINEM",
      songName: "deneme",
      coverPhoto: "/images/month-favs/ceza.png", // Using existing image as placeholder
      platform: "youtube"
    }
  ];

  return (
    <section className="relative w-full bg-rapkology-black overflow-hidden min-h-[600px] py-4">
      {/* White diagonal shape in top-left */}

      {/* Platform Logos */}
      <div className="absolute top-8 right-8 flex items-center gap-4 z-10"></div>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="top-0 left-0 w-[80vw] max-w-128 aspect-[476/100] bg-white [clip-path:polygon(0%_0%,100%_0%,95%_70%,0%_100%)] z-10">
          <div className="flex pt-4 gap-10 p-8 justify-center">
            {/* YouTube Logo - Responsive with aspect ratio */}
            <div className="w-36 aspect-[140/50] relative">
              <Image
                src="/images/month-favs/youtube-logo.svg"
                alt="YouTube"
                fill
                className="opacity-90 object-contain"
              />
            </div>
            {/* Spotify Logo - Responsive with aspect ratio */}
            <div className="w-36 aspect-[140/50] relative">
              <Image
                src="/images/month-favs/spotify-logo.svg"
                alt="Spotify"
                fill
                className="opacity-90 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mx-auto xl:max-w-5xl">
          {/* Title */}
          <div className="xl:flex-1 text-center xl:text-left mb-8 xl:mb-0">
            <h2 className="text-white text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight font-saira-condensed">
              AYIN
              <br />
              <span className="text-rapkology-white">FAVORİLERİ</span>
            </h2>
          </div>

          {/* Favorites Cards Swiper */}
          <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-4xl flex items-center mx-auto justify-center xl:flex-1 xl:flex xl:justify-end xl:w-180 xl:translate-x-[12%] xl:translate-y-[-10%]">
            <FavSwiper favorites={favorites} />
          </div>
        </div>
      </div>
    </section>
  );
}

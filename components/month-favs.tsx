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
          <div className="flex gap-8 px-20 pt-6">
            <Image
              src="/images/month-favs/youtube-logo.svg"
              alt="YouTube"
              width={140}
              height={50}
              className="opacity-90"
            />
            <Image
              src="/images/month-favs/spotify-logo.svg"
              alt="Spotify"
              width={140}
              height={50}
              className="opacity-90"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Left Side - Title */}
          <div className="flex-1">
            <h2 className=" text-white text-6xl font-bold leading-tight font-saira-condensed">
              AYIN
              <br />
              <span className="text-rapkology-white">FAVORİLERİ</span>
            </h2>
          </div>

          {/* Right Side - Favorites Cards Swiper */}
          <div className="flex-1 flex justify-end w-180 translate-y-[-10%]">
            <FavSwiper favorites={favorites} />
          </div>
        </div>
      </div>
    </section>
  );
}

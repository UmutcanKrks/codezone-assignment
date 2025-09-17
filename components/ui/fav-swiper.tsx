"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import FavCover from './fav-cover';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface FavoriteItem {
  id: number;
  placement: number;
  singer: string;
  songName: string;
  coverPhoto: string;
  platform: string;
}

interface FavSwiperProps {
  favorites: FavoriteItem[];
}

export default function FavSwiper({ favorites }: FavSwiperProps) {
  return (
    <>
      <div className="w-full max-w-5xl relative">
        <Swiper
          modules={[Pagination, Autoplay, Scrollbar]}
          slidesPerView="2.5"
          spaceBetween={50}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          scrollbar={{
            el: '.swiper-scrollbar-custom',
            draggable: true,
            dragSize: 'auto',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          
          className="favorites-swiper"
        >
          {favorites.map((item) => (
            <SwiperSlide key={item.id}>
              <FavCover
                placement={item.placement}
                coverPhoto={item.coverPhoto}
                singer={item.singer}
                songName={item.songName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        

        {/* Custom Scrollbar */}
        <div className="swiper-scrollbar-custom mt-6 h-1 bg-[#2a2a2a] rounded-full relative overflow-hidden"></div>
        
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .favorites-swiper .swiper-slide {
          transition: transform 0.3s ease;
        }
        
        .favorites-swiper .swiper-slide-active {
          transform: scale(1.02);
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }
        
        .swiper-scrollbar-custom {
          position: relative !important;
          background: #2a2a2a !important;
          height: 8px !important;
          border-radius: 9999px !important;
        }
        
        .swiper-scrollbar-custom .swiper-scrollbar-drag {
          background: #f0e74d !important;
          border-radius: 9999px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          height: 100% !important;
        }
        
        .swiper-scrollbar-custom .swiper-scrollbar-drag:hover {
          background: #f0e74d !important;
          opacity: 0.8 !important;
        }
        
        @media (max-width: 768px) {
          .favorites-swiper {
            padding: 0 10px;
          }
        }
      `}</style>
    </>
  );
}

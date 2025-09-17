"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import SkewButton from "./common/skew-button";
import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  id: number;
  image: string;
  title: any;
  text: string;
  buttonText: string;
  className: string;
  textColor: string;
}

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: "/images/hero/hero-1.png",
      title: (
        <>
          {" "}
          DÜNYA RAP <br /> TRENDLERİNİ <br /> KONUŞUYORUZ.{" "}
        </>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      buttonText: "Devamını Oku",
      className: "object-cover scale-100 -mt-8 bg-rapkology-black",
      textColor: "text-rapkology-black",
    },
    {
      id: 2,
      image: "/images/hero/hero-2.png",
      title: (
        <>
          TÜRKÇE RAP VE
          <br />
          DÜNYA MÜZİK
          <br />
          HABERLERİNİ TAKİP ET
        </>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      buttonText: "Devamını Oku",
      className:
        "object-contain object-left object-bottom scale-[1.4] translate-x-[-10%] translate-y-[10%] bg-rapkology-black",
      textColor: "text-rapkology-white",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full aspect-[16/9] flex items-center overflow-hidden min-h-[600px] max-h-[90vh]">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                className={slide.className}
              />
              <div className="absolute inset-0 z-10">
                <Image
                  src="images/hero/metal-bg.png"
                  alt="Metal texture"
                  fill
                  className="object-cover opacity-20 mix-blend-multiply"
                />
              </div>
              {/* Content */}
              <div className="font-saira-condensed relative container z-10 mx-auto flex flex-col items-end text-left ">
                <div className="items-end max-w-xl ">
                  <div className={`items-end max-w-2xl ${slide.textColor}`}>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg mb-10">{slide.text}</p>
                  </div>
                  <SkewButton className="bg-rapkology-yellow text-rapkology-black">{slide.buttonText}</SkewButton>

                  <div className="flex justify-start items-center ml-2 mt-16 space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                        className={`rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "w-3 h-3 bg-rapkology-yellow"
                            : "w-2 h-2 bg-gray-800"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <Image
            src="/common/left-arrow.svg"
            alt="Previous"
            width={26}
            height={27}
            className="w-6 h-6 group-hover:scale-110 transition-transform"
          />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
          aria-label="Next slide"
        >
          <Image
            src="/common/right-arrow.svg"
            alt="Next"
            width={26}
            height={27}
            className="w-6 h-6 group-hover:scale-110 transition-transform"
          />
        </button>
      </div>

      {/* Vector at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Image
          src="/images/hero/hero-vector.svg"
          alt="Hero vector"
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

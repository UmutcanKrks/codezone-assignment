import React from "react";
import Image from "next/image";

const TwitchSection = () => {
  return (
    <section className="relative w-full bg-rapkology-black overflow-hidden min-h-[600px] flex items-center py-24">
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-center justify-between py-12">
        {/* Left Person */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] xl:w-[420px] xl:h-[550px]">
            <Image
              src="/images/twitch/twitch-1.png"
              alt="Twitch streamer 1"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Center Content */}
<div className="absolute top-0 left-0 right-0 flex flex-col items-center text-center px-4 lg:px-8 max-w-md mx-auto">
          {/* Twitch Logo */}
          <span className="flex items-center justify-center">
            <Image
              src="/images/twitch/twitch-logo.png"
              alt="Twitch logo"
              width={250}
              height={120}
              className=""
            /> 
            <div className="rotate-356 text-start">
              <div className="absolute h-[160px] w-px -ml-5 bg-[#3B3B3B]"></div>
              <h2 className="font-saira-condensed text-rapkology-white text-[68.24px] font-light leading-[89%] mb-1">
                HER HAFTA
              </h2>
              <h2 className="font-saira-condensed text-rapkology-yellow text-[68.24px] font-bold leading-[89%] mb-3">
                CANLIDAYIZ!
              </h2>

              {/* Subtitle */}
              <p className="font-saira text-rapkology-white text-base font-bold leading-[104%] tracking-[1.5%] ml-1 mb-6">
                Bizi Takip Edin!
              </p>
            </div>
          </span>

          {/* Action Buttons */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/twitch/takip-abone.png"
              alt="Takip ve Abone ol"
              width={280}
              height={70}
              className="h-auto w-auto max-w-[280px]"
            />
          </div>
        </div>

        {/* Right Person */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] xl:w-[420px] xl:h-[550px]">
            <Image
              src="/images/twitch/twitch-2.png"
              alt="Twitch streamer 2"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Vector at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Image
          src="/images/twitch/bg.png"
          alt="Background vector"
          width={1920}
          height={100}
  className="w-full h-auto translate-y-[5%]  transform -scale-x-100 opacity-50"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <Image
          src="/images/twitch/vector.png"
          alt="Background vector"
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default TwitchSection;

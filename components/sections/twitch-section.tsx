import React from "react";
import Image from "next/image";

const TwitchSection = () => {
  return (
    <section className="relative w-full bg-rapkology-black overflow-hidden min-h-[500px] sm:min-h-[800px] flex items-center pt-12 sm:py-24">
      {/* Desktop Layout */}
      <div className="hidden sm:block relative z-10 w-full max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-12">
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
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] xl:w-[420px] xl:h-[560px]">
              <Image
                src="/images/twitch/twitch-2.png"
                alt="Twitch streamer 2"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block sm:hidden relative z-10 w-full px-4 sm:py-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Top Section: Twitch Logo and Text */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center">
              <Image
                src="/images/twitch/twitch-logo.png"
                alt="Twitch logo"
                width={160}
                height={60}
                className="mr-2"
              />
              <div className="text-start rotate-356">
                <div className="absolute h-22 w-px -ml-5 bg-[#3B3B3B]"></div>

                <h2 className="font-saira-condensed text-rapkology-white text-[32px] font-light leading-[89%] mb-1">
                  HER HAFTA
                </h2>
                <h2 className="font-saira-condensed text-rapkology-yellow text-[32px] font-bold leading-[89%] mb-2">
                  CANLIDAYIZ!
                </h2>
                <p className="font-saira text-rapkology-white text-xs font-bold leading-[104%] tracking-[1.5%]">
                  Bizi Takip Edin!
                </p>
              </div>
            </div>
          </div>

          {/* Middle Section: Action Buttons */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/twitch/takip-abone.png"
              alt="Takip ve Abone ol"
              width={120}
              height={40}
              className="h-auto w-auto max-w-[240px]"
            />
          </div>

          {/* Below Buttons: Two Person Elements */}
          <div className="flex items-end justify-center -space-x-16 -mt-16 translate-x-[4%] ">
            <div className="relative w-70 h-70">
              <Image
                src="/images/twitch/twitch-1.png"
                alt="Twitch streamer 1"
                fill
                className="object-contain object-bottom translate-y-[17%]"
              />
            </div>
            <div className="relative w-90 h-90 translate-y-[30%]">
              <Image
                src="/images/twitch/twitch-2.png"
                alt="Twitch streamer 2"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vector at bottom */}
      <div className="absolute bottom-0 left-0 right-0 ">
        <Image
          src="/images/twitch/bg.png"
          alt="Background vector"
          width={1920}
          height={100}
          className="hidden md:block w-full h-auto translate-y-[5%]  transform -scale-x-100 opacity-50 z-20"
        />
        <Image
          src="/images/twitch/bg-mobile.png"
          alt="Background vector"
          width={1920}
          height={300}
          className="block md:hidden h-full transform  z-10 opacity-90"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <Image
          src="/images/twitch/vector.png"
          alt="Background vector"
          width={1920}
          height={200}
          className="hidden md:block w-full h-auto"
        />
        <Image
          src="/images/twitch/vector-mobile.png"
          alt="Background vector"
          width={1920}
          height={400}
          className="block md:hidden w-full h-auto"
        />
      </div>
    </section>
  );
};

export default TwitchSection;


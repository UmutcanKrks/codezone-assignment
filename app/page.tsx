import Header from "../components/layout/header"
import HeroSwiper from "@/components/hero-swiper"
import TwitchSection from "@/components/twitch-section"

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSwiper />
      <TwitchSection />
    </div>
  )
}

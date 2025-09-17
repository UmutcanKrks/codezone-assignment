import Header from "../components/layout/header"
import HeroSwiper from "@/components/hero-swiper"
import TwitchSection from "@/components/twitch-section"
import TrendsSection from "@/components/trends-section"
import MonthFavs from "@/components/month-favs"
import ExploreSection from "@/components/explore-section"

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSwiper />
      <TwitchSection />
      <TrendsSection />
      <MonthFavs />
      <ExploreSection />
    </div>
  )
}

import dynamic from "next/dynamic"
import HeroSwiper from "@/components/hero-swiper"

// Dynamic imports for below-the-fold components
const TwitchSection = dynamic(() => import("@/components/twitch-section"), {
  loading: () => <div className="h-[500px] sm:h-[800px] bg-rapkology-black animate-pulse" />
})

const TrendsSection = dynamic(() => import("@/components/trends-section"), {
  loading: () => <div className="h-96 bg-[#121212] animate-pulse" />
})

const MonthFavs = dynamic(() => import("@/components/month-favs"), {
  loading: () => <div className="h-96 bg-rapkology-black animate-pulse" />
})

const ExploreSection = dynamic(() => import("@/components/explore-section"), {
  loading: () => <div className="h-96 bg-rapkology-black animate-pulse" />
})

export default function Home() {
  return (
    <div>
      <HeroSwiper />
      <TwitchSection />
      <TrendsSection />
      <MonthFavs />
      <ExploreSection />
    </div>
  )
}

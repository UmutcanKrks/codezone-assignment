import { TrendBox, TrendItem } from "../../components/common/trend-box";

const sampleExploreItem: TrendItem = {
  id: "explore-1",
  number: "01",
  author: {
    name: "Jonathan Stewart",
    avatar: "/images/avatars/avatar1.jpg"
  },
  title: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI",
  readMoreText: "Daha Fazla Oku",
  image: "/images/hero/hero1.jpg",
  date: "29 Mart 2022"
};

const sampleDefaultItem: TrendItem = {
  id: "default-1", 
  number: "02",
  author: {
    name: "Daha Fazla Oku",
    avatar: "/images/avatars/avatar2.jpg"
  },
  title: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI",
  readMoreText: "Daha Fazla Oku"
};

export default function TestExplorePage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-white text-3xl font-bold mb-8">TrendBox Component Test</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-white text-xl mb-4">Explore Variant (New)</h2>
            <TrendBox 
              item={sampleExploreItem} 
              variant="explore"
              className="border border-gray-600"
            />
          </div>
          
          <div>
            <h2 className="text-white text-xl mb-4">Default Variant (Original)</h2>
            <TrendBox 
              item={sampleDefaultItem} 
              variant="default"
              className="border border-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
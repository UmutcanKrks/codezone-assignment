"use client";

import ExploreCategories from "../../components/explore/explore-categories";

export default function CategoriesTestPage() {
  const handleCategorySelect = (categoryId: string) => {
    console.log("Selected category:", categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-8">Explore Categories Component Test</h1>
        
        <div className="bg-black p-8 rounded-lg">
          <ExploreCategories 
            onCategorySelect={handleCategorySelect}
          />
        </div>
        
        <div className="mt-8 text-white">
          <h2 className="text-xl font-bold mb-4">Features:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Interactive category boxes with hover effects</li>
            <li>Yellow highlight for selected categories (like "Yabancı Rap")</li>
            <li>Multiple selection support</li>
            <li>Responsive grid layout</li>
            <li>Keyboard accessibility with focus states</li>
            <li>Selection counter display</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
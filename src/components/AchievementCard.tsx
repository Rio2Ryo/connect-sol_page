import React from 'react';

interface AchievementCardProps {
  title: string;
  image: string;
}

export default function AchievementCard({ title, image }: AchievementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-square w-[200px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
    </div>
  );
}
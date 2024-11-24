import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  link: string;
  image?: string;
}

export default function ServiceCard({ title, description, icon: Icon, link, image }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 flex-grow">
        {Icon && <Icon className="h-12 w-12 text-purple-600 mb-4" />}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <Link 
          to={link}
          className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          詳細を見る
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

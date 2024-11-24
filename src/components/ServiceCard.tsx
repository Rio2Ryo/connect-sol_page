import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  link: string;
  image?: string;
}

export default function ServiceCard({ title, description, icon: Icon, link, image }: ServiceCardProps) {
  return (
    <Link to={link} className="group">
      <div className="bg-white shadow-lg rounded-xl hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden">
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          {Icon && <Icon className="h-12 w-12 text-purple-600 mb-4" />}
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}
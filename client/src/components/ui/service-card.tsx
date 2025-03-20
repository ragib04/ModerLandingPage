import LazyImage from '@/utils/LazyImage';
import { CheckCircle } from 'lucide-react';

interface ServiceFeature {
  text: string;
}

interface ServiceProps {
  service: {
    title: string;
    description: string;
    image: string;
    features: string[];
    ctaText: string;
    ctaColor: 'primary' | 'secondary' | 'accent';
  }
}

export function ServiceCard({ service }: ServiceProps) {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary text-white hover:bg-blue-600';
      case 'secondary':
        return 'bg-emerald-500 text-white hover:bg-emerald-600';
      case 'accent':
        return 'bg-purple-500 text-white hover:bg-purple-600';
      default:
        return 'bg-primary text-white hover:bg-blue-600';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-emerald-500';
      case 'accent':
        return 'text-purple-500';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden card-hover h-full">
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <LazyImage
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <CheckCircle className={`h-5 w-5 ${getIconColor(service.ctaColor)} mr-2`} />
              {feature}
            </li>
          ))}
        </ul>
        <a 
          href="#" 
          className={`inline-block w-full text-center py-3 px-4 ${getColorClass(service.ctaColor)} font-medium rounded-lg transition duration-300`}
        >
          {service.ctaText}
        </a>
      </div>
    </div>
  );
}

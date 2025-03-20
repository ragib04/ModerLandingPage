import { Check, X } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  description: string;
  price: number;
  isPopular: boolean;
  features: PricingFeature[];
  ctaText: string;
  ctaStyle: 'solid' | 'outline';
}

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full ${plan.isPopular ? 'border-2 border-primary relative' : ''}`}>
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}
      <div className="p-8 border-b border-gray-200">
        <h3 className={`text-xl font-semibold ${plan.isPopular ? 'text-primary' : 'text-gray-800'} mb-3`}>{plan.title}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-800">${plan.price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
      </div>
      <div className="p-8">
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <>
                  <Check className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-600">{feature.text}</span>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-gray-300 mt-1 mr-2" />
                  <span className="text-gray-400">{feature.text}</span>
                </>
              )}
            </li>
          ))}
        </ul>
        <a 
          href="#" 
          className={`inline-block w-full text-center py-3 px-4 ${
            plan.ctaStyle === 'solid' 
              ? 'bg-primary text-white hover:bg-primary-dark' 
              : 'bg-white border border-primary text-primary hover:bg-primary hover:text-white'
          } font-medium rounded-lg transition duration-300`}
        >
          {plan.ctaText}
        </a>
      </div>
    </div>
  );
}

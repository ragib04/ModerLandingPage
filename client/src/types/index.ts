export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
  ctaText: string;
  ctaColor: 'primary' | 'secondary' | 'accent';
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: number;
  isPopular: boolean;
  features: PricingFeature[];
  ctaText: string;
  ctaStyle: 'solid' | 'outline';
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  consent: boolean;
}

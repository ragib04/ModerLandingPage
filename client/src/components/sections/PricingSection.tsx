import { motion } from 'framer-motion';
import { PricingCard } from '@/components/ui/pricing-card';

const pricingPlans = [
  {
    title: "Basic",
    description: "Perfect for small businesses just getting started.",
    price: 29,
    isPopular: false,
    features: [
      { text: "Up to 5 users", included: true },
      { text: "10GB storage", included: true },
      { text: "Basic reporting", included: true },
      { text: "Email support", included: true },
      { text: "API access", included: false }
    ],
    ctaText: "Get Started",
    ctaStyle: "outline"
  },
  {
    title: "Pro",
    description: "Ideal for growing businesses with more demands.",
    price: 79,
    isPopular: true,
    features: [
      { text: "Up to 20 users", included: true },
      { text: "50GB storage", included: true },
      { text: "Advanced reporting", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "API access", included: true }
    ],
    ctaText: "Get Started",
    ctaStyle: "solid"
  },
  {
    title: "Enterprise",
    description: "For large organizations with complex requirements.",
    price: 199,
    isPopular: false,
    features: [
      { text: "Unlimited users", included: true },
      { text: "500GB storage", included: true },
      { text: "Custom reporting", included: true },
      { text: "24/7 phone, email & chat support", included: true },
      { text: "Dedicated account manager", included: true }
    ],
    ctaText: "Contact Sales",
    ctaStyle: "outline"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the plan that's right for your business.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className={plan.isPopular ? "transform md:scale-105 z-10" : ""}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

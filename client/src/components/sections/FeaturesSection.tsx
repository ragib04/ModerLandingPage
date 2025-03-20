import { motion } from 'framer-motion';
import { BarChart3, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Advanced Analytics",
    description: "Get real-time insights with intuitive dashboards and customizable reports to make data-driven decisions.",
    color: "primary",
  },
  {
    icon: <Lock className="h-6 w-6 text-emerald-500" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and comprehensive security features to keep your business data protected.",
    color: "secondary",
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-500" />,
    title: "Lightning Fast",
    description: "Optimized performance across all devices with blazing-fast load times and smooth interactions.",
    color: "accent",
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

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Digital Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform offers everything you need to elevate your business to the next level.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 card-hover"
              variants={item}
            >
              <div className={`h-12 w-12 bg-${feature.color === 'primary' ? 'primary' : feature.color === 'secondary' ? 'emerald-500' : 'purple-500'}/10 rounded-lg flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href="#" className={`text-${feature.color === 'primary' ? 'primary' : feature.color === 'secondary' ? 'emerald-500' : 'purple-500'} font-medium hover:text-${feature.color === 'primary' ? 'primary' : feature.color === 'secondary' ? 'emerald-600' : 'purple-600'} flex items-center`}>
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

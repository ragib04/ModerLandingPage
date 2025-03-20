import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PricingSection from '@/components/sections/PricingSection';
import UsersSection from '@/components/sections/UsersSection';
import ContactSection from '@/components/sections/ContactSection';

const Home = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (target.tagName === 'A' && href?.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <PricingSection />
        <UsersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { regions } from '@/utils/bankData';
import { MapPin } from 'lucide-react';

const RegionSection = () => {
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('regions');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="regions" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-xs font-medium inline-block mb-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            Geographic Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Banking Regions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore banks organized by geographic region to find the financial institutions you need regardless of location.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {regions.map((region) => (
            <motion.div
              key={region.id}
              variants={item}
              className={`region-card cursor-pointer group ${
                activeRegion.id === region.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveRegion(region)}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${region.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{region.name}</h3>
                  <p className="text-sm opacity-80">{region.banksCount} banks</p>
                </div>
              </div>
              
              <div className="p-4 bg-white">
                <p className="text-slate-600 text-sm">{region.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-morphism rounded-2xl overflow-hidden"
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">{activeRegion.name}</h3>
                <p className="text-sm text-slate-500">{activeRegion.banksCount} financial institutions</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6">
              {activeRegion.description}. Our database includes direct links to official banking websites, making it easy to access financial services.
            </p>

            <div className="flex justify-end">
              <a 
                href="#search" 
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary hover:underline transition-colors"
              >
                Search Banks in {activeRegion.name} →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionSection;

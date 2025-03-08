
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Globe from './Globe';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToRegions = () => {
    const regionsSection = document.getElementById('regions');
    if (regionsSection) {
      regionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-indigo-300 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-sky-200 rounded-full opacity-20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="px-3 py-1 text-xs font-medium inline-block mb-6 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
            >
              The world's banking directory
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Connecting you to 
              <span className="text-gradient whitespace-nowrap"> global banking</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-600 text-lg mb-8 max-w-lg"
            >
              Access links to over 100 banks across the world, organized by region and searchable by name or country.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#search" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
              >
                Find Your Bank
              </a>
              <a 
                href="#regions" 
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-full shadow-sm text-base font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
              >
                Browse by Region
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full h-[400px] lg:h-full">
              <Globe />
              {/* Floating decoration elements */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-500/10 animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-indigo-500/10 animate-float"></div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToRegions}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Scroll to regions"
          >
            <ChevronDown className="h-6 w-6 text-slate-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

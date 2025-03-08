
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavigationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg md:text-xl">GlobalBankLinks</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#regions" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              Regions
            </a>
            <a href="#search" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              Find Banks
            </a>
            <a href="#about" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              About
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#search" 
              className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary/5 transition-colors"
            >
              <Search className="h-4 w-4 mr-2" />
              Search Banks
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-2"
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium py-2 text-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#regions" 
                className="text-sm font-medium py-2 text-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Regions
              </a>
              <a 
                href="#search" 
                className="text-sm font-medium py-2 text-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Banks
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium py-2 text-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#search" 
                className="inline-flex items-center text-sm font-medium py-2 text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search className="h-4 w-4 mr-2" />
                Search Banks
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default NavigationHeader;

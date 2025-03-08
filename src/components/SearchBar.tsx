
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { searchBanks, type Bank } from '@/utils/bankData';
import BankCard from './BankCard';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Bank[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

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
    
    if (searchRef.current) observer.observe(searchRef.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (query.trim().length > 1) {
      const searchResults = searchBanks(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <section id="search" ref={searchRef} className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-3 py-1 text-xs font-medium inline-block mb-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            Search Directory
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Bank</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Search for banks by name or country to quickly find the financial institution you need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by bank name or country..."
              className="w-full pl-12 pr-12 py-4 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
            {query && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
              </button>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((bank, index) => (
                  <BankCard key={bank.id} bank={bank} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {query && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-500">No banks found matching "{query}"</p>
          </motion.div>
        )}

        {!query && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-8"
          >
            <p className="text-slate-500">Type to search for banks</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;

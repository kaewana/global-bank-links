
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import type { Bank } from '@/utils/bankData';

interface BankCardProps {
  bank: Bank;
  index: number;
}

const BankCard = ({ bank, index }: BankCardProps) => {
  return (
    <motion.a
      href={bank.website}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bank-card group cursor-pointer block hover:scale-105 hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{bank.name}</h3>
          <div className="flex items-center text-sm text-slate-500 mt-1">
            <Globe className="h-3 w-3 mr-1" />
            <span>{bank.country}</span>
          </div>
        </div>
        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-primary/10 transition-colors">
          <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
        </div>
      </div>
      
      <div className="mt-2 text-sm text-primary group-hover:underline inline-block">
        Visit Official Website
      </div>
    </motion.a>
  );
};

export default BankCard;

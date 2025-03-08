
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Bank } from '@/utils/bankData';

interface BankCardProps {
  bank: Bank;
  index: number;
}

const BankCard = ({ bank, index }: BankCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bank-card group"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{bank.name}</h3>
          <p className="text-sm text-slate-500">{bank.country}</p>
        </div>
        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-primary/10 transition-colors">
          <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
        </div>
      </div>
      
      <a 
        href={bank.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-2 text-sm text-primary hover:underline inline-block"
      >
        Visit Official Website
      </a>
    </motion.div>
  );
};

export default BankCard;


export interface Bank {
  id: string;
  name: string;
  country: string;
  logo?: string;
  website: string;
  region: string;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  banksCount: number;
  image: string;
}

export const regions: Region[] = [
  {
    id: 'north-america',
    name: 'North America',
    description: 'Banking institutions across the United States and Canada',
    banksCount: 24,
    image: 'https://images.unsplash.com/photo-1496588152823-86ff7695a68d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'europe',
    name: 'Europe',
    description: 'Leading banks from European Union countries and the UK',
    banksCount: 31,
    image: 'https://images.unsplash.com/photo-1546498159-9a2fac87e770?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'asia-pacific',
    name: 'Asia Pacific',
    description: 'Major banking institutions across Asia and Oceania',
    banksCount: 28,
    image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'latin-america',
    name: 'Latin America',
    description: 'Banking services across Central and South America',
    banksCount: 18,
    image: 'https://images.unsplash.com/photo-1627823560969-b080d27cbcb4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'middle-east-africa',
    name: 'Middle East & Africa',
    description: 'Financial institutions spanning Middle Eastern and African markets',
    banksCount: 22,
    image: 'https://images.unsplash.com/photo-1606922625162-e2b0c2582010?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const banks: Bank[] = [
  // North America
  { id: 'jpmorgan', name: 'JPMorgan Chase', country: 'United States', website: 'https://www.jpmorganchase.com', region: 'north-america' },
  { id: 'bank-of-america', name: 'Bank of America', country: 'United States', website: 'https://www.bankofamerica.com', region: 'north-america' },
  { id: 'citibank', name: 'Citibank', country: 'United States', website: 'https://www.citigroup.com', region: 'north-america' },
  { id: 'wells-fargo', name: 'Wells Fargo', country: 'United States', website: 'https://www.wellsfargo.com', region: 'north-america' },
  { id: 'td-bank', name: 'TD Bank', country: 'Canada', website: 'https://www.td.com', region: 'north-america' },
  { id: 'rbc', name: 'Royal Bank of Canada', country: 'Canada', website: 'https://www.rbc.com', region: 'north-america' },
  
  // Europe
  { id: 'hsbc', name: 'HSBC', country: 'United Kingdom', website: 'https://www.hsbc.com', region: 'europe' },
  { id: 'barclays', name: 'Barclays', country: 'United Kingdom', website: 'https://www.barclays.co.uk', region: 'europe' },
  { id: 'bnp-paribas', name: 'BNP Paribas', country: 'France', website: 'https://www.bnpparibas.com', region: 'europe' },
  { id: 'deutsche-bank', name: 'Deutsche Bank', country: 'Germany', website: 'https://www.db.com', region: 'europe' },
  { id: 'santander', name: 'Santander', country: 'Spain', website: 'https://www.santander.com', region: 'europe' },
  { id: 'unicredit', name: 'UniCredit', country: 'Italy', website: 'https://www.unicreditgroup.eu', region: 'europe' },
  
  // Asia Pacific
  { id: 'icbc', name: 'Industrial and Commercial Bank of China', country: 'China', website: 'http://www.icbc.com.cn/icbc/en/', region: 'asia-pacific' },
  { id: 'china-construction-bank', name: 'China Construction Bank', country: 'China', website: 'http://www.ccb.com/en/home/index.html', region: 'asia-pacific' },
  { id: 'mitsubishi-ufj', name: 'Mitsubishi UFJ Financial Group', country: 'Japan', website: 'https://www.mufg.jp/english/', region: 'asia-pacific' },
  { id: 'dbs', name: 'DBS Bank', country: 'Singapore', website: 'https://www.dbs.com', region: 'asia-pacific' },
  { id: 'anz', name: 'ANZ Bank', country: 'Australia', website: 'https://www.anz.com', region: 'asia-pacific' },
  { id: 'hdfc', name: 'HDFC Bank', country: 'India', website: 'https://www.hdfcbank.com', region: 'asia-pacific' },
  
  // Latin America
  { id: 'itau', name: 'Itaú Unibanco', country: 'Brazil', website: 'https://www.itau.com.br', region: 'latin-america' },
  { id: 'banco-do-brasil', name: 'Banco do Brasil', country: 'Brazil', website: 'https://www.bb.com.br', region: 'latin-america' },
  { id: 'bancolombia', name: 'Bancolombia', country: 'Colombia', website: 'https://www.bancolombia.com', region: 'latin-america' },
  { id: 'banorte', name: 'Banorte', country: 'Mexico', website: 'https://www.banorte.com', region: 'latin-america' },
  
  // Middle East & Africa
  { id: 'emirates-nbd', name: 'Emirates NBD', country: 'UAE', website: 'https://www.emiratesnbd.com', region: 'middle-east-africa' },
  { id: 'firstrand', name: 'FirstRand Bank', country: 'South Africa', website: 'https://www.firstrand.co.za', region: 'middle-east-africa' },
  { id: 'national-bank-of-egypt', name: 'National Bank of Egypt', country: 'Egypt', website: 'https://www.nbe.com.eg', region: 'middle-east-africa' },
  { id: 'qnb', name: 'Qatar National Bank', country: 'Qatar', website: 'https://www.qnb.com', region: 'middle-east-africa' }
];

export const getBanksByRegion = (regionId: string): Bank[] => {
  return banks.filter(bank => bank.region === regionId);
};

export const searchBanks = (query: string): Bank[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];
  
  return banks.filter(bank => 
    bank.name.toLowerCase().includes(normalizedQuery) || 
    bank.country.toLowerCase().includes(normalizedQuery)
  );
};

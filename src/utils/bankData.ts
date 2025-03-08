
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
    id: 'africa',
    name: 'Africa',
    description: 'Leading financial institutions across East, West, North, and Southern Africa',
    banksCount: 36,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    description: 'Financial institutions spanning Middle Eastern markets',
    banksCount: 18,
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
  
  // African Banks (New Addition)
  { id: 'equity-bank', name: 'Equity Bank', country: 'Kenya', website: 'https://equitygroupholdings.com', region: 'africa' },
  { id: 'kcb', name: 'Kenya Commercial Bank', country: 'Kenya', website: 'https://ke.kcbgroup.com', region: 'africa' },
  { id: 'co-operative-bank', name: 'Co-operative Bank', country: 'Kenya', website: 'https://www.co-opbank.co.ke', region: 'africa' },
  { id: 'stanbic-uganda', name: 'Stanbic Bank', country: 'Uganda', website: 'https://www.stanbicbank.co.ug', region: 'africa' },
  { id: 'centenary-bank', name: 'Centenary Bank', country: 'Uganda', website: 'https://www.centenarybank.co.ug', region: 'africa' },
  { id: 'dfcu', name: 'DFCU Bank', country: 'Uganda', website: 'https://www.dfcugroup.com', region: 'africa' },
  { id: 'crdb-bank', name: 'CRDB Bank', country: 'Tanzania', website: 'https://www.crdbbank.co.tz', region: 'africa' },
  { id: 'nmb-bank', name: 'NMB Bank', country: 'Tanzania', website: 'https://www.nmbbank.co.tz', region: 'africa' },
  { id: 'first-bank', name: 'First Bank of Nigeria', country: 'Nigeria', website: 'https://www.firstbanknigeria.com', region: 'africa' },
  { id: 'gtbank', name: 'Guaranty Trust Bank', country: 'Nigeria', website: 'https://www.gtbank.com', region: 'africa' },
  { id: 'zenith-bank', name: 'Zenith Bank', country: 'Nigeria', website: 'https://www.zenithbank.com', region: 'africa' },
  { id: 'access-bank', name: 'Access Bank', country: 'Nigeria', website: 'https://www.accessbankplc.com', region: 'africa' },
  { id: 'premier-bank', name: 'Premier Bank', country: 'Somalia', website: 'https://www.premierbank.so', region: 'africa' },
  { id: 'dahabshiil', name: 'Dahabshiil Bank', country: 'Somalia', website: 'https://www.dahabshiil.com', region: 'africa' },
  { id: 'amal-bank', name: 'Amal Bank', country: 'Somalia', website: 'https://amalbank.so', region: 'africa' },
  { id: 'cbe', name: 'Commercial Bank of Ethiopia', country: 'Ethiopia', website: 'https://www.combanketh.et', region: 'africa' },
  { id: 'dashen-bank', name: 'Dashen Bank', country: 'Ethiopia', website: 'https://dashenbanksc.com', region: 'africa' },
  { id: 'nbk', name: 'National Bank of Kenya', country: 'Kenya', website: 'https://www.nationalbank.co.ke', region: 'africa' },
  { id: 'nbe', name: 'National Bank of Egypt', country: 'Egypt', website: 'https://www.nbe.com.eg', region: 'africa' },
  { id: 'banque-misr', name: 'Banque Misr', country: 'Egypt', website: 'https://www.banquemisr.com', region: 'africa' },
  { id: 'cib', name: 'Commercial International Bank', country: 'Egypt', website: 'https://www.cibeg.com', region: 'africa' },
  { id: 'standard-bank', name: 'Standard Bank', country: 'South Africa', website: 'https://www.standardbank.co.za', region: 'africa' },
  { id: 'firstrand', name: 'FirstRand Bank', country: 'South Africa', website: 'https://www.firstrand.co.za', region: 'africa' },
  { id: 'absa', name: 'Absa Group', country: 'South Africa', website: 'https://www.absa.africa', region: 'africa' },
  { id: 'nedbank', name: 'Nedbank', country: 'South Africa', website: 'https://www.nedbank.co.za', region: 'africa' },
  { id: 'attijariwafa', name: 'Attijariwafa Bank', country: 'Morocco', website: 'https://www.attijariwafabank.com', region: 'africa' },
  { id: 'banque-centrale-tunisie', name: 'Central Bank of Tunisia', country: 'Tunisia', website: 'https://www.bct.gov.tn', region: 'africa' },
  { id: 'ecobank', name: 'Ecobank', country: 'Pan-African', website: 'https://www.ecobank.com', region: 'africa' },
  { id: 'rawbank', name: 'Rawbank', country: 'DR Congo', website: 'https://www.rawbank.cd', region: 'africa' },
  { id: 'bank-of-kigali', name: 'Bank of Kigali', country: 'Rwanda', website: 'https://www.bk.rw', region: 'africa' },
  { id: 'standard-chartered-africa', name: 'Standard Chartered Africa', country: 'Pan-African', website: 'https://www.sc.com/africa', region: 'africa' },
  { id: 'i-and-m', name: 'I&M Bank', country: 'East Africa', website: 'https://www.imbank.com', region: 'africa' },
  { id: 'bank-of-ghana', name: 'Bank of Ghana', country: 'Ghana', website: 'https://www.bog.gov.gh', region: 'africa' },
  { id: 'stanbic-ibtc', name: 'Stanbic IBTC', country: 'Nigeria', website: 'https://www.stanbicibtcbank.com', region: 'africa' },
  
  // Middle East Banks (Separated from Middle East & Africa region)
  { id: 'emirates-nbd', name: 'Emirates NBD', country: 'UAE', website: 'https://www.emiratesnbd.com', region: 'middle-east' },
  { id: 'qnb', name: 'Qatar National Bank', country: 'Qatar', website: 'https://www.qnb.com', region: 'middle-east' },
  { id: 'saudi-national-bank', name: 'Saudi National Bank', country: 'Saudi Arabia', website: 'https://www.alahli.com', region: 'middle-east' },
  { id: 'first-abu-dhabi', name: 'First Abu Dhabi Bank', country: 'UAE', website: 'https://www.bankfab.com', region: 'middle-east' },
  { id: 'arab-bank', name: 'Arab Bank', country: 'Jordan', website: 'https://www.arabbank.com', region: 'middle-east' },
  { id: 'bank-audi', name: 'Bank Audi', country: 'Lebanon', website: 'https://www.bankaudi.com.lb', region: 'middle-east' },
  { id: 'mashreq', name: 'Mashreq Bank', country: 'UAE', website: 'https://www.mashreqbank.com', region: 'middle-east' },
  { id: 'bank-muscat', name: 'Bank Muscat', country: 'Oman', website: 'https://www.bankmuscat.com', region: 'middle-east' },
  { id: 'commercial-bank-qatar', name: 'Commercial Bank of Qatar', country: 'Qatar', website: 'https://www.cbq.qa', region: 'middle-east' },
  { id: 'kfh', name: 'Kuwait Finance House', country: 'Kuwait', website: 'https://www.kfh.com', region: 'middle-east' },
  { id: 'ahli-united', name: 'Ahli United Bank', country: 'Bahrain', website: 'https://www.ahliunited.com', region: 'middle-east' },
  { id: 'riyad-bank', name: 'Riyad Bank', country: 'Saudi Arabia', website: 'https://www.riyadbank.com', region: 'middle-east' },
  { id: 'nbk', name: 'National Bank of Kuwait', country: 'Kuwait', website: 'https://www.nbk.com', region: 'middle-east' },
  { id: 'bank-dhofar', name: 'Bank Dhofar', country: 'Oman', website: 'https://www.bankdhofar.com', region: 'middle-east' },
  { id: 'dubai-islamic-bank', name: 'Dubai Islamic Bank', country: 'UAE', website: 'https://www.dib.ae', region: 'middle-east' },
  { id: 'arab-national-bank', name: 'Arab National Bank', country: 'Saudi Arabia', website: 'https://www.anb.com.sa', region: 'middle-east' },
  { id: 'bankmed', name: 'BankMed', country: 'Lebanon', website: 'https://www.bankmed.com.lb', region: 'middle-east' },
  { id: 'blom-bank', name: 'BLOM Bank', country: 'Lebanon', website: 'https://www.blombank.com', region: 'middle-east' }
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

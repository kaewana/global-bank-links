
// Bank tax rates (in percentages)
const bankTaxRates: Record<string, number> = {
  // Kenyan Banks
  "KCB": 1.5,
  "Equity": 1.2,
  "StanChart": 2.0,
  
  // Ugandan Banks
  "Stanbic": 1.8,
  
  // Tanzanian Banks
  "CRDB": 1.7,
  
  // Nigerian Banks
  "FirstBank": 1.9,
  
  // Egyptian Banks
  "CIB": 2.1,
  
  // American Banks
  "BankOfAmerica": 1.0,
  
  // UK Banks
  "HSBC": 1.2,
  
  // Singapore Banks
  "DBS": 0.8,
  
  // Default rate for any other bank
  "default": 1.5
};

/**
 * Returns the tax rate for a specified bank
 * @param bankId The bank identifier
 * @returns The tax rate percentage
 */
export const getBankTaxRate = (bankId: string): number => {
  return bankTaxRates[bankId] || bankTaxRates.default;
};

/**
 * Calculate transfer fee based on source and destination banks
 * @param amount The transfer amount
 * @param sourceBank The source bank
 * @param destinationBank The destination bank
 * @returns The calculated fee
 */
export const calculateTransferFee = (
  amount: number,
  sourceBank: string,
  destinationBank: string
): number => {
  const sourceTax = getBankTaxRate(sourceBank);
  const destinationTax = getBankTaxRate(destinationBank);
  
  // Calculate fee based on both bank tax rates
  return (amount * (sourceTax + destinationTax)) / 100;
};

/**
 * Format account number for display (privacy)
 * @param accountNumber The full account number
 * @returns Formatted account number (masked)
 */
export const formatAccountNumber = (accountNumber: string): string => {
  if (accountNumber.length <= 4) return accountNumber;
  
  const lastFour = accountNumber.slice(-4);
  const maskedPart = "*".repeat(accountNumber.length - 4);
  
  return `${maskedPart}${lastFour}`;
};

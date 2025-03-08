
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getBankTaxRate } from "@/utils/bankUtils";

const TransferForm = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [sourceBank, setSourceBank] = useState("");
  const [destinationBank, setDestinationBank] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [taxInfo, setTaxInfo] = useState<{ sourceTax: number; destinationTax: number } | null>(null);

  const calculateTaxes = () => {
    if (sourceBank && destinationBank) {
      const sourceTax = getBankTaxRate(sourceBank);
      const destinationTax = getBankTaxRate(destinationBank);
      setTaxInfo({ sourceTax, destinationTax });
    }
  };

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !destinationAccount || !sourceBank || !destinationBank) {
      toast({
        title: "Missing information",
        description: "Please fill in all the required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call for money transfer
    setTimeout(() => {
      // Store transaction in localStorage
      const existingTransactions = JSON.parse(localStorage.getItem("transactions") || "[]");
      const newTransaction = {
        id: Date.now(),
        amount: parseFloat(amount),
        destinationAccount,
        sourceBank,
        destinationBank,
        date: new Date().toISOString(),
        status: "Completed",
      };
      
      localStorage.setItem(
        "transactions", 
        JSON.stringify([newTransaction, ...existingTransactions])
      );
      
      toast({
        title: "Transfer successful",
        description: `$${amount} has been sent to account ${destinationAccount}`,
      });
      
      // Reset form
      setAmount("");
      setDestinationAccount("");
      setTaxInfo(null);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Global Money Transfer</CardTitle>
        <CardDescription>
          Send money to any bank account around the world
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleTransfer}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="sourceBank" className="text-sm font-medium">Source Bank</label>
              <Select 
                value={sourceBank} 
                onValueChange={(value) => {
                  setSourceBank(value);
                  if (destinationBank) calculateTaxes();
                }}
              >
                <SelectTrigger id="sourceBank">
                  <SelectValue placeholder="Select your bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="KCB">KCB Bank (Kenya)</SelectItem>
                  <SelectItem value="Equity">Equity Bank (Kenya)</SelectItem>
                  <SelectItem value="StanChart">Standard Chartered (Kenya)</SelectItem>
                  <SelectItem value="Stanbic">Stanbic Bank (Uganda)</SelectItem>
                  <SelectItem value="CRDB">CRDB Bank (Tanzania)</SelectItem>
                  <SelectItem value="FirstBank">First Bank (Nigeria)</SelectItem>
                  <SelectItem value="CIB">Commercial International Bank (Egypt)</SelectItem>
                  <SelectItem value="BankOfAmerica">Bank of America (USA)</SelectItem>
                  <SelectItem value="HSBC">HSBC (UK)</SelectItem>
                  <SelectItem value="DBS">DBS Bank (Singapore)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="destinationBank" className="text-sm font-medium">Destination Bank</label>
              <Select 
                value={destinationBank} 
                onValueChange={(value) => {
                  setDestinationBank(value);
                  if (sourceBank) calculateTaxes();
                }}
              >
                <SelectTrigger id="destinationBank">
                  <SelectValue placeholder="Select recipient bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="KCB">KCB Bank (Kenya)</SelectItem>
                  <SelectItem value="Equity">Equity Bank (Kenya)</SelectItem>
                  <SelectItem value="StanChart">Standard Chartered (Kenya)</SelectItem>
                  <SelectItem value="Stanbic">Stanbic Bank (Uganda)</SelectItem>
                  <SelectItem value="CRDB">CRDB Bank (Tanzania)</SelectItem>
                  <SelectItem value="FirstBank">First Bank (Nigeria)</SelectItem>
                  <SelectItem value="CIB">Commercial International Bank (Egypt)</SelectItem>
                  <SelectItem value="BankOfAmerica">Bank of America (USA)</SelectItem>
                  <SelectItem value="HSBC">HSBC (UK)</SelectItem>
                  <SelectItem value="DBS">DBS Bank (Singapore)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="destinationAccount" className="text-sm font-medium">Recipient Account Number</label>
            <Input
              id="destinationAccount"
              placeholder="Enter account number"
              value={destinationAccount}
              onChange={(e) => setDestinationAccount(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium">Amount (USD)</label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          
          {taxInfo && (
            <div className="p-4 bg-muted rounded-md">
              <h4 className="font-semibold mb-2">Tax Information</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Source Bank Tax Rate:</p>
                  <p className="font-medium">{taxInfo.sourceTax}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Destination Bank Tax Rate:</p>
                  <p className="font-medium">{taxInfo.destinationTax}%</p>
                </div>
                <div className="col-span-2 mt-2">
                  <p className="text-muted-foreground">Total Fees:</p>
                  <p className="font-medium text-primary">
                    ${((parseFloat(amount || "0") * (taxInfo.sourceTax + taxInfo.destinationTax)) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Processing..." : "Send Money"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default TransferForm;

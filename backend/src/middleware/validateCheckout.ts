export const validateCheckout = (currency: string, productName: string, unitAmount: number) => {
    if (!currency || !productName || !unitAmount) {
      throw new Error("Missing required parameters: currency, productName, and unitAmount are required");
    }
  };
  
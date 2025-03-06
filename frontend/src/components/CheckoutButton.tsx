import { useState } from "react";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:3000/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currency: "usd",
          productName: "Producto de prueba",
          unitAmount: 5000 // 🔹 Monto en centavos ($50.00 USD)
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url; // Redirige a Stripe Checkout
      }
    } catch (error) {
      console.error("Error creando la sesión de Checkout:", error);
    }

    setLoading(false);
  };

return (
<button 
    onClick={handleCheckout} 
    disabled={loading} 
    className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 px-6 py-3 text-base rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
>
    {loading ? (
    <>
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Redirigiendo...</span>
    </>
    ) : (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        <span>Pagar con Stripe</span>
    </>
    )}
</button>
  );
};


export default CheckoutButton;

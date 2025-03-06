import CheckoutButton from "./components/CheckoutButton";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

const App = () => {
const [currentView, setCurrentView] = useState("main");

const navigateToLogin = () => setCurrentView("login");
const navigateToRegister = () => setCurrentView("register");
const navigateToMain = () => setCurrentView("main");
return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200">
    {/* Header */}
    <header className="bg-gray-800 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-400">EcoShop</h1>
        <nav className="flex space-x-6">
            <a href="#" onClick={() => setCurrentView("main")} className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Products</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a>
        </nav>
        <div className="flex space-x-4">
            <button 
                onClick={navigateToLogin}
                className="px-4 py-2 text-sm font-medium text-indigo-400 border border-indigo-400 rounded-md hover:bg-indigo-400 hover:text-gray-900 transition-colors"
            >
                Login
            </button>
            <button 
                onClick={navigateToRegister}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-indigo-400 rounded-md hover:bg-indigo-500 transition-colors"
            >
                Register
            </button>
        </div>
        </div>
    </header>

    {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    {currentView === "login" && (
        <Login onSwitchToRegister={navigateToRegister} onLogin={navigateToMain} />
    )}
    {currentView === "register" && (
        <Register onSwitchToLogin={navigateToLogin} onRegister={navigateToMain} />
    )}
    {currentView === "main" && (
        <div className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-6">Featured Product</h2>
        {/* Product Card */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-gray-600 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 bg-gray-900 p-6 flex items-center justify-center">
                <div className="w-64 h-64 rounded-lg bg-indigo-900 flex items-center justify-center">
                <span className="text-6xl text-indigo-400">✨</span>
                </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-400 font-semibold">Premium Collection</div>
                <h3 className="mt-2 text-2xl leading-tight font-bold text-white">Eco-Friendly Water Bottle</h3>
                <div className="mt-3 flex items-center">
                <span className="text-white text-xl font-bold">$29.99</span> <span className="ml-2 text-sm text-gray-500 line-through">$39.99</span>
                <span className="ml-2 text-sm text-gray-600 line-through">$39.99</span>
                </div>
                <p className="mt-4 text-gray-400 leading-relaxed">
                This stylish, reusable water bottle is made from sustainable materials. 
                Perfect for everyday use and helping the environment.
                </p>
                
                {/* Features */}
                <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-400"> <span className="mr-2 text-indigo-400">•</span> <span>BPA-free stainless steel</span> </div> <div className="flex items-center text-sm text-gray-400"> <span className="mr-2 text-indigo-400">•</span> <span>24-hour temperature control</span> </div> <div className="flex items-center text-sm text-gray-400"> <span className="mr-2 text-indigo-400">•</span> <span>500ml capacity</span>
                    <span className="mr-2">•</span>
                    <span>BPA-free stainless steel</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">•</span>
                    <span>24-hour temperature control</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">•</span>
                    <span>500ml capacity</span>
                </div>
                </div>
                
                {/* Checkout Button */}
                <div className="mt-8">
                <CheckoutButton />
                </div>
            </div>
            </div>
        </div>
        </div>
        )}
        </main>

    {/* Footer */}
    <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-400">
            <p>© 2023 EcoShop. All rights reserved.</p>
            <p className="mt-2">Designed with simplicity and sustainability in mind.</p>
        </div>
        </div>
    </footer>
    </div>
);
};

export default App;

import { useState } from "react";

const Register = ({ onSwitchToLogin }: { onSwitchToLogin: () => void }) => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
});
const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value
    });
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
    setErrors({
        ...errors,
        [name]: ""
    });
    }
};

const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    // Name validation
    if (!formData.name.trim()) {
    newErrors.name = "Name is required";
    valid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
    newErrors.email = "Email is required";
    valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is invalid";
    valid = false;
    }
    
    // Password validation
    if (!formData.password) {
    newErrors.password = "Password is required";
    valid = false;
    } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
    valid = false;
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Please confirm your password";
    valid = false;
    } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
    valid = false;
    }
    
    setErrors(newErrors);
    return valid;
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
    // Submit the form data to your backend here
    console.log("Registration data:", formData);
    // Reset form after successful submission
    setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    }
};

return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-xl border border-gray-800">
    <h2 className="text-3xl font-bold text-center mb-6 text-white">Create Account</h2>
    
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
        </label>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-gray-800 border ${
            errors.name ? "border-red-500" : "border-gray-700"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
            placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        
        <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
        </label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-gray-800 border ${
            errors.email ? "border-red-500" : "border-gray-700"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
            placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        
        <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Password
        </label>
        <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-gray-800 border ${
            errors.password ? "border-red-500" : "border-gray-700"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
            placeholder="••••••••"
        />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
        </div>
        
        <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
            Confirm Password
        </label>
        <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-gray-800 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-700"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white`}
            placeholder="••••••••"
        />
        {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
        )}
        </div>
        
        <button
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900 shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
        Register
        </button>
    </form>
    
    <div className="mt-6 text-center">
        <p className="text-gray-400">
        Already have an account?{" "}
        <button
            onClick={onSwitchToLogin}
            className="text-purple-400 hover:text-purple-300 font-medium focus:outline-none"
        >
            Login
        </button>
        </p>
    </div>
    </div>
);
};

export default Register;


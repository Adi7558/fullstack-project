import { useState } from "react";
import AuthService from "./AuthService";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await AuthService.login(form);
            localStorage.setItem("jwtToken", token); // ✅ Save JWT
            alert("Login Successful!");
        } catch (error) {
            console.error("Login Error:", error.response?.data);
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
                Sign In to Your Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
                >
                    Login
                </button>
            </form>

            {/* Switch to signup */}
            <p className="text-sm text-gray-600 text-center mt-6">
                Don’t have an account?{" "}
                <span className="text-indigo-600 font-medium hover:underline cursor-pointer">
                    Sign up
                </span>
            </p>
        </div>
    );
}

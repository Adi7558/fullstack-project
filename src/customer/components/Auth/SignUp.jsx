import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "./AuthService";

export default function SignUp() {
    const navigate = useNavigate(); // <-- Add this for navigation

    const [form, setForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                username: form.username,
                firstName: form.firstName,
                lastName: form.lastName,
                mobile: form.mobile,
                email: form.email,
                password: form.password
            };
            const response = await AuthService.signup(payload);
            console.log("Signup Success:", response.data);
            alert("Signup Successful!");

            // Redirect to login page after signup
            navigate("/login");
        } catch (error) {
            console.error("Signup Error:", error.response?.data);
            alert(
                "Signup Failed! " +
                (error.response?.data?.message || "Check your inputs")
            );
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
                Create an Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        name="username"
                        type="text"
                        value={form.username}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your username"
                    />
                </div>

                {/* First Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your first name"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your last name"
                    />
                </div>

                {/* Mobile */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mobile</label>
                    <input
                        name="mobile"
                        type="tel"
                        value={form.mobile}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your mobile number"
                    />
                </div>

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
                    Sign Up
                </button>
            </form>

            {/* Switch to login */}
            <p className="text-sm text-gray-600 text-center mt-6">
                Already have an account?{" "}
                <span
                    className="text-indigo-600 font-medium hover:underline cursor-pointer"
                    onClick={() => navigate("/login")}
                >
                    Sign in
                </span>
            </p>
        </div>
    );
}

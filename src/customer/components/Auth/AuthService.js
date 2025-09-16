import axios from "axios";

const API_URL = "http://localhost:5454/api/auth/";

class AuthService {
    // ✅ Signup
    async signup(data) {
        return await axios.post(`${API_URL}signup`, data);
    }


    // ✅ Login
    async login(data) {
        const response = await axios.post(`${API_URL}login`, data);
        return response.data; // token
    }


    // ✅ Logout
    logout() {
        localStorage.removeItem("jwtToken");
    }

    // ✅ Get current token
    getToken() {
        return localStorage.getItem("jwtToken");
    }
}

export default new AuthService();

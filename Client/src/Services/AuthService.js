import axios from "axios"
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL


class AuthService {

    async login(data) {
        try {
            return await axios.post('/auth/login', data, {
                withCredentials : true
            });
        } catch (error) {
            return error
        }
    }

    // async addCard() {

    // }
    // async editCard() {

    // }
    // async deleteCard() {

    // }
}

const authService = new AuthService();
export default authService
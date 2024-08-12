import axios from "axios"
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL


class FlashCardService {

    async getAllCards() {
        try {
            return await axios.get('/flashcard/allCards', {
                withCredentials: true
            });
        } catch (error) {
            return error
        }
    }

    async addCard(data) {
        try {
            return await axios.post('/flashcard/addCard', data, {
                withCredentials: true
            });
        } catch (error) {
            return error
        }
    }

    async getCard(id) {
        try {
            return await axios.get(`/flashcard/getCard/${id}`, {
                withCredentials: true
            });
        } catch (error) {
            return error
        }
    }
    async editCard(data, id) {
        try {
            return await axios.patch(`/flashcard/editCard/${id}`, data, {
                withCredentials: true
            });
        } catch (error) {
            return error
        }
    }
    async deleteCard(id) {
        try {
            return await axios.delete(`/flashcard/deleteCard/${id}`, {
                withCredentials: true
            });
        } catch (error) {
            return error
        }
    }
}

const cardService = new FlashCardService();
export default cardService
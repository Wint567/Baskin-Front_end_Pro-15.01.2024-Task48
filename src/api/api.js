import axios from "axios";


export const getData = async () => {
    try {
        const response = await axios.get("https://65a5333652f07a8b4a3e9344.mockapi.io/cards");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export const setDataToMockAPI = async (title, message, image) => {
    try {
        const response = await axios.post('https://65a5333652f07a8b4a3e9344.mockapi.io/cards', {title, message, image});
        console.log('API Response:', response.data);
        // Handle success, update state, etc.
    } catch (error) {
        console.error('API Error:', error);
        // Handle error, show an alert, etc.
    }
}
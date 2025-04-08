import axios from 'axios';

interface ChatResponse {
    answer: string;
}

const chatWithBot = async (message: string): Promise<ChatResponse> => {
    try {
        const response = await axios.post<ChatResponse>('http://localhost:8000/get', { msg: message });
        return response.data;
    } catch (error) {
        console.error('Error chatting with bot:', error);
        return { answer: 'Sorry, something went wrong.' };
    }
};

export default chatWithBot;

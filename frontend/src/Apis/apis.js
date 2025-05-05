import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL_BACKEND;
const APIs = axios.create({ baseUrl : baseUrl });
export const getHome = async () => {
    try {
        const response = await APIs.get(baseUrl+"/");
        console.log('Home Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching home:', error);
        return null;
    }
}
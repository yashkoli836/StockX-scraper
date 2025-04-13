import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const scrapeProductData = async (url: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/scrape`, { url });
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error scraping product data: ' + error.message);
        } else {
            throw new Error('Error scraping product data: Unknown error');
        }
    }
};

export const getScrapedData = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/data/${id}`);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error retrieving scraped data: ' + error.message);
        } else {
            throw new Error('Error retrieving scraped data: Unknown error');
        }
    }
};
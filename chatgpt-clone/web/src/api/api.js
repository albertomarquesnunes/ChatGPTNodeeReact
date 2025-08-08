import axios from 'axios';

const API_URL = 'http://localhost:5555';

export const makeRequest = async (message) => {
  try {
    
    const {data} = await axios.post(API_URL, message);
    return data;

  } catch (error) {
   
    console.error('Error fetching data:', error);
    throw error;

  }
};

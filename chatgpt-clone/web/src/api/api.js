import axios from 'axios';


const API_URL = 'http://localhost:5000/api/prompt';

const makeRequest = async (message) => {
  try {
    console.log("Sending message:", message);
    const {data} = await axios.post(API_URL, message);
    
    return data;

  } catch (error) {
   
    console.error('Error fetching data:', error);
    throw error;

  }
};
export default makeRequest;

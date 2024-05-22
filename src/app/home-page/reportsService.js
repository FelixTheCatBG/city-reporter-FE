import axios from 'axios';

const client = axios.create({
     baseURL: 'http://localhost:3001'
});

export const getReports = async () => {
     try {
          const response = await client.get('/reports');
          return response.data;
     }catch (error) {
          console.error('Error fetching reports:', error);
          throw error;
     }
};
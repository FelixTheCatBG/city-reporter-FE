import axios from 'axios';

const client = axios.create({
     baseURL: 'http://localhost:3001'
});

export const getReportById = async (id) => {
     try {
       const response = await client.get(`/reports/${id}`);
       return response.data;
     } catch (error) {
       console.error('Error fetching report:', error);
       throw error;
     }
};

export const getCommentsByReportId = async (reportId) => {
     try {
          const response = await client.get(`/comments?reportId=${reportId}`);
          return response.data;
     } catch (error) {
          console.error('Error fetching comments:', error);
          throw error;
     }
};

export const submitComment = async (commentData) => {
     try {
       const response = await client.post('/comments', commentData);
       return response;
     } catch (error) {
       throw new Error(error.message);
     }
   };
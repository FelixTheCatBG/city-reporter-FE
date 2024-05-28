import axios from 'axios';

const submitReport = async (reportData) => {
     try{
          const response = await axios.post('http://localhost:3001/reports', reportData);
          return response;
     } catch(error){
          console.error('Error:', error.message);
          throw error;
     }
}

export default submitReport;
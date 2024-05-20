import axios from 'axios';

const DB_URL = 'http://localhost:3000/users'; // Change this URL if your JSON server runs on a different port

export const authenticateUser = async (email, password) => {
  try {
    const response = await axios.get(DB_URL);
    const users = response.data;
    return users.find(user => user.email === email && user.password === password);
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};

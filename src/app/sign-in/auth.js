import axios from 'axios';

const DB_URL = 'http://localhost:3001/users';

export const authenticateUser = async (email, password) => {
  try {
    const response = await axios.get(DB_URL);
    const users = response.data;
    const user = users.find(user => user.email === email && user.password === password);
    return user || null;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};

import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000', // Backend URL
});

export const registerUser = (userData) => API.post('/users/register', userData);
export const loginUser = (userData) => API.post('/users/login', userData);
export const fetchTransactions = (token) => 
    API.get('/transactions', { headers: { Authorization: token } });
export const addTransaction = (transactionData, token) =>
    API.post('/transactions', transactionData, { headers: { Authorization: token } });

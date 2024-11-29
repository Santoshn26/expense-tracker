import React, { useState, useEffect } from 'react';
import { fetchTransactions, addTransaction } from '../api';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [form, setForm] = useState({ amount: '', category: '', paymentMode: '', date: '' });

    const token = localStorage.getItem('token');

    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const response = await fetchTransactions(token);
                setTransactions(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        loadTransactions();
    }, [token]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTransaction(form, token);
            setForm({ amount: '', category: '', paymentMode: '', date: '' });
            setTransactions([...transactions, form]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <input name="amount" placeholder="Amount" onChange={handleChange} />
                <input name="category" placeholder="Category" onChange={handleChange} />
                <input name="paymentMode" placeholder="Payment Mode" onChange={handleChange} />
                <input name="date" type="date" onChange={handleChange} />
                <button type="submit">Add Transaction</button>
            </form>
            <ul>
                {transactions.map((t, index) => (
                    <li key={index}>
                        {t.amount} - {t.category} - {t.paymentMode} - {t.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;

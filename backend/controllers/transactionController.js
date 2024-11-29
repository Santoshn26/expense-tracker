const { Transaction } = require('../models');

exports.addTransaction = async (req, res) => {
    const { amount, category, paymentMode, date } = req.body;
    const userId = req.user.id;

    try {
        const transaction = await Transaction.create({ amount, category, paymentMode, date, userId });
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTransactions = async (req, res) => {
    const userId = req.user.id;

    try {
        const transactions = await Transaction.findAll({ where: { userId } });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

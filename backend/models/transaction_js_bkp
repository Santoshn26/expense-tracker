'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        amount: DataTypes.FLOAT,
        category: DataTypes.STRING,
        paymentMode: DataTypes.STRING,
        date: DataTypes.DATE,
    });

    Transaction.associate = (models) => {
        Transaction.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return Transaction;
};

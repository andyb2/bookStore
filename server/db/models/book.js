const Sequelize = require('sequelize');
const db = require('../db');

const Book = db.define('book', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Book
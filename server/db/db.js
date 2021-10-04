const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || "mysql://root@localhost:3306", {
    logging: false
});

module.exports = db
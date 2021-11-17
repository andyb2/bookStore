const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DATABASE_URL || "mysql://root@localhost:3306/booklibrary_db", {
    logging: false
});

const dbSeed = async () => {
    await db.sync({ force: true })
}
dbSeed();

module.exports = db
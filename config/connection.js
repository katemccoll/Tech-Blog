const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.DATABASE_URL) {
    const config = { dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }};
    sequelize = new Sequelize(process.env.DATABASE_URL, config);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;
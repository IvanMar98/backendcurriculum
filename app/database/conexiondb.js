const Sequelize = require('sequelize');
const sequelize = Sequelize('curriculum', "root", "rootpassword"{
    host:"localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize();
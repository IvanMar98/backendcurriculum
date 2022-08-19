const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Roles = sequelize.define('roles', {
    id_Roles:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descripcion_Rol:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Roles;
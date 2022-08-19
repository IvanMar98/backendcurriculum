const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Periodos = sequelize.define('periodos', {
    id_Periodos:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Periodo:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Periodos;
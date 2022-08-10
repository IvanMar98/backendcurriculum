const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Divisiones = sequelize.define('divisiones', {
    id_Divisiones:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descripcion:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Interno_Externo:{
        type:Sequelize.DataTypes.INTEGER
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Divisiones;
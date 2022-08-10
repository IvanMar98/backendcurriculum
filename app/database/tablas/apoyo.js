const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Apoyo = sequelize.define('apoyo', {
    id_Apoyo:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Tipo_Apoyo:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Apoyo;
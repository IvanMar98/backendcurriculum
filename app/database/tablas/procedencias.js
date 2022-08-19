const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Procedencias = sequelize.define('procedencia', {
    id_Procedencia:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Institucion_de_procedencia:{
        type:Sequelize.DataTypes.STRING(50),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Procedencias;
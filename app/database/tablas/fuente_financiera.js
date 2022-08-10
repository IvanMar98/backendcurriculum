const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const FuenteFinanciera = sequelize.define('fuente_financiera', {
    id_Fuente_Financiera:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Tipo_Fuente:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =FuenteFinanciera;
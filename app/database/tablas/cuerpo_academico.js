const { Sequelize } = require('sequelize');
 const sequelize = require('../conexiondb');

 const CuerpoAcademico = sequelize.define('cuerpo_academico', {
     id_Cuerpo_Academico: {
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     Descripcion: {
        type:Sequelize.DataTypes.STRING(150),
        allowNull: false
     }
 },{
     freezeTableName: true,
     timestamps: false
 }); 

 module.exports =CuerpoAcademico;
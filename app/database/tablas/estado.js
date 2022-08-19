const { Sequelize } = require('sequelize');
 const sequelize = require('../conexiondb');

 const Estado = sequelize.define('estado', {
    id_Estado: {
        type:Sequelize.DataTypes.STRING(45),
        primaryKey: true
     },
     Nombre_Estado: {
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
     },
     id_Pais: {
        type:Sequelize.DataTypes.STRING(45),
         allowNull: false 
     }
 },{
     freezeTableName: true,
     timestamps: false
 }); 

 module.exports =Estado;
const { Sequelize } = require('sequelize');
 const sequelize = require('../conexiondb');

 const Colonia = sequelize.define('colonia', {
    id_Colonia: {
        type:Sequelize.DataTypes.STRING(45),
        primaryKey: true
     },
     Nombre_Colonia: {
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
     },
     id_CP: {
        type:Sequelize.DataTypes.STRING(45),
         allowNull: false 
     }
 },{
     freezeTableName: true,
     timestamps: false
 }); 

 module.exports =Colonia;
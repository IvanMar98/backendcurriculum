const { Sequelize } = require('sequelize');
 const sequelize = require('../conexiondb');

 const Municipio = sequelize.define('municipio', {
    id_Municipio: {
        type:Sequelize.DataTypes.STRING(45),
        primaryKey: true
     },
     Nombre_Municipio: {
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
     },
     id_Estado: {
        type:Sequelize.DataTypes.STRING(45),
         allowNull: false 
     }
 },{
     freezeTableName: true,
     timestamps: false
 }); 

 module.exports =Municipio;
const { Sequelize } = require('sequelize');
 const sequelize = require('../conexiondb');

 const Pais = sequelize.define('pais', {
     id_Pais: {
        type:Sequelize.DataTypes.STRING(45),
        primaryKey: true
     },
     Nombre_Pais: {
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
     }
 },{
     freezeTableName: true,
     timestamps: false
 }); 

 module.exports =Pais;
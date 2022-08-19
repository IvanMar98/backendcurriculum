const { Sequelize } = require('sequelize');
 const sequelize = require('../conexiondb');

 const CP = sequelize.define('cp', {
    id_CP: {
        type:Sequelize.DataTypes.STRING(45),
        primaryKey: true
     },
     Codigo: {
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
     },
     id_Municipio: {
        type:Sequelize.DataTypes.STRING(45),
         allowNull: false 
     }
 },{
     freezeTableName: true,
     timestamps: false
 }); 

 module.exports =CP;
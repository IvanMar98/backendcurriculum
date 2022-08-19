const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const UsuarioRol = sequelize.define('usuario_rol', {
    id_Usuario_Rol:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_Usuario:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Rol:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =UsuarioRol;
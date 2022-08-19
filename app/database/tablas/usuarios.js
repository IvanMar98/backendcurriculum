const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Usuarios = sequelize.define('usuarios', {
    id_Usuarios:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Apellido:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Fecha_Nacimiento:{
        type:Sequelize.DataTypes.DATE,
        allowNull: false
    },
    CURP:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_Divisiones:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type:Sequelize.DataTypes.STRING(50),
        allowNull: false
    },
    contrasena:{
        type:Sequelize.DataTypes.STRING(10),
        allowNull: false
    },
    id_pais:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_estado:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_municipio:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_cp:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_colonia:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Usuarios;
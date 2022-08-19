const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Proyectos = sequelize.define('proyectos', {
    id_Proyectos:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Titulo:{
        type:Sequelize.DataTypes.STRING(15),
        allowNull: false
    },
    id_Procedencia:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Apoyo:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_linea_investigacion:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Periodo:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Fecha_Inicio:{
        type:Sequelize.DataTypes.DATE,
        allowNull: false
    },
    Fecha_Termino:{
        type:Sequelize.DataTypes.DATE,
        allowNull: false
    },
    id_Tipo_Proyecto:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Estatus:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    id_Usuario_Rol:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Divisiones:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Proyectos;
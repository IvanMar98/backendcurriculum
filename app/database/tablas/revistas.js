const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Revistas = sequelize.define('revistas', {
    id_revista:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_revista:{
        type:Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    id_tipo_revista:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    isbn:{
        type:Sequelize.DataTypes.STRING(20),
        allowNull: false
    },
    issn:{
        type:Sequelize.DataTypes.STRING(20),
        allowNull: false
    },
    latindex:{
        type:Sequelize.DataTypes.STRING(20),
        allowNull: false
    },
    numero_revista:{
        type:Sequelize.DataTypes.STRING(10),
        allowNull: false
    },
    volumen:{
        type:Sequelize.DataTypes.STRING(10),
        allowNull: false
    },
    año_publicacion:{
        type:Sequelize.DataTypes.DATE,
        allowNull: false
    },
    pagina_inicio:{
        type:Sequelize.DataTypes.STRING(10),
        allowNull: false
    },
    pagina_fin:{
        type:Sequelize.DataTypes.STRING(10),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Revistas;
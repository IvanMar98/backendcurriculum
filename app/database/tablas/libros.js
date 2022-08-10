const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const Libros = sequelize.define('libros', {
    isbn:{
        type:Sequelize.DataTypes.STRING(13),
        primaryKey: true,
    },
    nombre_editorial:{
        type:Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    año_publicacon:{
        type:Sequelize.DataTypes.DATE
    },
     titulo_libro:{
        type:Sequelize.DataTypes.STRING(100)
    }

},{
    freezeTableName: true,
    timestamps: false
});

module.exports =Libros;
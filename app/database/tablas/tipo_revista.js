const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const TipoRevista = sequelize.define('tipo_revista', {
    id_tipo_revista:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    descripcion:{
        type:Sequelize.DataTypes.STRING(50),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =TipoRevista;
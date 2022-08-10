const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const TipoPublicacion = sequelize.define('tipo_publicacion', {
    id_tipo_publicacion:{
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

module.exports =TipoPublicacion;
const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const TipoProyecto = sequelize.define('tipo_proyecto', {
    id_Tipo_Proyecto:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Tipo_Proyecto:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports =TipoProyecto;
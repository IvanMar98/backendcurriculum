const { Sequelize } = require('sequelize');
const sequelize = require('../conexiondb');

const LineaInvestigacion = sequelize.define('linea_investigacion', {
    id_Linea_Investigacion:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descripcion:{
        type:Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    Tipo_Linea:{
        type:Sequelize.DataTypes.STRING(150)
    },
    id_Fuente_Financiera:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id_Cuerpo_Academico:{
       type:Sequelize.DataTypes.INTEGER,
       allowNull: false
   }

},{
    freezeTableName: true,
    timestamps: false
});

module.exports =LineaInvestigacion;
const Pais = require('./tablas/pais');
const Estado = require('./tablas/estado');
const Municipio = require('./tablas/municipio');
const CP = require('./tablas/codigopostal');
const Colonia = require('./tablas/colonia');
const Usuarios = require('./tablas/usuarios');
const Divisiones = require('./tablas/divisiones');
const UsuarioRol = require('./tablas/usuario_rol');
const Procedencias = require('./tablas/procedencias');
const Proyectos = require('./tablas/proyectos');
const Apoyo = require('./tablas/apoyo');
const LineaInvestigacion = require('./tablas/linea_investigacion');
const Periodos = require('./tablas/periodos');
const TipoProyecto = require('./tablas/tipo_proyecto');
const TipoRevista = require('./tablas/tipo_revista');
const Revistas = require('./tablas/revistas');





module.exports = function () {
    //TABLA PAIS-ESTADO
    Pais.hasMany(Estado, { foreignKey: 'id_Pais' });
    Estado.belongsTo(Pais, { foreignKey: 'id_Pais' });
    //TABLA ESTADO-MUNICIPIO
    Estado.hasMany(Municipio, { foreignKey: 'id_Estado' });
    Municipio.belongsTo(Estado, { foreignKey: 'id_Estado' });
    //TABLA MUNICIPIO-CP
    Municipio.hasMany(CP, { foreignKey: 'id_Municipio' });
    CP.belongsTo(Municipio, { foreignKey: 'id_Municipio' });
    //TABLA CP-Colonia
    CP.hasMany(Colonia, { foreignKey: 'id_CP' });
    Colonia.belongsTo(CP, { foreignKey: 'id_CP' });
    //TABLA USUARIOS
    Divisiones.hasMany(Usuarios, { foreignKey: 'id_Divisiones' });
    Usuarios.belongsTo(Divisiones, { foreignKey: 'id_Divisiones' });

    Pais.hasMany(Usuarios, { foreignKey: 'id_Pais' });
    Usuarios.belongsTo(Pais, { foreignKey: 'id_Pais' });

    Estado.hasMany(Usuarios, { foreignKey: 'id_Estado' });
    Usuarios.belongsTo(Estado, { foreignKey: 'id_Estado' });

    Municipio.hasMany(Usuarios, { foreignKey: 'id_Municipio' });
    Usuarios.belongsTo(Municipio, { foreignKey: 'id_Municipio' });

    CP.hasMany(Usuarios, { foreignKey: 'id_CP' });
    Usuarios.belongsTo(CP, { foreignKey: 'id_CP' });

    Colonia.hasMany(Usuarios, { foreignKey: 'id_Colonia' });
    Usuarios.belongsTo(Colonia, { foreignKey: 'id_Colonia' });

    //TABLA USUARIOS-USUARIO_ROL
    Usuarios.hasMany(UsuarioRol, { foreignKey: 'id_Usuario' });
    UsuarioRol.belongsTo(Usuarios, { foreignKey: 'id_Usuario' });

    //TABLA PROYECTOS-PROCEDENCIA
    Procedencias.hasMany(Proyectos, { foreignKey: 'id_Procedencia' });
    Proyectos.belongsTo(Procedencias, { foreignKey: 'id_Procedencia' });

    Apoyo.hasMany(Proyectos, { foreignKey: 'id_Apoyo' });
    Proyectos.belongsTo(Apoyo, { foreignKey: 'id_Apoyo' });

    LineaInvestigacion.hasMany(Proyectos, { foreignKey: 'id_Linea_Investigacion' });
    Proyectos.belongsTo(LineaInvestigacion, { foreignKey: 'id_Linea_Investigacion' });

    Periodos.hasMany(Proyectos, { foreignKey: 'id_Periodo' });
    Proyectos.belongsTo(Periodos, { foreignKey: 'id_Periodo' });

    TipoProyecto.hasMany(Proyectos, { foreignKey: 'id_Tipo_Proyecto' });
    Proyectos.belongsTo(TipoProyecto, { foreignKey: 'id_Tipo_Proyecto' });

    UsuarioRol.hasMany(Proyectos, { foreignKey: 'id_Usuario_Rol' });
    Proyectos.belongsTo(UsuarioRol, { foreignKey: 'id_Usuario_Rol' });
   
    Divisiones.hasMany(Proyectos, { foreignKey: 'id_Divisiones' });
    Proyectos.belongsTo(Divisiones, { foreignKey: 'id_Divisiones' });

     //TABLA REVISTA-TIPOREVISTA
     TipoRevista.hasMany(Revistas, { foreignKey: 'id_tipo_revista' });
     Revistas.belongsTo(TipoRevista, { foreignKey: 'id_tipo_revista' });



}
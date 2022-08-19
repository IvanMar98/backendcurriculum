const sequelize = require('./conexiondb');
const Apoyo = require('./tablas/apoyo');
const CuerpoAcademico = require('./tablas/cuerpo_academico');
const Divisiones = require('./tablas/divisiones');
const Estado = require('./tablas/estado');
const FuenteFinanciera = require('./tablas/fuente_financiera');
const Libros = require('./tablas/libros');
const Pais = require('./tablas/pais');
const Procedencias = require('./tablas/procedencias');
const Periodos = require('./tablas/periodos');
const Roles = require('./tablas/roles');
const TipoProyecto = require('./tablas/tipo_proyecto');
const TipoPublicacion = require('./tablas/tipo_publicacion');
const TipoRevista = require('./tablas/tipo_revista');
const relaciones = require('./relaciones');
const Municipio = require('./tablas/municipio');
const CP = require('./tablas/codigopostal');
const Colonia = require('./tablas/colonia');
const Usuarios = require('./tablas/usuarios');
const LineaInvestigacion = require('./tablas/linea_investigacion');
const UsuarioRol = require('./tablas/usuario_rol');
const Proyectos = require('./tablas/proyectos');
const Revistas = require('./tablas/revistas');

const bcrypt = require('bcryptjs');


init = function () {
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida con mysql");

    }).catch(err => {
        console.log("conexion no establecida", err);
    })
    relaciones();
}



/*-----------------------------------------------------------get------------------------------------------------------*/
/*getPais*/
getPais = function (callback) {
    Pais.findAll().then(pais => callback(pais));
}
/*getEstado*/
getEstado = function (callback) {
    Estado.findAll().then(estado => callback(estado));
}
getEstadofk = function (callback) {
    Estado.findAll({
        include: [
            { model: Pais, attributes: ['Nombre_Pais'] }
        ],
        attributes: ['id_Estado', 'Nombre_Estado'],
    }).then(Estado => callback(Estado))
}
/*getMunicipio*/
getMunicipio = function (callback) {
    Municipio.findAll().then(municipio => callback(municipio));
}
getMunicipiofk = function (callback) {
    Municipio.findAll({
        include: [
            { model: Estado, attributes: ['Nombre_Estado'] }
        ],
        attributes: ['id_Municipio', 'Nombre_Municipio'],
    }).then(Municipio => callback(Municipio))
}
/*getCP*/
getCP = function (callback) {
    CP.findAll().then(CP => callback(CP));
}
getCPfk = function (callback) {
    CP.findAll({
        include: [
            { model: Municipio, attributes: ['Nombre_Municipio'] }
        ],
        attributes: ['id_CP', 'Codigo'],
    }).then(CP => callback(CP))
}
/*getColonia*/
getColonia = function (callback) {
    Colonia.findAll().then(colonia => callback(colonia));
}
getColoniafk = function (callback) {
    Colonia.findAll({
        include: [
            { model: CP, attributes: ['Codigo'] }
        ],
        attributes: ['id_Colonia', 'Nombre_Colonia'],
    }).then(Colonia => callback(Colonia))
}
/*getUsuarios*/
getUsuarios = function (callback) {
    Usuarios.findAll().then(usuarios => callback(usuarios));
}
getUsuariosfk = function (callback) {
    Usuarios.findAll({
        include: [
            { model: Divisiones, attributes: ['Descripcion', 'Interno_Externo'] },
            { model: Pais, attributes: ['Nombre_Pais'] },
            { model: Estado, attributes: ['Nombre_Estado'] },
            { model: Municipio, attributes: ['Nombre_Municipio'] },
            { model: CP, attributes: ['Codigo'] },
            { model: Colonia, attributes: ['Nombre_Colonia'] }
        ],
        attributes: ['id_Usuarios', 'Nombre', 'Apellido', 'Fecha_Nacimiento', 'CURP', 'email', 'contrasena'],
    }).then(Usuarios => callback(Usuarios))
}
//usuario_rol
getUsuarioRol = function (callback) {
    UsuarioRol.findAll().then(usuariorol => callback(usuariorol))
}
getUsuarioRolfk = function (callback) {
    UsuarioRol.findAll({
        include: [
            { model: Usuarios, attributes: ['Nombre', 'Apellido'] }
        ],
        attributes: ['id_Usuario'],
    }).then(UsuarioRol => callback(UsuarioRol))
}

//getProyectos
getProyectos = function (callback) {
    Proyectos.findAll().then(proyectos => callback(proyectos))
}
getProyectosfk = function (callback) {
    Proyectos.findAll({
        include: [
            { model: Procedencias, attributes: ['Institucion_de_procedencia'] },
            { model: Apoyo, attributes: ['Tipo_Apoyo'] },
            { model: LineaInvestigacion, attributes: ['Descripcion', 'Tipo_Linea'] },
            { model: Periodos, attributes: ['Nombre_Periodo'] },
            { model: TipoProyecto, attributes: ['Nombre_Tipo_Proyecto'] },
            { model: UsuarioRol, attributes: ['id_Usuario'] },
            { model: Divisiones, attributes: ['Descripcion'] }

        ],
        attributes: ['id_Proyectos', 'Titulo', 'Fecha_Inicio', 'Fecha_Termino', 'Estatus'],
    }).then(Proyectos => callback(Proyectos))
}

//getRevistas
getRevistas = function (callback) {
    Revistas.findAll().then(revistas => callback(revistas))
}
getRevistasfk = function (callback) {
    Revistas.findAll({
        include: [
            { model:TipoRevista, attributes: ['descripcion'] },
          

        ],
        attributes: ['id_revista', 'nombre_revista', 'isbn', 'issn', 'latindex', 'numero_revista', 'volumen', 'año_publicacion', 'pagina_inicio', 'pagina_fin'],
    }).then(Revistas => callback(Revistas))
}


//getDivisiones
getDivisiones = function (callback) {
    Divisiones.findAll().then(divisiones => callback(divisiones))
}
getApoyo = function (callback) {
    Apoyo.findAll().then(apoyo => callback(apoyo));
}
getCuerpoAcademico = function (callback) {
    CuerpoAcademico.findAll().then(cuerpo_academico => callback(cuerpo_academico));
}

getFuenteFinanciera = function (callback) {
    FuenteFinanciera.findAll().then(fuentefinanciera => callback(fuentefinanciera))
}
getLibros = function (callback) {
    Libros.findAll().then(libros => callback(libros))
}
getProcedencias = function (callback) {
    Procedencias.findAll().then(procedencias => callback(procedencias))
}
getPeriodos = function (callback) {
    Periodos.findAll().then(periodos => callback(periodos))
}
getRoles = function (callback) {
    Roles.findAll().then(roles => callback(roles))
}
getTipoProyecto = function (callback) {
    TipoProyecto.findAll().then(tipoproyecto => callback(tipoproyecto))
}
getTipoPublicacion = function (callback) {
    TipoPublicacion.findAll().then(tipopublicacion => callback(tipopublicacion))
}
getTipoRevista = function (callback) {
    TipoRevista.findAll().then(tiporevista => callback(tiporevista))
}
getLineaInvestigacion = function (callback) {
    LineaInvestigacion.findAll().then(lineainvestigacion => callback(lineainvestigacion))
}





/*-----------------------------------------------------------post------------------------------------------------------*/

//postUsuarios
/* postUsuarios = function (request, callback) {
    Usuarios.create({
        Nombre: request.Nombre,
        Apellido: request.Apellido,
        Fecha_Nacimiento: request.Fecha_Nacimiento,
        CURP: request.CURP,
        id_Divisiones: request.id_Divisiones,
        email: request.email,
        contrasena: request.contrasena,
        id_pais: request.id_pais,
        id_estado: request.id_estado,
        id_municipio: request.id_municipio,
        id_cp: request.id_cp,
        id_colonia: request.id_colonia

    }).then(callback(true));
} */
postUsuarios = function (request, callback){
    const salt = bcrypt.genSaltSync();
    pw2 = bcrypt.hashSync(request.contrasena, salt);
    Usuarios.create({
        Nombre: request.Nombre,
        Apellido: request.Apellido,
        Fecha_Nacimiento: request.Fecha_Nacimiento,
        CURP: request.CURP,
        id_Divisiones: request.id_Divisiones,
        email: request.email,
        contrasena: pw2,
        id_pais: request.id_pais,
        id_estado: request.id_estado,
        id_municipio: request.id_municipio,
        id_cp: request.id_cp,
        id_colonia: request.id_colonia

    }).then(callback(true));
}

//proyectos
postProyectos = function (request, callback) {
    Proyectos.create({
        Titulo: request.Titulo,
        id_Procedencia: request.id_Procedencia,
        id_Apoyo: request.id_Apoyo,
        id_linea_investigacion: request.id_linea_investigacion,
        id_Periodo: request.id_Periodo,
        Fecha_Inicio: request.Fecha_Inicio,
        Fecha_Termino: request.Fecha_Termino,
        id_Tipo_Proyecto: request.id_Tipo_Proyecto,
        Estatus: request.Estatus,
        id_Usuario_Rol: request.id_Usuario_Rol,
        id_Divisiones: request.id_Divisiones

    }).then(callback(true));
}

//revistas
postRevistas = function (request, callback) {
    Revistas.create({
        /* id_revista: request.id_revista, */
        nombre_revista: request.nombre_revista,
        id_tipo_revista: request.id_tipo_revista,
        isbn: request.isbn,
        issn: request.issn,
        latindex: request.latindex,
        numero_revista: request.numero_revista,
        volumen: request.volumen,
        año_publicacion: request.año_publicacion,
        pagina_inicio: request.pagina_inicio,
        pagina_fin: request.pagina_fin

    }).then(callback(true));
}


/*-----------------------------------------------------------put------------------------------------------------------*/

//putUsuarios
putUsuarios = function (request, callback) {
    Usuarios.findOne({ where: { id_Usuarios: request.id_Usuarios } }).then(function (usuarios) {
        usuarios.update({
            /* id_Usuarios: request.id_Usuarios, */
            Nombre: request.Nombre,
            Apellido: request.Apellido,
            Fecha_Nacimiento: request.Fecha_Nacimiento,
            CURP: request.CURP,
            id_Divisiones: request.id_Divisiones,
            email: request.email,
            contrasena: request.contrasena,
            id_pais: request.id_pais,
            id_estado: request.id_estado,
            id_municipio: request.id_municipio,
            id_cp: request.id_cp,
            id_colonia: request.id_colonia
        });
        callback(usuarios);
    });
}

//proyectos
putProyectos = function (request, callback) {
    Proyectos.findOne({ where: { id_Proyectos: request.id_Proyectos } }).then(function (proyectos) {
        proyectos.update({
            /* id_Usuarios: request.id_Usuarios, */
            Titulo: request.Titulo,
            id_Procedencia: request.id_Procedencia,
            id_Apoyo: request.id_Apoyo,
            id_linea_investigacion: request.id_linea_investigacion,
            id_Periodo: request.id_Periodo,
            Fecha_Inicio: request.Fecha_Inicio,
            Fecha_Termino: request.Fecha_Termino,
            id_Tipo_Proyecto: request.id_Tipo_Proyecto,
            Estatus: request.Estatus,
            id_Usuario_Rol: request.id_Usuario_Rol,
            id_Divisiones: request.id_Divisiones
        });
        callback(proyectos);
    });
}

/*-----------------------------------------------------------delete------------------------------------------------------*/

//deleteUsusarios
deleteUsuarios = function (id_Usuarios, callback) {
    Usuarios.findOne({ where: { id_Usuarios } }).then(function (usuarios) {
        if (usuarios != null) {
            usuarios.destroy().then(result => callback(result));
        } else {
            callback(null);
        }
    })
}

//proyectos
deleteProyectos = function (id_Proyectos, callback) {
    Proyectos.findOne({ where: { id_Proyectos } }).then(function (proyectos) {
        if (proyectos != null) {
            proyectos.destroy().then(result => callback(result));
        } else {
            callback(null);
        }
    })
}
















module.exports.init = init;

//get

module.exports.getPais = getPais;
module.exports.getEstado = getEstado;
module.exports.getEstadofk = getEstadofk;
module.exports.getMunicipio = getMunicipio;
module.exports.getMunicipiofk = getMunicipiofk;
module.exports.getCP = getCP;
module.exports.getCPfk = getCPfk;
module.exports.getColonia = getColonia;
module.exports.getColoniafk = getColoniafk;
module.exports.getUsuarios = getUsuarios;
module.exports.getUsuariosfk = getUsuariosfk;
module.exports.getApoyo = getApoyo;
module.exports.getCuerpoAcademico = getCuerpoAcademico;
module.exports.getDivisiones = getDivisiones;
module.exports.getFuenteFinanciera = getFuenteFinanciera;
module.exports.getLibros = getLibros;
module.exports.getProcedencias = getProcedencias;
module.exports.getPeriodos = getPeriodos;
module.exports.getRoles = getRoles;
module.exports.getTipoProyecto = getTipoProyecto;
module.exports.getTipoPublicacion = getTipoPublicacion;
module.exports.getTipoRevista = getTipoRevista;
module.exports.getLineaInvestigacion = getLineaInvestigacion;
module.exports.getUsuarioRol = getUsuarioRol;
module.exports.getUsuarioRolfk = getUsuarioRolfk;
module.exports.getProyectos = getProyectos;
module.exports.getProyectosfk = getProyectosfk;
module.exports.getRevistas = getRevistas;
module.exports.getRevistasfk = getRevistasfk;




//post
module.exports.postUsuarios = postUsuarios;
module.exports.postProyectos = postProyectos;
module.exports.postRevistas = postRevistas;



//put
module.exports.putUsuarios = putUsuarios;
module.exports.putProyectos = putProyectos;


//delete
module.exports.deleteUsuarios = deleteUsuarios;
module.exports.deleteProyectos = deleteProyectos;
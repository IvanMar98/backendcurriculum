const sequelize = require('./conexiondb'); 
const Apoyo = require('./tablas/apoyo');
const CuerpoAcademico = require('./tablas/cuerpo_academico');
const Divisiones = require('./tablas/divisiones');
const FuenteFinanciera = require('./tablas/fuente_financiera');
const Libros = require('./tablas/libros');
const Pais = require('./tablas/pais');
const Procedencias = require('./tablas/procedencias');

init = function(){
    sequelize.authenticate().then(()=>{
        console.log("Conexion establecida con mysql");
    }).catch(err =>{
        console.log("conexion no establecida", err);
    })
} 



getPais = function(callback){
    Pais.findAll().then(pais => callback(pais));
}
getApoyo = function(callback){
    Apoyo.findAll().then(apoyo => callback(apoyo));
}
getCuerpoAcademico = function(callback){
    CuerpoAcademico.findAll().then(cuerpo_academico => callback(cuerpo_academico));
}
getDivisiones = function(callback){
    Divisiones.findAll().then(divisiones => callback)
}
getFuenteFinanciera = function(callback){
    FuenteFinanciera.findAll().then(fuentefinanciera => callback)
}
getLibros= function(callback){
    Libros.findAll().then(libros => callback)
}
getProcedencias= function(callback){
    Libros.findAll().then(procedencias => callback)
}

module.exports.init = init;  



module.exports.getPais = getPais; 
module.exports.getApoyo = getApoyo;
module.exports.getCuerpoAcademico = getCuerpoAcademico;
module.exports.getDivisiones = getDivisiones;
module.exports.getFuenteFinanciera = getFuenteFinanciera;
module.exports.getLibros = getLibros;
module.exports.getProcedencias = getProcedencias;


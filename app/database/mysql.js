const sequelize = require('./conexiondb'); 
const Apoyo = require('./tablas/apoyo');
const CuerpoAcademico = require('./tablas/cuerpo_academico');
const Pais = require('./tablas/pais');
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
module.exports.init = init;  

module.exports.getPais = getPais; 
module.exports.getApoyo = getApoyo;
module.exports.getCuerpoAcademico = getCuerpoAcademico;
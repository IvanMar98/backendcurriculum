const sequelize = require('./conexiondb'); 
const Pais = require('./tablas/pais');
init = function(){
    sequelize.authenticate().then(()=>{
        console.log("Conexion establecida con mysql");
    }).catch(err =>{
        console.log("conexion no establecida", err);
    })
} 

getPais = function(callback){
    Pais.findAll().then(pais=>callback(pais));

}


module.exports.init = init;  

module.exports.getPais = getPais; 
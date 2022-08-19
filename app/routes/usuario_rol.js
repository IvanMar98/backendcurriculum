module.exports = function(app, mysql){
    app.get('/get/usuariorol',(request, response)=>{
        mysql.getUsuarioRol(function(result){
            response.send(result);
        })
    })

    app.get('/get/usuariorolfk',(request, response)=>{
        mysql.getUsuarioRolfk(function(result){
            response.send(result);
        })
    })
}
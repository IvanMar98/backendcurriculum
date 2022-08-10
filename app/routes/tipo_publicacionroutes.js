module.exports = function(app, mysql){
    app.get('/get/tipopublicacion',(request, response)=>{
        mysql.getTipoPublicacion(function(result){
            response.send(result);
        })
    })
}
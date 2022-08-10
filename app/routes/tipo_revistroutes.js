module.exports = function(app, mysql){
    app.get('/get/tiporevista',(request, response)=>{
        mysql.getTipoRevista(function(result){
            response.send(result);
        })
    })
}
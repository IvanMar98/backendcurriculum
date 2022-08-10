module.exports = function(app, mysql){
    app.get('/get/tipoproyecto',(request, response)=>{
        mysql.getTipoProyecto(function(result){
            response.send(result);
        })
    })
}
module.exports = function(app, mysql){
    app.get('/get/lineainvestigacion',(request, response)=>{
        mysql.getLineaInvestigacion(function(result){
            response.send(result);
        })
    })
}
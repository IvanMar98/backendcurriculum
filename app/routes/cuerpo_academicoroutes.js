module.exports = function(app, mysql){
    app.get('/get/cuerpoacademico',(request, response) =>{
        mysql.getCuerpoAcademico(function(result){
            response.send(result);
        })
    })
}
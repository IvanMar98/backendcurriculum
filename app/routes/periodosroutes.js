module.exports = function(app, mysql){
    app.get('/get/periodos',(request, response)=>{
        mysql.getPeriodos(function(result){
            response.send(result);
        })
    })
}
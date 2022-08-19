module.exports = function(app, mysql){
    app.get('/get/procedencias',(request, response)=>{
        mysql.getProcedencias(function(result){
            response.send(result);
        })
    })
}
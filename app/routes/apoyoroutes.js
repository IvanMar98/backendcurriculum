module.exports = function(app, mysql){
    app.get('/get/apoyo',(request, response)=>{
        mysql.getApoyo(function(result){
            response.send(result);
        })
    })
}
module.exports = function(app, mysql){
    app.get('/get/roles',(request, response)=>{
        mysql.getRoles(function(result){
            response.send(result);
        })
    })
}
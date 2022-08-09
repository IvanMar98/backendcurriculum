

module.exports=function(app, mysql){
    app.get('/get/pais',(request, response)=>{
        mysql.getPais(function(result){
            response.send(result);
        })
    })
}
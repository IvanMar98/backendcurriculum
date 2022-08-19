module.exports=function(app, mysql){
    app.get('/get/estado',(request, response)=>{
        mysql.getEstado(function(result){
            response.send(result);
        })
    })


    app.get('/get/estadofk',(request, response)=>{
        mysql.getEstadofk(function(result){
            response.send(result);
        })
    })
}


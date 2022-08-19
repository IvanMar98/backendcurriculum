module.exports=function(app, mysql){
    app.get('/get/CP',(request, response)=>{
        mysql.getCP(function(result){
            response.send(result);
        })
    })


    app.get('/get/CPfk',(request, response)=>{
        mysql.getCPfk(function(result){
            response.send(result);
        })
    })
}


module.exports=function(app, mysql){
    app.get('/get/colonia',(request, response)=>{
        mysql.getColonia(function(result){
            response.send(result);
        })
    })


    app.get('/get/coloniafk',(request, response)=>{
        mysql.getColoniafk(function(result){
            response.send(result);
        })
    })
}


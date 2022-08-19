module.exports=function(app, mysql){
    app.get('/get/municipio',(request, response)=>{
        mysql.getMunicipio(function(result){
            response.send(result);
        })
    })


    app.get('/get/municipiofk',(request, response)=>{
        mysql.getMunicipiofk(function(result){
            response.send(result);
        })
    })
}


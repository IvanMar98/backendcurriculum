module.exports = function(app, mysql){
    app.get('/get/proyectos',(request, response)=>{
        mysql.getProyectos(function(result){
            response.send(result);
        })
    })

    app.get('/get/proyectosfk',(request, response)=>{
        mysql.getProyectosfk(function(result){
            response.send(result);
        })
    })

    app.post('/post/postproyectos',(request,response)=>{
        mysql.postProyectos(request.body, function(result){
            response.send(result);
        })
    })

    app.put('/put/putproyectos',(request,response)=>{
        mysql.putProyectos(request.body, function(result){
            response.send(result);
        })
    })

    app.delete('/delete/deleteproyectos/:id_Proyectos',(request,response)=>{
        mysql.deleteProyectos(request.params.id_Proyectos, result =>{
            if(result != null){
                response.send(result);
            }else{
                res.status(400).send({message:"El usuario no se pudo borrar"});
            }
        })
    })
}
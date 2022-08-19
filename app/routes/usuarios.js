module.exports = function(app, mysql){
    app.get('/get/usuarios',(request, response)=>{
        mysql.getUsuarios(function(result){
            response.send(result);
        })
    })

    app.get('/get/usuariosfk',(request, response)=>{
        mysql.getUsuariosfk(function(result){
            response.send(result);
        })
    })

    app.post('/post/postusuarios',(request,response)=>{
        mysql.postUsuarios(request.body, function(result){
            response.send(result);
        })
    })

    app.put('/put/putusuarios',(request,response)=>{
        mysql.putUsuarios(request.body, function(result){
            response.send(result);
        })
    })

    app.delete('/delete/deleteusuarios/:id_Usuarios',(request,response)=>{
        mysql.deleteUsuarios(request.params.id_Usuarios, result =>{
            if(result != null){
                response.send(result);
            }else{
                res.status(400).send({message:"El usuario no se pudo borrar"});
            }
        })
    })
}
module.exports = function(app, mysql){
    app.get('/get/libros',(request, response)=>{
        mysql.getLibros(function(result){
            response.send(result);
        })
    })
}
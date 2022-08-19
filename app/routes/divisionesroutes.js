module.exports = function(app, mysql){
    app.get('/get/divisiones',(request, response)=>{
        mysql.getDivisiones(function(result){
            response.send(result);
        })
    })

   
}
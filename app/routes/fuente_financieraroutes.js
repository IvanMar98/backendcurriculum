module.exports = function(app, mysql){
    app.get('/get/fuentefinanciera',(request, response)=>{
        mysql.getFuenteFinanciera(function(result){
            response.send(result);
        })
    })
}
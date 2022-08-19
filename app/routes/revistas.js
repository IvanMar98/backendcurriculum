module.exports = function(app, mysql){
    app.get('/get/revistas',(request, response)=>{
        mysql.getRevistas(function(result){
            response.send(result);
        })
    })

    app.get('/get/revistasfk',(request, response)=>{
        mysql.getRevistasfk(function(result){
            response.send(result);
        })
    })

    app.post('/post/postrevistas',(request,response)=>{
        mysql.postRevistas(request.body, function(result){
            response.send(result);
        })
    })
}
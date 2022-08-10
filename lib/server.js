const express = require('express');
const mysql = require('../app/database/mysql'); 
const app  = express();
const port = 3000;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Servidor listo y escuchando en el puerto ${port}`)
    mysql.init();
});


require('../app/routes/paisroutes')(app, mysql);
require('../app/routes/apoyoroutes')(app,mysql);
require('../app/routes/cuerpo_academicoroutes')(app,mysql);
require('../app/routes/divisionesroutes')(app,mysql);
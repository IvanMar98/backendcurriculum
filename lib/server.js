const express = require('express');
const mysql = require('../app/database/mysql'); 
const app  = express();
const port = 3000;

require('dotenv').config();


app.use(express.json());

app.listen(port, ()=>{
    console.log(`Servidor listo y escuchando en el puerto ${port}`)
    mysql.init();
});


require('../app/routes/paisroutes')(app, mysql);
require('../app/routes/estadoroutes')(app, mysql);
require('../app/routes/municipio')(app, mysql);
require('../app/routes/codigopostal')(app, mysql);
require('../app/routes/colonia')(app, mysql);
require('../app/routes/apoyoroutes')(app,mysql);
require('../app/routes/cuerpo_academicoroutes')(app,mysql);
require('../app/routes/divisionesroutes')(app,mysql);
require('../app/routes/usuarios')(app,mysql);
require('../app/routes/fuente_financieraroutes')(app,mysql);
require('../app/routes/librosroutes')(app,mysql);
require('../app/routes/procedenciasroutes')(app,mysql);
require('../app/routes/periodosroutes')(app,mysql);
require('../app/routes/rolesroutes')(app,mysql);
require('../app/routes/tipo_proyectoroutes')(app,mysql);
require('../app/routes/tipo_publicacionroutes')(app,mysql);
require('../app/routes/tipo_revistroutes')(app,mysql);
require('../app/routes/linea_investigacion')(app,mysql);
require('../app/routes/usuario_rol')(app,mysql);
require('../app/routes/proyectos')(app,mysql);
require('../app/routes/revistas')(app,mysql);
require('../app/routes/login')(app);

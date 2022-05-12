const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

//========================================================
//      Indicar el motor de vistas
//========================================================
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
// configurar motor
app.set('views', './views');

//========================================================
//      Static Files
//========================================================
app.use(express.static(path.join(__dirname, 'public')));


//========================================================
//  MIDDLEWARES
//========================================================
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
    next();
});


//========================================================
//      ROUTES DE MI APP
//========================================================
app.get('/', (req, res) => {
    // Renderizar vista home
    res.render('home', {layout: 'main'});
});
app.use(require('./routes/usuarios.routes'));

//========================================================
//  EXPORTAR MODULO
//========================================================
module.exports = app;


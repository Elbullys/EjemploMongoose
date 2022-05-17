const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

//========================================================
//      CONFIGURACIONES DEL MOTOR DE VISTAS
//========================================================
const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.handlebars',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
});
app.engine('handlebars', hbs.engine);
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
app.use(require('./routes/admin.routes'));
app.use(require('./routes/productos.routes'));

//========================================================
//  EXPORTAR MODULO
//========================================================
module.exports = app;


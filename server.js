const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// HELPERS (hbs/helpers.js)

app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'kevin',
        //anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

/*

app.get('/', function (req, res) {
    //res.send('Hello World');
    let salida = {
        nombre: 'kevin',
        edad: 20,
        url: req.url
    };

    res.send(salida);

});

*/

/*

app.get('/data', (req, res) => {

    res.send('Hola Data');

});

*/

/*

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});

*/



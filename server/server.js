require('./config/config');

const { json } = require('express');  

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('HOLA MUNDO xD')
});

app.get('/usuario', (req, res) => {
    res.json('get Usuario')
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if(body.name === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    }else{
        res.json({
            persona: body
        })
    }
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Corriendo en puerto ' + process.env.PORT);
})
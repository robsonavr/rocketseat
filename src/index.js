const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb:localhost/database', {
    useNewUrlParser: true
});

app.use(require('./routes'));

const info = app.listen(3333);
console.log('Serviço rodandando %s:%s', info.address().address, info.address().port);
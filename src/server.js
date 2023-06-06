require('dotenv').config();
import express from 'express';
import configViewEngine from './configs/viewEngine';

// const path = require('path');
const app = express();
const port = 3000;

configViewEngine(app);
var message = {
    message: 'Hello json'
}

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.get('/json', (req, res) => {
    var messageTransform = process.env.MESSAGE_STYLE;
    if (messageTransform === 'uppercase') {
        message.message = message.message.toUpperCase();
        res.json(message);
        console.log(messageTransform);
        
    } else {
        res.json(message);
        console.log(process.env.MESSAGE_STYLE);

    }
})

app.listen(port, () => {
    console.log('ok');
})

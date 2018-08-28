const express = require('express');
const app = express();
const requestTime = require('./middlewares/requestTime.js');

const bird = require('./modules/bird/bird.router');


app.use('/route', requestTime);
app.use('/bird', bird);

app.get('/', function (req, res) {
    let responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
})

app.get('/route', function (req, res) {
    let responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
})

app.listen(3000, () => {
    console.log('3000 ok!');
});
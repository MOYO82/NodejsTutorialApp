const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    return res.send('I LOVE SOFTWARE PROGRAMMING');
});

app.get('/home', (req, res) => {
    return res.send('The Server is Running');
});

const user = [{
    name: 'Motunrayo',
    sex: 'Female',
    age: '40',
}]

app.get('/user', function(req, res) {
    res.json(user)
});


app.get('/ :id/user', (req, res) => {
    console.log(req.query)
    res.send('Hello World')
})

module.exports = app;

app.listen(4000, ()=> console.log(`server listerning on port: ${4000}`))

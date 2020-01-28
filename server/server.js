const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const dbModule = require('./config/db');

const app = express()
const port = 4000


dbModule.connectToDB();



app.get('/', (req, res) => res.send('Hello World!'))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v', router);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
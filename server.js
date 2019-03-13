const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./routes/api');
const port = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(bodyParser.json()); 
app.use('/api', api);

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
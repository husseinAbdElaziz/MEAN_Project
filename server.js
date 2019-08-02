const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./routes/api');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors({
    origin:"*"
}))
app.use(bodyParser.json()); 
app.use('/api', api);

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});


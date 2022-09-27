const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

let cors = require("cors");
app.use(cors());

const db = require('./config/mongoose');

app.use(express.json());
app.use('/', require('./routes'));

app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});

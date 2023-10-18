//backend has to use commonjs modules (NOT import ...)
const express = require('express');
//might have several express apps in one project, most projects will use single app object to set up configuration that listens for requests and routes them to handlers
const app = express();


app.get('/', (req, res) => {
    res.send({hi: 'there',
            "Mr": "Cub"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
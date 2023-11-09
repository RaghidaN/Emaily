//backend has to use commonjs modules (NOT import ...)
const express = require('express');
require('./services/passport');

//might have several express apps in one project, most projects will use single app object to set up configuration that listens for requests and routes them to handlers
const app = express();

//this require returns function, then immediately invoked with app passed in
require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT);
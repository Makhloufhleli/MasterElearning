const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.listen(5500, ()=> {
    console.log('server listening in port 5500!');
});

//import routes
const usersRoutes = require('./src/routes/users.route');
const homeRoute = require('./src/routes/home.route');

//parse request data content type  application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse request data content type application/json
app.use(bodyParser.json());

//create home route
app.use('/', homeRoute);

//create route for users
app.use('/api/v1/users', usersRoutes);




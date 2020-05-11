const express = require('express');
//initialize app
const app = express();
//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extends: true}));

// initialize routes
const weatherRoute = require('./routes/weather');


app.set('view engine', 'ejs')
app.use('/', weatherRoute);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log('Server started on port  :', PORT);
});
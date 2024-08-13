const express = require('express');
const app = express();

const path = require('path');
const user = require('./models/user');

// basic boiler plate --------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// boiler plate ends--------------------------------------------------------------

app.get('/', function (req, res) {
  res.send('helloooo');
});

app.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routing Files
const roomRoute = require('./routes/room');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// Route Setup
app.use('/api/room', roomRoute);

app.get('/', (req, res) => {
    res.render('../../public/index.html');
})

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

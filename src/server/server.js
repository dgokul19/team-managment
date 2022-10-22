const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require("socket.io");


// Import Routing Files
const roomRoute = require('./routes/room');

const app = express();
const io = new Server(app);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// Route Setup
app.use('/api/room',io,roomRoute);

app.get('/', (req, res) => {
    res.render('../../public/index.html');
})

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

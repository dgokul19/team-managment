const express = require('express');
const router = express.Router();

// Controller Files
const roomController = require('../controller/room/roomController');

/* POST  Create New Room. */
router.post('/create-room', roomController.createGameRoom);

module.exports = router;
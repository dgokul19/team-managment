const mongoose = require('mongoose');

const roomScehme = new mongoose.Schema({
  roomId: String,
  createdUser : String,
  votingSystem: String,
  showCardsBy: String,
  isTeamRestriced: Boolean,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RoomId', roomScehme);
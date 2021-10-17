const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost:27017/planningPoker')
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(`${"errors.dbConnection"} - ${err}`);
    process.exit();
  });
mongoose.Promise = global.Promise;

module.exports = {
  GameRoom: require('../model/GameRoom'),
};
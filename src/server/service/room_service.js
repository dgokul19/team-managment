const db = require("../util/Db");
const GameRoom = db.GameRoom;

const newRoomGeneration = async ( roomDetails ) => {
    const newRoom = new GameRoom(roomDetails);
    if(newRoom.save()){
        return { status : 'ok', data : newRoom };
    } else {
        return { status : 'bad', message : "Room Can't be created" };
    }
};  

module.exports = {
  newRoomGeneration
};
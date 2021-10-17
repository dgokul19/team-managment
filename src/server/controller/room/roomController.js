const { generateRoomId } = require('../../util/helper'); 
const GameroomService = require('../../service/room_service');
const roomStringLength = 20;
const createNewGameRoom = async (req, res) => {
    const params = req.body;
     params['roomId'] = generateRoomId(roomStringLength);
    const room = await GameroomService.newRoomGeneration(params);
    res.status(200).json(room);
};

module.exports = {
    createGameRoom : createNewGameRoom
};

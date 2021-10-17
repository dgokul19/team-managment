
module.exports = {
    generateRoomId: (stringLength = 20) => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < stringLength; i++) {
            result += characters.charAt(Math.floor(Math.random() *charactersLength));
        }
        return result;
    }
};
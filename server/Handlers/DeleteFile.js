const path = require('path');
const fs   = require('fs');

module.exports = (fileName, data) => {
    try {
        fs.unlinkSync(path.join(__dirname, `../Uploads/${fileName}`));
        return Promise.resolve(data);
    } catch(err) {
        return Promise.reject(err);
    }
    
}
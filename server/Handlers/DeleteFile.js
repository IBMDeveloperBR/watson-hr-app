const path = require('path');
const fs   = require('fs');

module.exports = (fileName) => {
    console.log(fileName);
    try {
        fs.unlinkSync(path.join(__dirname, `../Uploads/${fileName}`));
        return Promise.resolve();
    } catch(err) {
        return Promise.reject(err);
    }
    
}
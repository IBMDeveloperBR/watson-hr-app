const genUid = require('uid');
const path   = require('path');
const fs     = require('fs');

module.exports = (file) => {
        try{
            const fileName = genUid().toString() + '.pdf';
            fs.writeFileSync(path.join(__dirname, `../Uploads/${fileName}`), file.data, 'utf8')
            return Promise.resolve(fileName);
        } catch(err) {
            return Promise.reject(err);
        }
}
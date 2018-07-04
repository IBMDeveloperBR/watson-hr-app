const util = require('util');
const path = require('path');
const fs   = require('fs');

module.exports = (app, express) => {
    // const readDir = util.promisify(fs.readir);
    const dirFiles = fs.readdirSync(path.join(__dirname));
    dirFiles.forEach((file) => {
        if(file != 'index.js'){
            const fileModule = require(`./${file}`);
            app.use(fileModule.root, fileModule.routes(new express.Router));
        }
    });
}
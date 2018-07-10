const pdfUtil = require('pdf-to-text'); 
const path      = require('path');

module.exports = (fileName) => {
    return new Promise((resolve, reject) => {
        pdfUtil.pdfToText(path.join(__dirname, `../Uploads/${fileName}`), (err, data) => {
            if (err){
                reject(err);
            }
            resolve(data);    
        });
    });
};
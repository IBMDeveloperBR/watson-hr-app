const Watson = require('../Watson');
const Handlers = require('../Handlers');
const path = require('path');

module.exports = {
    root: '/api/personality',
    routes: (route) => {
        route.post('/upload', (req, res, next) => {
            const file = req.files.upload;
            const language = req.body.lang;
            Handlers.saveFile(file)
                .then((fileName) => {
                    Handlers.pdfToTxt(fileName)
                        .then(text => Watson.LanguageTranslator.translate(text, language))
                        .then(englishText => Watson.PersonalityInsights.getProfile(englishText))
                        .then(resultPersonality => Handlers.deleteFile(fileName, resultPersonality))
                        .then(resultPersonality => res.json({ status: 'Success', resultPersonality }))
                        .catch(err => res.status(500).json({ status: 'Bad Result', err: err }));
                })
                .catch((err) => res.json({status: 'Bad Result', err: err}))
        });

        route.post('/import', (req, res, next) => {
            const file = req.files.upload;
            res.json(JSON.parse(file.data.toString()));
        });

        route.get('/example-cv/:file', (req, res) => {
            res.download(path.join(__dirname, `../Uploads/${req.params.file}`));
        });
        return route;
    }
}
const Watson = require('../Watson');
const Handlers = require('../Handlers');

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
                        .catch((err) => res.json({ status: 'Bad Result', err: err }));
                })
                .catch((err) => res.json({status: 'Bad Result', err: err}))
        });
        route.post('/', (req, res, next) => {
            const body = req.body;
            const language = body.lang;
            Watson.PersonalityInsights.getProfile('Heello World')
                .then((data) => res.json({ status: 'OK', result: data }))
                .catch((err) => res.json({ status: 'Bad Result' }))
        });
        return route;
    }
}
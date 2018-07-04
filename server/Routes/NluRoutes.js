const Watson = require('../Watson');
module.exports = {
    root: '/nlu',
    routes: (route) => {
        route.post('/', (req, res, next) => {
            const body = req.body;
            const language = body.lang;
            Watson.NaturalLanguageUnderstanding.analyze('Belo Horizonte e Sao Paulo sao cidades do Brasil', language)
                .then((data) => res.json({som: 'OK', status: data}))
                .catch((err) => res.json({status: 'Bad Result', err: err}))
        });
        return route;
    }
}
const Watson = require('../Watson');
module.exports = {
    root: '/pi',
    routes: (route) => {
        route.post('/', (req, res, next) => {
            const body = req.body;
            const language = body.lang;
            Watson.PersonalityInsights.getProfile('Heello World')
                .then((data) => res.json({status: 'OK', result: data}))
                .catch((err) => res.json({status: 'Bad Result'}))
        });
        return route;
    }
}
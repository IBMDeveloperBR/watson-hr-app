const NaturalLanguageUnderstanding = require('watson-developer-cloud/natural-language-understanding/v1');

class NLUController{
    constructor(){
        this.nlu;
    }

    init(){
        try {
            this.nlu = new NaturalLanguageUnderstanding({
                username: process.env.WATSON_NLU_USERNAME,
                password: process.env.WATSON_NLU_PASSWORD,
                version_date: "2018-03-16"
            });
            return Promise.resolve();
        } catch(err) {
            return Promise.reject(err);
        }
    }

    async analyze(content=null){
        try {
            await this.init();
            const params = {
                text: content,
                content_type: 'text/plain',
                language: 'pt',
                features: {
                    entities: {
                        sentiment: true
                    },
                    sentiment: {},
                    categories: {},
                    keywords: {}
                }
            }
            return new Promise((resolve, reject) => {
                this.nlu.analyze(params, (err, result) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        } catch(err) {
            return Promise.reject(err);
        }
    }
}

module.exports = new NLUController()
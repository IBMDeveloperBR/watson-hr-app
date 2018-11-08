const LanguageTranslator  = require('watson-developer-cloud/language-translator/v3');

class LanguageTranslatorController{
    constructor(){
        this.watsonTranslator;
    }

    init(){
        try {
            this.watsonTranslator = new LanguageTranslator({
                username: process.env.WATSON_TRANSLATOR_USERNAME,
                password: process.env.WATSON_TRANSLATOR_PASSWORD,
                url: "https://gateway.watsonplatform.net/language-translator/api",
                version: '2018-05-01'
            });
            return Promise.resolve();
        } catch(err) {
            return Promise.reject(err);
        }
    }

   async translate(text, sourceLanguage){
        try {
            await this.init();
            var params = {
                text: text,
                model_id: `${sourceLanguage}-en`
            };
            return new Promise((resolve, reject) => {
                if(sourceLanguage == 'en'){
                    resolve(text);
                }
                this.watsonTranslator.translate(params, (err, result) => {
                    if(result && result.translations && result.translations[0]){
                        return resolve(result.translations[0].translation);
                    } else if(err) {
                        return reject(err);
                    } else {
                        return reject();
                    }
                });
            });
        } catch(err) {
            return Promise.reject(err);
        }
    }
}

module.exports = new LanguageTranslatorController()
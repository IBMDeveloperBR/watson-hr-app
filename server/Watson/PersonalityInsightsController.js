const PersonalityInsights = require('watson-developer-cloud/personality-insights/v3');

class PersonalityInsightsController{
    constructor(){
        this.watsonPersonalityInsights;
    }

    init(){
        try {
            this.watsonPersonalityInsights = new PersonalityInsights({
                username: process.env.WATSON_PERSONALITY_INSIGHTS_USERNAME,
                password: process.env.WATSON_PERSONALITY_INSIGHTS_PASSWORD,
                version_date: "2017-10-13"
            });
            return Promise.resolve();
        } catch(err) {
            return Promise.reject(err);
        }
    }

    async getProfile(content=null){
        try {
            await this.init();
            const params = {
                content: content,
                content_type: 'text/plain',
                consumption_preferences: true,
                raw_scores: true,
                accept_language: 'pt-br'
            }
            return new Promise((resolve, reject) => {
                this.watsonPersonalityInsights.profile(params, (err, result) => {
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

module.exports = new PersonalityInsightsController()
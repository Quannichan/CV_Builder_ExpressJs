const openAIModel = require("../models/openAIModel");

class openAIController{

    async Service(req, res){
        try{
            await new openAIModel().Service(req, res);
        }catch(err){
            console.log(err);
            res.json({
                status: 2005
            });
        }
    }

}

module.exports = openAIController;
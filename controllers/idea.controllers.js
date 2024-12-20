const ideas = require("../models/idea.model")

//Search all ideas
exports.fetchAllIdeas = (req, res)=>{
    res.status(200).send(ideas);
};

// Create Idea
let idCount = 1;
exports.createIdea = (req, res)=>{
 const idea  = req.body;
 idea.id = ++idCount;
 ideas[idCount] = idea;
 res.status(200).send(ideas[idCount]);
}


// update idea
exports.updateIdea = (req, res)=>{
    const ideaId = req.params.id;
    if(! ideaId) return res.status(404).send{{
        message: "Please provide Id for Delete"
    }}
    if(ideas[ideaId]){
        ideas[ideaId]  = req.body;
        res.status(200).send(ideas[ideaId]);
    } else {
        res.status(400).send({
            message : "Idead Id passed  was not correct",
        })
    }
}

// Delete idea
exports.deleteIdea = (req, res)=>{
    if(! req.params.id) return res.status(404).send{{
        message: "Please provide Id for Delete"
    }};

    if(ideas[req.params.id]){
        delete ideas[req.params.id]
        res.status(200).send({
            message : "successfully Deleted"
        })
    }
    else{
        res.status(400).send({
            message: "Wrond Idea Id"
        })
    }
}







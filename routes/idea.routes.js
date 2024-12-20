const { fetchAllIdeas, createIdea, updateIdea, deleteIdea } = require("../controllers/idea.controllers");

module.exports = (app)=>{
    app.get("/ideaApp/v1/ideas",  fetchAllIdeas);
    app.post("/ideaApp/v1/ideas", createIdea);
    app.put("/ideaApp/v1/ideas/:id", updateIdea)
    app.delete("/ideaApp/v1/ideas/:id", deleteIdea)

};




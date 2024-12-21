const { fetchAllIdeas, createIdea, updateIdea, deleteIdea, createIdeaPage, homePage, updateIdeaPage, deleteIdeaPage } = require("../controllers/idea.controllers");

module.exports = (app) => {
    app.get("/",  homePage )
    app.get("/ideaApp/v1/ideas/create", createIdeaPage)
    app.get("/ideaApp/v1/ideas/update/:id",updateIdeaPage )
    app.get("/ideaApp/v1/ideas/delete/:id", deleteIdeaPage)
    app.get('/ideaApp/v1/ideas', fetchAllIdeas); // Fetch all ideas
    app.post('/ideaApp/v1/ideas', createIdea); // Create a new idea
    app.put('/ideaApp/v1/ideas/:id', updateIdea); // Update an existing idea by ID
    app.delete('/ideaApp/v1/ideas/:id', deleteIdea); // Delete an idea by ID
};





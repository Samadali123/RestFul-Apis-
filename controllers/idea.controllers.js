// const ideas = require("../models/idea.model")

// //Search all ideas
// exports.fetchAllIdeas = (req, res)=>{
//     res.status(200).send(ideas);
// };

// // Create Idea
// // Assuming `idCount` and `ideas` are defined globally or within a module
// let idCount = 0; // Initialize id counter

// exports.createIdea = (req, res) => {
//   const { idea_name, author_name, description } = req.body;

//   // Validate the request body
//   if (!idea_name || !author_name || !description) {
//     return res.status(400).json({ message: "Please provide all required details to create an idea." });
//   }

//   // Create a new idea object
//   const idea = {
//     id: ++idCount,
//     idea_name,
//     author_name,
//     description,
//   };

//   // Store the idea in the ideas object
//   ideas[idCount] = idea;

//   // Respond with the newly created idea
//   return res.status(201).json({ message: "Idea created successfully!", idea });
// };



// // update idea
// exports.updateIdea = (req, res) => {
//     const ideaId = req.params.id;
  
//     // Validate the idea ID
//     if (!ideaId) {
//       return res.status(400).json({ message: "Please provide an idea ID to update." });
//     }
  
//     // Check if the idea exists
//     const idea = ideas[ideaId];
//     if (!idea) {
//       return res.status(404).json({ message: "The idea ID provided does not exist." });
//     }
  
//     // Validate the request body
//     if (!req.body || Object.keys(req.body).length === 0) {
//       return res.status(400).json({ message: "Please provide data to update the idea." });
//     }
  
//     // Update only the provided fields
//     const updatedIdea = {
//       ...idea, // Keep existing fields
//       ...req.body, // Overwrite with provided fields
//     };
  
//     // Save the updated idea
//     ideas[ideaId] = updatedIdea;
  
//     // Respond with the updated idea
//     return res.status(200).json({
//       message: "Idea updated successfully!",
//       idea: updatedIdea,
//     });
//   };
  

// // Delete idea
// exports.deleteIdea = (req, res)=>{
//     if(! req.params.id) return res.status(404).send({message: "Please provide Id  Delete the Idea"})
    
//     if(ideas[req.params.id]){
//         delete ideas[req.params.id]
//         res.status(200).send({
//             message : "successfully Deleted"
//         })
//     }
//     else{
//         res.status(400).send({
//             message: "Wrond Idea Id"
//         })
//     }
// }



const  ideas = require("../models/idea.model")
const crypto = require("crypto");

exports.homePage = (req, res)=>{
  try {
    const ideasArray = Object.values(ideas);
  // Render the 'index' view and pass the array of ideas
  res.render('index', { ideas: ideasArray });
  } catch (error) {
     res.status(500).send({message: "Error in rendering page"})
  }
}

exports.fetchAllIdeas = (req, res) => {
 try {
   // Convert ideas object to an array if necessary
   const ideasArray = Object.values(ideas);
   // Render the 'index' view and pass the array of ideas
   res.render('index', { ideas: ideasArray });
 } catch (error) {
   res.status(500).send({message: " Error in rendering page"})
 }
};

exports.createIdeaPage = (req, res) => {
 try {
  res.render("create")
 } catch (error) {
   res.status(500).send({message: "Error in rendering page"})
 }
}

exports.updateIdeaPage = (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request parameters

    // Check if the idea exists in the ideas collection
    const idea = ideas[id];
    if (!idea) {
      return res.status(404).send("Idea not found.");
    }

    // Render the "update" page with the idea details
    res.render("update", { idea });
  } catch (error) {
    res.status(500).send("Error in rendering page");
  }
};


exports.deleteIdeaPage = (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request parameters

    // Check if the idea exists in the ideas collection
    const idea = ideas[id];
    if (!idea) {
      return res.status(404).send("Idea not found.");
    }

    // Render the "delete" page with the idea details
    res.render("delete", { idea });
  } catch (error) {
    res.status(500).send("Error in rendering page");
  }
};



exports.createIdea = (req, res) => {
  try {
    const { idea_name, author_name, description } = req.body;

    // Validate input fields
    if (!idea_name || !author_name || !description) {
      return res.status(400).send("All fields are required.");
    }

    // Generate a random unique ID for the idea
    const id = crypto.randomUUID();

    // Create a new idea object
    const idea = {
      id,
      idea_name,
      author_name,
      description,
    };

    // Add the new idea to the ideas object
    ideas[id] = idea;

    // Redirect to the list of ideas
    res.redirect('/');
  } catch (error) {
    res.status(500).send("An error occurred while creating the idea.");
  }
};

exports.updateIdea = (req, res) => {
  try {
    const ideaId = req.params.id;
  if(! ideaId) return res.status(404).send({message: "Please provide Idea Id for update"})
  const idea = ideas[ideaId];
  
  ideas[ideaId] = { ...idea, ...req.body };
  res.redirect('/');
  } catch (error) {
     res.status(500).send({message: "Error in updating idea"})
  }
};

exports.deleteIdea = (req, res) => {
  try {
    const ideaId = req.params.id;
  if(! ideaId) return res.status(404).send({message: "Please provide Idea Id for update"})
  delete ideas[ideaId];
  res.redirect('/');
  } catch (error) {
     res.status(500).send({message: "Error in deleting the idea"})
  }
};



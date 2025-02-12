
// Use Express Framework & Body-Parser & Task Model
const express = require("./../src/node_modules/express");
const body_parser = require("./../src/node_modules/body-parser");
const Task = require("./../models/Task");
const PORT = 3000;


// Create API & Single Router
const app = express();


// Use Body-parser & Router
app.use(body_parser.json());



// Create POST Method
app.post("/api/tasks", async (request, response) => {

    console.log("--------------------------------------------------------");
    console.log("🕵️‍♀️ Request Comme From Postman [GET Method]");
    const task = new Task({
        _id: request.body._id, // can not change the Id (primary key)
        title: request.body.title,
        description: request.body.description,
        status: request.body.status,
        completed: request.body.completed
    });
    // const task = new Task(request.body);
    
    // Save data on Database --> Task Model
    try {
        console.log(task);
        const AddedTask = await task.save();
        response.status(200).send({message: "💾 Sucess Saving Data"});
        console.log("💾 Sucess Saving Data");
    } catch (error) {
        console.log("❌ Can not save data to Database" + error);
        response.status(500).send({message: "❌ Failed Saving Data"});
    }

});



// Create GET Method
app.get("/api/tasks", async (request, response) => {

    console.log("--------------------------------------------------------");
    console.log("🕵️‍♀️ Request From Postman [GET Method]");
    try {
        const tasks = await Task.find({completed: true});
        console.log(tasks);
        response.status(200).send({message: "✅ Get Data Succefully"});
        console.log("✅ Get Data Succefully");
    } catch (error) {
        console.log("❌ Failed Getting Data");
        console.log("❌ Failed Getting Data");
    }

});



// Create Post Method
app.put("/api/tasks/:id", async (request, response) => {
    
    console.log("--------------------------------------------------------");
    console.log("🕵️‍♀️ Request From Postman [PUT Method]");
    const id = Number(request.params.id);
    const newTask = request.body;
    try {
        const UpdatedData = await Task.findByIdAndUpdate(id, newTask);
        response.status(200).send({message: "✅ Data Updated Succefully"});
        console.log("✅ Data Updated Succefully");
    } catch (error) {
        console.log("❌ Failed Updating Data" + error);
        response.status(500).send({message: "❌ Failed Updating Data"});
    }

});



// Create Delete Method
app.delete("/api/tasks/:id", async (request, reponse) => {

    console.log("--------------------------------------------------------");
    console.log("😐 Request From Postman [DELETE Method]");
    const id = request.params.id;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        console.log("Sucess Deleting Data");
        reponse.status(500).send({message: "✅ Sucess Deleting Data"});
    } catch (error) {
        console.log("❌ Failed Deleting Data" + error);
        reponse.status(500).send({message: "❌ Failed Deleting Data"});
    }

});


// Make API Active
app.listen(PORT, () => {
    console.log("🚀 API listening to Port 🌐 " + PORT);
});



// Export All Routes
module.exports = app;


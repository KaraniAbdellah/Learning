// Connect to Database
// localhost & 127.0.0.1 id loopback address to your local machine
const mongoose = require("../src/node_modules/mongoose/types");
const DATABASE_URI = "mongodb://127.0.0.1:27017/test";


// Create Schema (define tha format of the data that will store in DATABASE)
const Schema = new mongoose.Schema({
    _id: Number,
    product_name: {
        type: String,
        required: true
    },
})

// Create New Collection at DATABASE
const Product = mongoose.model("product_data", Schema);

// Connect is Promise (Success || Failed)
mongoose.connect(DATABASE_URI).then(() => {
    console.log("Connect to Database Succefully");
}).catch((err) => {
    console.log("Failed Connecting to Database");
});



// Create API that has http methods (GET, POST, DELETE, PUT)
const app = require("../src/node_modules/express");
const body_parser = require("../src/node_modules/body-parser");
const api = app();
const PORT = 3000; // Default Port of Express


// Use Body-parser to convert HTTP body to jSon format
api.use(body_parser.json());


// Create Routes
api.post("/post/", async (request, response) => {
    console.log("Request Comme Succefully From Postman [POST]");

    let id = 5;
    // Save Data to Database
    const new_product = new Product({
        _id: id,
        product_name: request.body.name,
    });
    console.log(new_product);
    try {
        const result = await new_product.save(); // save data && wait database finich savings
        response.send({ message: "Data Saved Successfully" }); // send response to Postman
    } catch (err) {
        response.status(500).send({ message: "Can not save data on Database" });
    }
});



api.get("/get", (request, response) => {
    console.log("Request Comme Succefully From Postman [GET]");

    Product.find().then(products => {
        response.json(products);
        console.log("🎉 The Products are: \n", products);
    }).catch(err => {
        console.error(err);
        response.status(500).json({ error: 'Internal Server Error' });
    });
});




/*
    We can use /delete/:id --> id will pass in URL in postman
        we capture the ID by: request.pamars.id
        use findByIdAndDelete(id) to delete the object from Database
*/
api.delete("/delete", async (request, response) => {
    console.log("Request Comme Succefully From Postman [DELETE]");

    let product_number = 1;
    let products = await Product.find();
    console.log(products.length);
    if (products.length) {
        try {
            const id = products[product_number - 1]._id.toString();
            const DeletedProduct = await Product.findByIdAndDelete(id);
            response.status(200).send({message: "Data Deleted Succefylly"});
            console.log("Data Deleted Succefylly");
        } catch (error) {
            console.log("Can Not Save the Data");
            response.status(500).send({message: "Data Doesn't Deleted"});
        }
    } else {
        console.log("No Product in Database");
        response.status(500).send({message: "No product in File"});
    }
});

api.delete("/delete/:id", async (request, response) => {
    console.log("Request Comme Succefully From Postman [DELETE]");

    let products = await Product.find();
    let id = request.params.id;
    console.log(products.length);
    if (products.length) {
        try {
            const DeletedProduct = await Product.findByIdAndDelete(id);
            response.status(200).send({message: "Data Deleted Succefylly"});
            console.log("Data Deleted Succefylly");
        } catch (error) {
            console.log("Can Not Save the Data");
            response.status(500).send({message: "Data Doesn't Deleted"});
        }
    } else {
        console.log("No Product in Database");
        response.status(500).send({message: "No product in File"});
    }
});




api.put("/put", async (request, response) => {
    console.log("Request Comme Succefully From Postman [PUT]");

    let product_number = 1;
    let products = await Product.find();
    if (products.length) {
        try {
            const id = products[product_number - 1]._id.toString();
            let UpdatedProduct = await Product.findByIdAndUpdate(id, {
                product_id: 2,
                product_name: "Ahmed",
            });
            console.log("Product Updated Succefully");
            response.status(200).send({message: "Product Updated Succefully"});
        } catch (error) {
            console.log("Failed Updated Product");
            response.status(500).send({message: "Failed Updated Product"});
        }
    } else {
        console.log("No Product in Database");
        response.status(500).send({message: "No Product in Database"})
    }
});




// Make Server Active on Port 3000
api.listen(PORT, (err) => {
    if (err) console.log("Server Does not listning on port " + PORT);
    else console.log("Server listening to port " + PORT);
});






// module.exports = router;
// app.use('/get', userRoutes);






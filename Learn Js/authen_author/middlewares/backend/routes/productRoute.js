import express from "express";


// Let's Create A Router
const productRoute = express.Router();


// @desc This Route For Practice Req.query
// @access Public
// @route addProduct POST /product/addProduct
productRoute.post("/addProduct",     (req, res) => {
    console.log(req.query);
    console.log(req.query.product_name);
    console.log(req.query.price);
    res.status(200).send(req.query);
});


export default productRoute;
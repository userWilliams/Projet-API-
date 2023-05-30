const {products}= require("../model/products")
const products = require("../bd/connect");
const { ObjectId } = require("mongodb");

const addProduct = async(req,res)=>{
try{
let products = new products(
    req.body.id,
     req.body.name,
     req.body.category,
     req.body.price);
let result = await products.bd().collection("products").insertOne(products);
res.status(200).json(result);
}catch(error){
console.log(error);
res.status(500).json(error);
}
}

const getAllProducts = async (req, res)=>{
    try{
        let cursor = products.bd().collection("products").find();
        let result = await cursor.toArray();
        if(result.length>0){
            res.status(200).json(result);
        }else{
           res.status(205).json({msg:"aucun product enregistrer"}) 
        }
    } catch(erreur){
console.log(error);
res.status(500).json(error);
    }
}

const getProduct = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id);
        let cursor = products.bd().collection("products").find({_id:id});
        let result = await cursor.toArray();
        if(result.length>0){
            res.status(200).json(result[0]);
        }else{
           res.status(205).json({msg:"ce product n'est pas retrouver"}) 
        }
    } catch(erreur){
console.log(error);
res.status(500).json(error);
    }
}

const UpadateProduct = async (req,res)=>{
try{
let id = new ObjectId(req.params.id);
let newName = req.body.name;
let newCategory = req.body.category;
let newPrice = req.body.price;
let result = await products
products.bd().collection("products").updateOne(
    {_id:id},
    {$set:{name:newName}},
    {$set:{category:newCategory}},
    {$set:{price:newPrice}},
    );
    res.status(200).json(result);
}catch(error){
console.log(error)
res.status(500).json(error);
}
}

const DELETEProduct = async (req,res)=>{
    try{
    let id = new ObjectId(req.params.id);
    let result = await products
    products.bd().collection("products").deleteOne(
        {_id:id},
        );
        res.status(200).json(result);
    }catch(error){
    console.log(error)
    res.status(500).json(error);
    }
    }
module.exports = {
    addProduct,
    getAllProducts,
    getProduct,
    UpadateProduct,
    DELETEProduct};
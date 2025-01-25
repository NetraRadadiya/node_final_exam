const express=require("express");
const { GTodo, CTodo, DTodo, UTodo } = require("../controllers/todo.controller");


const ToRoutes=express.Router()

ToRoutes.get("/gtodo",GTodo)
ToRoutes.post("/ctodo",CTodo)
ToRoutes.patch("utpdo/:id",UTodo)
ToRoutes.delete("dtodo/:id",DTodo)


module.exports=ToRoutes



const express=require("express")
require("dotenv").config()
const connection = require("./db")
const ToRoutes = require("./routes/todo")


const app=express()
app.use(express.json())
app.use("/todo",ToRoutes)

app.listen(process.env.PORT,()=>{
    try {
        connection
         console.log(`Server is running at ${process.env.PORT}`)
         console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
})
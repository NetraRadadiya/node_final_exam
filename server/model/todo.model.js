const mongoose=require("mongoose");
const Toschema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
      }
})

const Tomodel=mongoose.model("ToData",Toschema)

module.exports=Tomodel
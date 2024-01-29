
// const express=require("express");
const mongoose=require("mongoose");
// const app= express();
mongoose.connect("mongodb://localhost:27017/Game",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log(Error);
})
const logindesgin=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
   Pass:{
        type:String,
        required:true
    }       
    
});
const collection = new mongoose.model("Sign",logindesgin);
module.exports=collection;
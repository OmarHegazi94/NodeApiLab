let mongoose=require("mongoose");

//1- create schema
let departmentSchema=new mongoose.Schema({
     _id:Number,
    name:String
});


//mapping 
mongoose.model("departments",departmentSchema);
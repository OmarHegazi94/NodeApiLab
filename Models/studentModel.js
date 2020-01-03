let mongoose=require("mongoose");

//1- create schema
let studentSchema=new mongoose.Schema({
     _id:Number,
    name:String,
    department:{type:Number,ref:"departments"}
});


//mapping 
mongoose.model("students",studentSchema);
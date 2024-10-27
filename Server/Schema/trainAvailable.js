const mongoose=require("mongoose");

const trainSchema= new mongoose.Schema({
    train_id:{
        type:Number,
        required:true
    },
    train_name:{
        type:String,
        required:true
    },
    departure:{
        type:String,
        required:true
    },
    arrival:{
        type:String,
        required:true
    }
});

const trainAvail=mongoose.model("Train_Available",trainSchema);
module.exports=trainAvail;
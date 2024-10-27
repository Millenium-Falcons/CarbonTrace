const mongoose=require("mongoose");

const trainData= new mongoose.Schema({
    train_id:{
        type:Number,
        required:true
    },
    train_weight:{
        type:Number,
        required:true
    },
    train_arrival:{
        type:Date,
        required:true
    }
});

const train=mongoose.model("Train_Data",trainData);
module.exports=train;
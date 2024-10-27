const mongoose=require("mongoose");

const moistureSchema=new mongoose.Schema({
    train_id:{
        type:String,
        required:true
    },
    moisture_level:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        required:true
    }
});

const moisture=mongoose.model("moisture_data",moistureSchema);
module.exports=moisture
const mongoose = require("mongoose");

const anomalyNotifySchema = new mongoose.Schema({
  train_id:{
    type:Number,
    required:true
  },
  date: {
    type: Date,
    required: true,
  },
  anomaly_details:{
    type:String,
    required:true
  }
});
const AnomalyNotify=mongoose.model("AnomalyNotify", anomalyNotifySchema);
module.exports =AnomalyNotify
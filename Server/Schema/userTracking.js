const mongoose = require("mongoose");

const trackingStatusSchema = new mongoose.Schema({
  train_id: { 
    type: String,
    required: true
  },
  username: { 
    type: String, 
    required: true
  },
  isTracking: { 
    type: Boolean,
    required: true,
    default: false // Set default value to false
  }
});


const UserTracking= mongoose.model("TrackingStatus", trackingStatusSchema);
module.exports=UserTracking

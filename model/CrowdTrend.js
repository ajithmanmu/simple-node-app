var mongoose = require('mongoose');

var CrowdTrend = mongoose.model('CrowdTrend',{
  crowdcount:{
        type: Number,
        default: null
  },
  spotid:{
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  timestamp:{
    type: Date,
    default: null
  }
});


module.exports = {CrowdTrend};

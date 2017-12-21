var mongoose = require('mongoose');

var SpotReports = mongoose.model('SpotReports',{
  maxHeight:{
        type: Number,
        default: null
  },
  minHeight:{
    type: Number,
    default: null
},
  spot:{
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  createdAt:{
    type: Date,
    default: null
  }
}, 'SpotReports');


module.exports = {SpotReports};

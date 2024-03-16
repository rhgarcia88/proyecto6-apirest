const mongoose = require('mongoose');

const streamerSchema = new mongoose.Schema({
  imgUrl:{type: String, required: true},
  name: {type: String, required: false},
  alias: {type: String, required: true},
  followers: {type: Number, required: false},

},{
  timestamps:true,
  collection:"streamers"
});

const Streamer = mongoose.model('streamers',streamerSchema,"streamers");
module.exports = Streamer;
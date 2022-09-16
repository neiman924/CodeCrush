const { Schema, model } = require('mongoose');
 
const UserMatchSchema = new Schema({
 UserID: {
    type: String,
    trim: true,
  },
  Matched: {
    type: String,
    trim: true,
  }
});

const Match = model('match', UserMatchSchema);

module.exports = Match;

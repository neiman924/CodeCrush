const { Schema, model } = require('mongoose');
 
const UserPassSchema = new Schema({
 UserID: {
    type: String,
    trim: true,

  },
  UsersPassed: {
    type: String,
    trim: true,
  }
});

const Pass = model('pass', UserPassSchema);

module.exports = Pass;

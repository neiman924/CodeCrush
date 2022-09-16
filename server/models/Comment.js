 const { Schema, model } = require('mongoose');
 const dateFormat = require('../utils/dateFormat');
 
 const commentSchema = new Schema({
  comment: {
     type: String,
     required: 'You need to leave a comment!',
     minlength: 1,
     maxlength: 280,
     trim: true,
   },
   name: {
     type: String,
     required: false,
     trim: true,
   },
   date_created: {
     type: Date,
     default: Date.now,
     get: (timestamp) => dateFormat(timestamp),
   },
   email: {
    type: String,
    required: false,
    trim: true,
  },
 });
 
 const Comment = model('Comment', commentSchema);
 
 module.exports = Comment;
 
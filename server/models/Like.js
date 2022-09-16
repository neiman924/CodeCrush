 const { Schema, model } = require('mongoose');
 
 const UserLikeSchema = new Schema({
  userid: {
     type: String,
     trim: true,

   },
   usersliked: {
     type: String,
     trim: true,
   }
 });
 
 const Like = model('like', UserLikeSchema);
 
 module.exports = Like;
 
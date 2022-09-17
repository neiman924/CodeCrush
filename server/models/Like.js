 const { Schema, model } = require('mongoose');
 
 const UserLikeSchema = new Schema({
  UserID: {
     type: String,
     trim: true,

   },
   UsersLiked: {
     type: String,
     trim: true,
   }
 });
 
 const Like = model('like', UserLikeSchema);
 
 module.exports = Like;
  
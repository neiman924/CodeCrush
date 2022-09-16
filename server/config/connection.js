// const mongoose = require('mongoose');

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/code-crush',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// module.exports = mongoose.connection;


var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://googlebooks:googlebooks@cluster0.z6ecx7d.mongodb.net/code-crush?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
module.exports = mongoose.connection;

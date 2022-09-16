const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    permission: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Like',
      }
    ],
    passed: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pass',
      }
    ],
    matches: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Match',
      },
    ],
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('user',userSchema);

module.exports = User;

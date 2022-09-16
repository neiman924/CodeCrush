const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Like, Pass, Match } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { firstName, lastName }) => {
      return User.findOne({ firstName, lastName });
    },
    comments: async () => {
      return Comment.find();
    },
    users: async() => {
      return User.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
    getLikes: async () => {
      return Like.find();
    },
    Likes: async (parent, {UserID}) => {
      return Like.findOne(UserID);
    },
    Matches: async (parent, {UserID}) => {
      return Match.findOne(UserID);
    },
    Passes: async () => {
      return Pass.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };

    },

    //contact us 
    addComment: async (parent, { comment,name,email }) => {
      const comments = await Comment.create({comment,name,email});
      return { comments };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addLike: async (parent, { UserID,UsersLiked  }) => {
      const likes = await Like.create({UserID,UsersLiked});
      return { likes };
      },

    addPass: async (parent, { UserID,UsersPassed  }) => {
      const passes = await Pass.create({UserID,UsersPassed});
      return { passes };
      },

    addMatch: async (parent, { UserID,Matched  }) => {
      const matches = await Match.create({UserID,Matched});
      return { matches };
      },
    }
};

module.exports = resolvers;

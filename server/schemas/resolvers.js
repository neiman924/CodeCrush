const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Like, Pass, Match } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
    singleUser: async (parent, { email }) => {
      return await User.findOne(email);
    },
    comments: async () => {
      return Comment.find();
    },
    users: async() => {
      return User.find();
    },
    Likes: async (parent, UserID) => {
      return Like.find(UserID);
    },
    Matches: async (parent, UserID) => {
      return Match.find(UserID);
    },
    Passes: async (parent, UserID) => {
      return Pass.find(UserID);
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

    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findByIdAndUpdate(context.user._id, args, {
    //       new: true,
    //     });
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },

    updateUser: async (parent, { id, args }) => {
      return await Class.findOneAndUpdate({ _id: id }, { args });
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
    findLikes: async (parent, UserID) => {
      return await User.find(UserID);
    },
    Likes: async (parent, UserID) => {
      return Like.find(UserID);
    },
    Matches: async (parent, UserID) => {
      return Match.find(UserID);
    },
    Passes: async (parent, UserID) => {
      return Pass.find(UserID);
    },
    }
};

module.exports = resolvers;

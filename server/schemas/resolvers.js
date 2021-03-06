const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    userData: async (parent, { _id } ) => {
        return await User.findById( _id )
        }
    },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { _id, book }) => {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { $push: { savedBooks: book } },
            { new: true }
          );
  
          return updatedUser;

      },
      removeBook: async (parent, {_id, bookId }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            _id,
            { $pull: { savedBooks: { bookId } } },
          );
  
          return updatedUser;
        }
  
      },
  },
};


module.exports = resolvers;

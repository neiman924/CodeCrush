const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    name: String
    permission: Boolean
    email: String
    password: String
    age: String
    gender: String
    pic: String
  }
  type Like {
    _id: ID
    UserID: String
    UsersLiked: String
  }
  type Pass {
    _id: ID
    UserID: String
    UsersPassed: String
  }
  type Match {
    _id: ID
    UserID: String
    Matched: String
  }

  type UserProfile {
    _id: ID
    firstName: String
    lastName: String
    email: String
    age: Int
    location: String
    work: String
    looking_for: String
    favorite_language: [String]
    likes: [User]
    passed: [User]
  }

  type Comment {
    _id: ID
    comment: String
    name: String
    date_created: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  input userSwipe {
    _id: ID
    firstName: String
    lastName: String
    age: Int
    location: String
    work: String
    favorite_language: [String]
  }

  input userMatch {
    _id: ID
    firstName: String
    lastName: String
    age: Int
    email: String
    location: String
    work: String
    favorite_language: [String]
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    singleUser(_id: ID!): User!
    me: User
    comments: [Comment]
    Likes(UserID: String): [Like]
    getLikes:[Like]
    Passes(UserID: String): [Pass]
    Matches(UserID: String): [Match]
  }

  type Mutation {
    addProfile(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      age: Int!
      location: String!
      looking_for: String!
      work: String
    ): Auth
    
    addUser(name: String!, email: String!, password: String!,permission: Boolean, age: String, gender: String, pic:String): Auth
      
    updateUser(_id: ID!, 
      password: String
      age: String
      gender: String
      pic: String
    ): Auth

    addComment(comment: String,name: String,email:String): Comment

    login(email: String!, password: String!): Auth

    addLike(UserID: String!,UsersLiked: String!): Like

    addPass(UserID: String!,UsersPassed: String!): Pass

    addMatch(UserID: String!,Matched: String!): Match

    singleUser(id: ID!): User
  }
`;

module.exports = typeDefs;

import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($name: String!) {
    user(name: $name) {
      _id
      name
      email
      permission
    }
  }
`;

export const QUERY_ALL_USER = gql`
 {
    users {
      _id
      name
      email
      permission
      gender
      age
      pic
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($_id: ID!) {
    user(_id: $_id) {
      _id
      name
      email
      gender
      age
      pic
    }
  }
`;


export const QUERY_COMMENT = gql`
  query getComments {
    comments {
      _id
      comment
      name
      date_created
      email
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      permission
    }
  }
`;

export const SINGLE_USER = gql`
  query user($name: String!) {
    user(name: $name) {
      name
      permission
    }
  }
`;

export const LIKES = gql`
  query Likes($UserID: String!) {
    Likes(UserID: $UserID) {
      UsersLiked
    }
  }
`;

export const PASSES = gql`
  query Passes($UserID: String!) {
    Passes(UserID: $UserID) {
      UsersPassed
    }
  }
`;

export const MATCHES = gql`
  query Matches($UserID: String!) {
    Matches(UserID: $UserID) {
      Matched
    }
  }
`;

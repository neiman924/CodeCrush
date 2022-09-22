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
export const QUERY_LIKE = gql`
  query likes($UserID: String!) {
    likes(UserID: $UserID) {
      UsersLiked
    }
  }
`;
export const QUERY_LIKES = gql`
  query getLikes {
    getLikes{
      UserID
      UsersLiked
    }
  }
`;
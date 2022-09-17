import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        permission
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $age: Int!, $location: String!, $looking_for: String!, $work: String ) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, age: $age, location: $location, looking_for: $looking_for, work: $work) {
      token
      user {
        _id
        firstName
        lastName 
        age
        location 
        looking_for 
        work
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

//contact us part
export const ADD_COMMENT = gql`
  mutation addComment($comment: String!,$name: String,$email: String) {
    addComment(comment: $comment,name:$name,email:$email) {
      _id
      comment
      name
      email
    }
  }
`;
 
export const ADD_LIKE = gql`
  mutation addLike($UserID: String!,$UsersLiked: String!) {
    addLike(UserID: $UserID,UsersLiked: $UsersLiked) {
      _id
      UserID
      UsersLiked
    }
  }
`;

export const ADD_PASS = gql`
  mutation addPass($UserID: String!,$UsersPassed: String!) {
    addPass(UserID: $UserID,UsersPassed: $UsersPassed) {
      _id
      UserID
      UsersPassed
    }
  }
`;

export const ADD_MATCH = gql`
  mutation addMatch($UserID: String!,$Matched: String!) {
    addMatch(UserID: $UserID,Matched: $Matched) {
      _id
      UserID
      Matched
    }
  }
`;
// export const SINGLE_USER = gql`
//   mutation singleUser($email: String!) {
//     user(email: $email) {
//         name
//         permission
//     }
//   }
// `;

export const SINGLE_USER = gql`
  mutation singleUser($_id: ID!) {
    singleuser(id: $_id) {
        name
        email
    }
  }
`;

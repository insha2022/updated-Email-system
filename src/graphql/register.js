import { gql } from "@apollo/client";
export const REGISTER = gql`
 mutation registerUser( 
  $confirmPassword: String!
  $email: String! $firstName: String!
   $lastName: String! $password: String! )

    {
      register
    (confirmPassword: $confirmPassword
    email: $email 
    firstName: $firstName
     lastName: $lastName
      password: $password) 
      {account {id password
       firstName
       lastName
       email  
       username}
        message
         __typename }
         }
`;

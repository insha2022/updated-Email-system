
import { gql } from "@apollo/client";

export const LOGIN = gql`
 mutation login(
   $email: String!, 
   $password: String!)
  {
   login
   (email: $email,
    password: $password
    )
   { 
      payload
      refreshExpiresIn
      token
     __typename}
}
`;
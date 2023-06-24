import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
    mutation($email:String!,$password:String!){
        createUser(createUserInput:{
            email:$email,
            password:$password
        }){
            _id,
            email
        }
    }
`;
import { gql } from '@apollo/client';


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

export const CREATE_BOOKMARK = gql`
    mutation ($name:String!){
        createBookmark(createBookmarkInput: {name: $name}){_id,name}
    }
`;

export const LIST_BOOKMARKS = gql`
    {
        listBookmarks{
            _id
            name
        }
    }
`;
export const GET_BOOKMARK = gql`
    query ($id:String!){
        getBookmark(_id:$id){
            _id
            name
        }
    }
`;
export const UPDATE_BOOKMARK = gql`
    mutation ($id:String!,$links:[String!]!){
        updateBookmark(updateBookmarkInput:{links:$links,_id:$id}){
            _id
            name
            links
        }

    }

`
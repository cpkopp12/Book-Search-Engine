//Declarations: gql
import { gql } from '@apollo/client';


//export queries ======================

export const QUERY_ME = gql`
    {
        me {
            _id
            uesername
            email
            bookCount
            savedBooks {
                _id
                authors 
                description
                bookId
                image
                link 
                title
            }
        }
    }
`;

//Declarations: gql
import { gql } from '@apollo/client';


//export mutations ======================
//login: takes email + password, returns token + user
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//add user: takes username+email+password, returns token+user
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//add book: takes a bunch of book params
// returns user with saved books

    
export const SAVE_BOOK =gql`
    mutation saveBook($authors: [String], $description: String, $title: String, $bookId: String, $image: String, $link: String, $title: String) {
        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link, title: $title) {
            user {
                _id
                username
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
    }
`;

//remove book: takes bookIdToRemove, returns user with new book list
export const REMOVE_BOOK=gql`
    mutation removeBook($bookIdToRemove: String!) {
        removeBook(bookIdToRemove: $bookIdToRemove) {
            user {
                _id
                username
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

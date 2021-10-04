import {
    editBookInfo,
    deleteBook,
    newBookEntry
} from './reducerFunctions'

const UPDATE_BOOK = 'UPDATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const CURRENT_BOOK = 'CURRENT_BOOK';
const NEW_BOOK = 'NEW_BOOK'

export const updateBook = (bookInfo) => {
    return {
        type: UPDATE_BOOK,
        payload: bookInfo
    };
};

export const deletedBook = (newBookList) => {
    return {
        type: DELETE_BOOK,
        payload: newBookList
    };
};

export const currentBookEdit = (currentBook) => {
    return {
        type: CURRENT_BOOK,
        currentBook
    }
}

export const newBook = (newBookInfo) => {
    return {
        type: NEW_BOOK,
        payload: newBookInfo
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_BOOK:
            return editBookInfo(state, action.payload);
        case DELETE_BOOK:
            return deleteBook(state, action.payload);
        case CURRENT_BOOK:
            return { ...state, currentBook: action.currentBook }
        case NEW_BOOK:
            return newBookEntry(state, action.payload)
        default:
            return state;
    }
}
export default reducer
import {
    editBookInfo,
    newBookEntry,
    bookQuery,
    removeBookFromList
} from './reducerFunctions'

const UPDATE_BOOK = 'UPDATE_BOOK';
const CURRENT_BOOK = 'CURRENT_BOOK';
const NEW_BOOK = 'NEW_BOOK';
const SEARCH_BOOK = 'SEARCH_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'

export const updateBook = (bookInfo) => {
    return {
        type: UPDATE_BOOK,
        payload: bookInfo
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

export const searchBook = (title) => {
    return {
        type: SEARCH_BOOK,
        payload: title
    }
}

export const removeBook = (book) => {
    return {
        type: REMOVE_BOOK,
        payload: book
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_BOOK:
            return editBookInfo(state, action.payload);
        case CURRENT_BOOK:
            return { ...state, currentBook: action.currentBook };
        case NEW_BOOK:
            return newBookEntry(state, action.payload);
        case SEARCH_BOOK:
            return bookQuery(state, action.payload);
        case REMOVE_BOOK:
            return removeBookFromList(state, action.payload)
        default:
            return state;
    }
}
export default reducer
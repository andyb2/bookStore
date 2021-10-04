import { updateBook, deletedBook, currentBookEdit, newBook } from "./actions"

export const editBookStore = (bookUpdate) => async (dispatch) => {
    try {
        dispatch(updateBook(bookUpdate))
    } catch (error) {
        console.error(error)
    }
}

export const deleteBooks = (newBookList) => async (dispatch) => {
    try {
        dispatch(deletedBook(newBookList))
    } catch (error) {
        console.error(error)
    }
}

export const editSelectedBook = (currentBook) => (disptach) => {
    try {
        disptach(currentBookEdit(currentBook))
    } catch (error) {
        console.error(error)
    }
}

export const createNewBook = (newBookInfo) => (dispatch) => {
    try {
        dispatch(newBook(newBookInfo))
    } catch (error) {
        console.error(error)
    }
}
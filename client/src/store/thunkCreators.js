import {
    updateBook,
    removeBook,
    currentBookEdit,
    newBook
} from "./actions"
import axios from "axios"

export const editBookStore = (bookUpdate) => async (dispatch) => {
    try {
        dispatch(updateBook(bookUpdate))
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

export const createNewBook = (newBookInfo) => async (dispatch) => {
    try {
        console.log(`TEST`, newBookInfo)
        // const storeNewBook = await axios.post("/api/addbook", newBookInfo);
        dispatch(newBook(newBookInfo));
    } catch (error) {
        console.error(error)
    }
}

export const userRegistration = (userInfo) => async (dispatch) => {
    try {
        // const userCreate = await axios.post("auth/register", userInfo)
        // dispatch()
    } catch (error) {
        console.error(error)
    }
}

export const deleteBook = (book) => async (dispatch) => {
    try {
        console.log(`connected`)
        dispatch(removeBook(book))
    } catch (error) {
        console.error(error)
    }
}
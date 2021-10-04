export const editBookInfo = (state, payload) => {
    const { booksList } = state
    const updateBook = booksList.map(books => {
        if (payload.id === books.id) {
            books = payload
            return books
        } else {
            return books
        }
    });
    const stateCopy = { ...state, booksList: updateBook }
    return stateCopy
}

export const deleteBook = (state, payload) => {
    const newState = payload
    return { booksList: newState }
}

export const newBookEntry = (state, payload) => {
    const stateCopy = { ...state }
    stateCopy.booksList.push(payload)
    console.log(payload.id)
    return stateCopy
}
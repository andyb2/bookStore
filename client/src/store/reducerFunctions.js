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

export const newBookEntry = (state, payload) => {
    const stateCopy = { ...state }
    stateCopy.booksList.push(payload)
    return { ...stateCopy }
}

export const bookQuery = (state, payload) => {
    const stateCopy = { ...state };
    const lowerCaseSearched = payload.toLowerCase();
    const filteredBookList = stateCopy.booksList.filter(book => book.title.toLowerCase().includes(lowerCaseSearched));
    return { ...stateCopy, search: [...filteredBookList] }
}

export const removeBookFromList = (state, payload) => {
    const stateCopy = { ...state }
    const nonRemovedBooks = stateCopy.booksList.filter(book => book.id !== payload.id);
    if (stateCopy.search) {
        const nonRemovedBooksSearch = stateCopy.search.filter(book => book.id !== payload.id)
        stateCopy.search = nonRemovedBooksSearch
    }
    stateCopy.booksList = nonRemovedBooks
    return { ...stateCopy }
}
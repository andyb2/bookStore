import React, { useEffect, useState } from "react";
import Edit from "../edit/edit";
const Books = () => {
    const booksList = [
        {
            id: '1',
            title: "Harry Potter and the Philosopher's Stone",
            price: "15.00",
            category: "Fantasy",
            Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '2',
            title: "Hyperspace",
            price: "22.00",
            category: "Science",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '3',
            title: "Test",
            price: "22.00",
            category: "Science",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        }
    ]
    const [books, setBooks] = useState(booksList);
    const [showEdit, setShowEdit] = useState(false)
    const [currentBook, setCurrentBook] = useState()

    const deleteBook = (e) => {
        const targetId = e.target.value
        const newBookList = books.filter((e) => {
            if (e.id !== targetId) {
                return e
            }
        });
        setBooks(newBookList);
    }

    const editBook = (e) => {
        const bookId = e.currentTarget.id
        const foundBook = books.filter(e => e.id === bookId)
        setCurrentBook(foundBook[0])
        setShowEdit(prev => !prev)
    }

    return (
        !showEdit ? books.map(e => {
            return (
                <div key={e.id} id={e.id} onClick={e => editBook(e)}>
                    <div>
                        <h1>{e.title}</h1>
                        <div>{e.price}</div>
                        <div>{e.category}</div>
                        <button value={e.id} onClick={e => deleteBook(e)}>Test</button>
                    </div>

                </div>
            )
        }) : <Edit editBook={currentBook} />

    )
}

export default Books
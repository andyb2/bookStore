import React, { useState } from "react";
import { connect } from "react-redux";
import Edit from "../edit/edit";
import { deleteBooks, editSelectedBook } from "../../store/thunkCreators";
import './books.css';
import NewBook from "../newBook/newBook";

const Books = (props) => {
    const { booksList, currentBook } = props
    const [showEdit, setShowEdit] = useState(false)
    const [addBook, setAddBook] = useState(false)

    const addBookToggle = () => {
        setAddBook(prev => !prev);
    }

    const editBook = async (e) => {
        console.log('yes    ')
        const bookId = e.currentTarget.value
        const foundBook = booksList.filter(e => e.id === bookId)
        await props.editSelectedBook(foundBook[0])
        setShowEdit(prev => !prev)
    }

    const deleteBook = async (e) => {
        e.stopPropagation();
        const targetId = e.target.value
        const newBookList = booksList.filter((e) => {
            return e.id !== targetId ? e : null
        });
        await props.deleteBooks(newBookList)
    }

    return (
        <div className='parent'>
            {!addBook ? <button onClick={addBookToggle}>Add Book</button> : <NewBook toggle={{ setAddBook }} />}
            <div className='child'>
                {!showEdit ? booksList.map(books => {
                    return (
                        <div className='books' key={books.id} id={books.id}>
                            <h4>{books.title}</h4>
                            <div>${books.price}</div>
                            <div>{books.category}</div>
                            <button className='deleteButton' value={books.id} onClick={e => deleteBook(e)}>Remove</button>
                            <button className='editButton' value={books.id} onClick={e => editBook(e)}>Edit</button>
                        </div>
                    )
                }) : <Edit editBook={{ currentBook, setShowEdit }} />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        booksList: state.booksList,
        currentBook: state.currentBook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBooks: (newBookList) => {
            dispatch(deleteBooks(newBookList));
        },
        editSelectedBook: (currentBook) => {
            dispatch(editSelectedBook(currentBook))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
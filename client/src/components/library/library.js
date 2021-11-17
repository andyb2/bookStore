import { useState } from "react";
import { connect } from "react-redux";
import { editSelectedBook } from "../../store/thunkCreators";
import './library.css';

const Books = (props) => {
    const { booksList, search } = props

    const test = (books) => {
        console.log(books)
    }

    const drag = (e) => {
        // e.preventDefault();
        // console.log(`dragging`)
    }

    const dragStart = (e, books) => {
        const stringIt = JSON.stringify(books)
        e.dataTransfer.setData('book', stringIt)
        e.dataTransfer.effectAllowed = 'move'
    }

    return (
        <div className="book-container">
            <div className='parent'>
                {search ? search.map(books => {
                    return (
                        <div className='books' key={books.id} id={books.id} onClick={() => test(books)} draggable="true" onDrag={drag} onDragStart={(e) => dragStart(e, books)}>
                            <h4>{books.title}</h4>
                            <div>{books.category}</div>
                            <div>{books.description}</div>
                        </div>
                    )
                }) : booksList.map(books => {
                    return (
                        <div className='books' key={books.id} id={books.id} onClick={() => test(books)} draggable="true" onDrag={drag} onDragStart={(e) => dragStart(e, books)}>
                            <h4>{books.title}</h4>
                            <div>{books.category}</div>
                            <div>{books.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
/* <Edit editBook={{ currentBook, setShowEdit }} /> */
const mapStateToProps = (state) => {
    return {
        booksList: state.booksList,
        currentBook: state.currentBook,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editSelectedBook: (currentBook) => {
            dispatch(editSelectedBook(currentBook))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
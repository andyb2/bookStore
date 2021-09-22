import { connect } from "react-redux"
import { editBookStore } from "../../store/thunkCreators"

const Edit = (props) => {
    const { setShowEdit, currentBook } = props.editBook;

    const saveBookInfo = async (e) => {
        e.preventDefault();
        const bookEdit = {
            id: currentBook.id,
            title: e.target.title.value,
            category: e.target.category.value,
            price: e.target.price.value
        }
        await props.editBookStore(bookEdit)
        setShowEdit(false)
    }

    return (
        <div>
            {currentBook && (
                <form onSubmit={saveBookInfo}>
                    <textarea
                        name='title'
                        type='text'
                        defaultValue={currentBook.title}
                    ></textarea>
                    <textarea
                        name='category'
                        type='text'
                        defaultValue={currentBook.category}
                    ></textarea>
                    <textarea
                        name='price'
                        type='text'
                        defaultValue={currentBook.price}
                    ></textarea>

                    <button type="submit">save</button>
                </form>
            )}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editBookStore: (bookUpdate) => {
            dispatch(editBookStore(bookUpdate))
        }
    }
}
export default connect(null, mapDispatchToProps)(Edit);
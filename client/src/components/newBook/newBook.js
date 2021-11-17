import './newBook.css'
import { connect } from 'react-redux';
import { createNewBook } from '../../store/thunkCreators';
import { v4 as uuidv4 } from 'uuid'


const NewBook = (props) => {
    // const { setAddBook } = props.toggle;

    const addNewBook = async (e) => {
        e.preventDefault();
        const newBookInfo = {
            id: uuidv4(),
            title: e.target.title.value,
            category: e.target.category.value,
            price: e.target.price.value
        }
        await props.createNewBook(newBookInfo)
        // setAddBook(false)
    };

    const closeModal = () => {
        // setAddBook(false)
    }
    return (
        // add book modal
        <div className='addBook-modal'>
            <div className="close-modal" onClick={closeModal}>X</div>
            <h2 className='addBook-header'>Add a new book!</h2>
            <form className="modal-form" onSubmit={addNewBook}>
                <h5 className='addBook-inputHeader'>Title</h5>
                <textarea
                    className='addBook-input'
                    name='title'
                    type='text'
                ></textarea>
                <h5 className='addBook-inputHeader'>Price</h5>
                <textarea
                    className='addBook-input'
                    name='category'
                    type='text'
                ></textarea>
                <h5 className='addBook-inputHeader'>Category</h5>
                <textarea
                    className='addBook-input'
                    name='price'
                    type='text'
                ></textarea>
                <button className="save-modal-btn" type="submit">save</button>
            </form>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewBook: (newBookList) => {
            dispatch(createNewBook(newBookList));
        }
    }
}
export default connect(null, mapDispatchToProps)(NewBook);
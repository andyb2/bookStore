import './newBook.css'
import { connect } from 'react-redux';
import { createNewBook } from '../../store/thunkCreators';
import { v4 as uuidv4 } from 'uuid'


const NewBook = (props) => {
    const { setAddBook } = props.toggle;

    const addNewBook = async (e) => {
        e.preventDefault();
        const newBookInfo = {
            id: uuidv4(),
            title: e.target.title.value,
            category: e.target.category.value,
            price: e.target.price.value
        }
        await props.createNewBook(newBookInfo)
        setAddBook(false)
    };

    return (
        // add book modal
        <div className='addBook-modal'>
            <h2 className='addBook-header'>Add a new book!</h2>
            <form onSubmit={addNewBook}>
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
                <h5 className='addBook-inputHeader'>category</h5>
                <textarea
                    className='addBook-input'
                    name='price'
                    type='text'
                ></textarea>
                <button type="submit">save</button>
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
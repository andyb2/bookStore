import './create.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { createNewBook } from '../../store/thunkCreators';
import { v4 as uuidv4 } from 'uuid'

const Create = (props) => {
    const { activeComponent } = props
    // console.log(`testProp`, activeComponent)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            id: uuidv4(),
            title: e.target.title.value,
            category: e.target.category.value,
            description: e.target.description.value
        }
        await props.createNewBook(newBook);
        activeComponent(prev => !prev);
    }

    return (
        <div className="add-book-container">
            <div className="add-book">
                <form className="add-book-form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="add-row">
                        <h5 className="add-book-header">Title</h5>
                        <textarea
                            className="add-book-text"
                            name="title"
                            type="text"
                        ></textarea>
                    </div>
                    <div className="add-row">
                        <h5 className="add-book-header">Category</h5>
                        <textarea
                            className="add-book-text"
                            name="category"
                            type="text"
                        ></textarea>
                    </div>
                    <div className="add-row">
                        <h5 className="add-book-header">Description</h5>
                        <textarea
                            className="add-book-text"
                            name="description"
                            type="text"
                        ></textarea>
                    </div>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSave} size="3x" />
                    </button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewBook: (newBook) => {
            dispatch(createNewBook(newBook));
        }
    }
}


export default connect(null, mapDispatchToProps)(Create);
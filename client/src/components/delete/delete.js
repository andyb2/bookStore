import './delete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { deleteBook } from '../../store/thunkCreators';

const Delete = (props) => {

    const dragOver = (e) => {
        // garbage can lid opens
        e.preventDefault();
        e.dataTransfer.effectAllowed = 'move'
    }

    const dropZone = async (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('book')
        const parseIt = JSON.parse(data)
        console.log(`drop`)
        await props.deleteBook(parseIt)
    }

    return (
        // <div className="delete-container">
        <div className="trash-can" onDrop={dropZone} onDragOver={(e) => dragOver(e)}>
            {/* <FontAwesomeIcon icon={faBook} size="2x" /> */}
            <FontAwesomeIcon icon={faTrash} size="3x" />
        </div>
        // </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook: (book) => {
            dispatch(deleteBook(book))
        }
    }
}

export default connect(null, mapDispatchToProps)(Delete);
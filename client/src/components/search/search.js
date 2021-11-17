import './search.css'
import { connect } from 'react-redux';
import { searchBook } from '../../store/actions';

const Search = (props) => {
    const handleChange = async (event) => {
        const searchInput = event.target.value
        await props.searchBook(searchInput);
    }

    return (
        <div className="search">
            <textarea className="search-bar" placeholder="Search" onChange={handleChange}></textarea>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bookList: state.booksList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchBook: (searchInput) => {
            dispatch(searchBook(searchInput))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
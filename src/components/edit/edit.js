import { useState } from "react"
const Edit = (props) => {
    const { editBook } = props
    const { title } = editBook

    const [userInput, setUserInput] = useState(editBook)
    const [updateBook, setUpdateBook] = useState()
    // console.log(userInput)
    const handleChange = (e) => {
        // userInput.title = e.target.value
        // console.log(e.target.id)
        // e.target.i
        // const newTitle = e.target.title.value
        // const newCat = e.target.category.value
        // const newPrice = e.target.price.value

        // console.log(e.target.title)



    }

    const saveBook = () => {
        const bookEdit = {
            id: editBook.id,
            title: e.target.title.value,
            category: e.target.category.value,
            price: e.target.price.value
        }

    }

    const saveBookInfo = async (e) => {
        e.preventDefault();
        const bookEdit = {
            id: editBook.id,
            title: e.target.title.value,
            category: e.target.category.value,
            price: e.target.price.value
        }
        await editBookStore(bookEdit)
    }
    return (
        <div>
            <form onSubmit={saveBookInfo}>
                <textarea
                    name='title'
                    type='text'
                    defaultValue={userInput.title}
                    onChange={handleChange}
                ></textarea>
                <textarea
                    name='category'
                    type='text'
                    defaultValue={userInput.category}
                    onChange={handleChange}
                ></textarea>
                <textarea
                    name='price'
                    type='text'
                    defaultValue={userInput.price}
                    onChange={handleChange}
                ></textarea>

                <button type="submit">save</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editBookStore: (bookUpdate) => {
            dipatch(editBookStore(bookUpdate))
        }

    }
}
export default connect(null, mapDispatchToProps)(Edit);
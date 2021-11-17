import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Library from './components/library/library';
import Search from './components/search/search';
import Delete from './components/delete/delete';
import Create from './components/create/create';

function App() {
  const [toggleAddBook, setToggleAddBook] = useState(false)

  const addNewBook = () => {
    setToggleAddBook(prev => !prev)
  }

  return (
    <BrowserRouter>
      <div className="editor">
        <Search />
      </div>
      <div className="tools">
        <FontAwesomeIcon className="add" icon={faPlus} size="3x" onClick={addNewBook} />
        <Delete />
      </div>
      {toggleAddBook ? <Create activeComponent={setToggleAddBook} /> : null}
      <Route path='/' component={Library} />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Books from './components/books/books';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Books}></Route>
    </BrowserRouter>
  );
}

export default App;

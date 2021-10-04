import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Books from './components/books/books';
import Register from './pages/register/register';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Register}></Route>
    </BrowserRouter>
  );
}

export default App;

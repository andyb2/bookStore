import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import actions from './actions';

const initialState = {
    booksList: [
        {
            id: '1',
            title: "Harry Potter and the Philosopher's Stone",
            price: "15.00",
            category: "Fantasy",
            Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '2',
            title: "Hyperspace",
            price: "22.00",
            category: "Science",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '3',
            title: "Test",
            price: "22.00",
            category: "Science",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '4',
            title: "HARRY LARRY",
            price: "22.00",
            category: "Fantasy",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '5',
            title: "Best Parts of JavaScript",
            price: "22.00",
            category: "Fantasy",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '6',
            title: "Harry Potter and the Philosopher's Stone",
            price: "15.00",
            category: "Fantasy",
            Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '7',
            title: "Hyperspace",
            price: "22.00",
            category: "Science",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '8',
            title: "Test",
            price: "22.00",
            category: "Science",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '9',
            title: "HARRY LARRY",
            price: "22.00",
            category: "Fantasy",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            id: '10',
            title: "Best Parts of JavaScript",
            price: "22.00",
            category: "Fantasy",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        }
    ]
}

export default createStore(actions, initialState, applyMiddleware(thunkMiddleware));
import { applyMiddleware,combineReducers,createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

let i = 1;

const API_REQUEST = axios.create({
    baseURL: "http://cors.io/?https://api.bestsongs.pk"
});

let defaultState = {
    user: {
        name: "Shakir Commando", age: 24
    },
    tweets: [
        {
            title: "Hello",
            text: "Hello World"
        }
    ]
};

const userReducer = (state = defaultState.user, action) => {
    switch(action.type){
        case "CHANGE_NAME": {
            state.name = action.payload;
            break;
        }
        case "CHANGE_AGE": {
            state.age = action.payload;
            break;
        }
    }
    return state;
};

const tweetReducer = (state = defaultState.tweets, action) => {
    return state;
};

const reducer = combineReducers({
    user: userReducer,
    tweets: tweetReducer
});

const middleware = applyMiddleware(promise(),thunk, logger());

const store = createStore(reducer,defaultState,middleware);

// store.subscribe(() => { console.debug("Store values changed " + i,store.getState()); i++; });
// store.dispatch({type: "CHANGE_NAME",payload: "Shakir Commando"});
// store.dispatch({type: "CHANGE_AGE",payload: "23"});

store.dispatch({ type: "FETCH", payload: API_REQUEST.get("/home")});
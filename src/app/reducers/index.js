import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import tweet from './tweetReducer';

const reducer = combineReducers({
    user:user, 
    posts:tweet,
    routing: routerReducer
});


export default reducer;
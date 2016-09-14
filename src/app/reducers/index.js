import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import tweet from './tweetReducer';

export default combineReducers({
    user,tweet,
    routing: routerReducer
});
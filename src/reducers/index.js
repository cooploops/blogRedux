import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


// need simple reducer to return something for whatever name state prop you use
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});
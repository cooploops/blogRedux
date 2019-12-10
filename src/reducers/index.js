import {combineReducers} from 'redux';
import postsReducer from './postsReducer';


// need simple reducer to return something for whatever name state prop you use
export default combineReducers({
    posts: postsReducer
});
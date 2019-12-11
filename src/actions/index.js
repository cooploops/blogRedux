import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// thunk lets you let action creators return functions, so this async arrow function is returning a response
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload:response.data});

};

export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
}

// lodash function memoize, essentially memorizes a function you provide it as an argument and if you call it again with any of the same past arguments
// it will just return what it got the first time it ran, so for a api call, it will only be called once and then return that same response it got the first time if called again
// this helps prevent making the same api call 100 or so times for the same information (not necessarily good if that information changes from another user's input on a dif machine)
// add _ in front of a function for common format for devs to indicate private function, don't touch this
const _fetchUser = _.memoize(async (id, dispatch) => {
    const repsonse = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: repsonse.data});
});
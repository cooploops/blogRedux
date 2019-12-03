import jsonPlaceholder from '../apis/jsonPlaceholder';

// thunk lets you let action creators return functions, so this async arrow function is returning a response
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload:response})

   }
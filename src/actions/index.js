import jsonplaceholder from '../apis/jsonPlaceholder';

// Defining a function that will return a function
export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

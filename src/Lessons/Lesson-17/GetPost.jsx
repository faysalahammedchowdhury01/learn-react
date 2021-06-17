import React, { useEffect, useReducer } from 'react';

const initialState = {
  post: {},
  error: '',
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        post: action.result,
        error: '',
        loading: false,
      };
    case 'ERROR':
      return {
        post: {},
        error: 'Data not Fetching',
        loading: false,
      };
    default:
      return state;
  }
};

function GetPost() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SUCCESS', result: data }))
      .catch(() => dispatch({ type: 'ERROR' }));
  }, []);

  const { loading, post, error } = state;

  return (
    <div>
      {loading ? <h2>Loading....</h2> : <h2>{post.title}</h2>}
      <h2>{error && error}</h2>
    </div>
  );
}

export default GetPost;

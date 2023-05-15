import axios from 'axios';

// const ROOT_URL = 'https://platform.cs52.me/api';
const ROOT_URL = 'https://tfenaroli-lab5.onrender.com/api';
const API_KEY = '?key=t_fenaroli';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch((error) => {
      console.log(`error fetching posts: ${error}`);
    });
  };
}

export function createPost(post, navigate) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then((response) => {
      console.log('successfully created post');
      navigate('/');
    }).catch((error) => {
      console.log(`error creating post: ${error}`);
    });
  };
}

export function updatePost(id, fields) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, fields).then((response) => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch((error) => {
      console.log(`error editing post with id ${id}: ${error}`);
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch((error) => {
      console.log(`error fetching post with id ${id}: ${error}`);
    });
  };
}

export function deletePost(id, navigate) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      console.log(`successfully deleted post with id ${id}`);
      navigate('/');
    }).catch((error) => {
      console.log(`error deleting post: ${error}`);
    });
  };
}

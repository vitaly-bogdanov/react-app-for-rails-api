import axios from 'axios';
import { 
  getPostsCreator,
  deletePostCreator,
  authorizationCreator
} from './actions/actionCreators';
import { loggedInLocalStorageHalper } from '../config/helpers';

import { apiGetPosts } from '../config/Api';

// подгрузить все посты
export const getPostsThunk = () => dispatch => apiGetPosts(data => dispatch(getPostsCreator(data)));

export const deletePostThunk = (id) => dispatch => {
  axios.delete(`http://localhost:3001/posts/${id}`).then(response => {
    if (response.status === 200) {
      dispatch(deletePostCreator(id));
    }
  }).catch(error => {
    console.log(error);
  });
}

export const loggedInThunk = () => dispatch => {
  axios.get('http://localhost:3001/logged-in', { withCredentials: true }).then(response => {
    // console.dir(response);
    // loggedInLocalStorageHalper(response.data.user);
    // dispatch(authorizationCreator(response.data.user));
    // dispatch(getPostsCreator(response.data.posts));
  }).catch(error => {
    console.dir(error);
  });
}
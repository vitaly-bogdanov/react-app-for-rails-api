import axios from 'axios';
import { 
  getPostsCreator,
  deletePostCreator
} from './actions/actionCreators';
import { loggedInLocalStorageHalper } from '../config/helpers';

export const getPostThunk = () => dispatch => {
  axios.get('http://localhost:3001').then(response => {
    dispatch(getPostsCreator(response.data));
  }).catch(error => {
    console.error(error);
  })
}

export const deletePostThunk = (id) => dispatch => {
  axios.delete(`http://localhost:3001/posts/${id}`).then(response => {
    if (response.status === 200) {
      dispatch(deletePostCreator(id));
    }
  }).catch(error => {
    console.log(error);
  });
}

export const checkLoggedInThunk = () => dispatch => {
  axios.get().then(response => {
    loggedInLocalStorageHalper(response.data.user);
    dispatch();
    dispatch();
  });
}
import { 
  GET_POSTS,
  DELETE_POST,
  ADD_POST
} from './actionTypes';

export const getPostsCreator = posts => ({
  type: GET_POSTS,
  payload: { posts }
});

export const deletePostCreator = id => ({
  type: DELETE_POST,
  payload: { id }
});

export const addPostCreator = post => ({
  type: ADD_POST,
  payload: { post }
});
import { 
  GET_POSTS,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
  AUTHORIZATION
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

export const updatePostCreator = post => ({
  type: UPDATE_POST,
  payload: { post }
});

export const authorizationCreator = user => ({
  type: AUTHORIZATION,
  payload: { user }
});
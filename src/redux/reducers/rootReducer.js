import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import postsReducer from './postsReducer'

export default combineReducers({
  authorization: authorizationReducer,
  posts: postsReducer
});
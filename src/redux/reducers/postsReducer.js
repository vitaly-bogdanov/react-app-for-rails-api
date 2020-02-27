import { 
  GET_POSTS,
  DELETE_POST
} from '../actions/actionTypes';

const initialState = {
  postsList: []
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        postsList: action.payload.posts
      }
    case DELETE_POST:
      return {
        postsList: state.postsList.filter(post => post.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default postsReducer;
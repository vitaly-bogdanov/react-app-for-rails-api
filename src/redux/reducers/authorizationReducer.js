import { 
  AUTHORIZATION,
  SET_AUTHORIZATION_ERRORS
} from '../actions/actionTypes';
import { getUserFromLocalStorageHelper } from '../../config/helpers';

const initialState = {
  user: getUserFromLocalStorageHelper() || { name: 'No name', access: 'guest' },
  errors: []
}

const authorizationReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTHORIZATION:
      return {
        ...state,
        user: action.payload.user,
      };
    case SET_AUTHORIZATION_ERRORS:
      return {
        ...state,
        errors: action.payload.errors
      }
    default:
      return state;
  }
}

export default authorizationReducer;
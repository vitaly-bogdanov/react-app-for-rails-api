import { 
  AUTHORIZATION
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
    default:
      return state;
  }
}

export default authorizationReducer;
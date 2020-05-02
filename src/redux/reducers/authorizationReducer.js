import { AUTHORIZATION } from '../actions/actionTypes';
import { getUserFromLocalStorageHelper } from '../../config/helpers';

const initialState = {
  user: getUserFromLocalStorageHelper() || { name: 'No name', access: 'guest' }
}

const authorizationReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTHORIZATION:
      return {
        user: action.payload.user
      };
    default:
      return state;
  }
}

export default authorizationReducer;
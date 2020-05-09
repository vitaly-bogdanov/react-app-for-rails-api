import authorizationReducer from './authorizationReducer';
import { authorizationCreator }  from '../actions/actionCreators';

it('should authorization', () => {
  const initialState = {
    user: { name: 'No name', access: 'guest' }
  }
  let action = authorizationCreator({ name: 'Вася', access: 'admin' });
  let newState = authorizationReducer(initialState, action);
  expect(newState.user.name).toBe('Вася');
  expect(newState.user.access).toBe('admin');
});
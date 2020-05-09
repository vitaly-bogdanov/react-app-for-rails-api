import authorizationReducer from './authorizationReducer';
import { 
  authorizationCreator, 
  setAuthorizationErrorsCreator 
}  from '../actions/actionCreators';

it('should authorization', () => {
  const initialState = {
    user: { name: 'No name', access: 'guest' },
    errors: []
  }
  let action = authorizationCreator({ name: 'Вася', access: 'admin' });
  let newState = authorizationReducer(initialState, action);
  expect(newState.user.name).toBe('Вася');
  expect(newState.user.access).toBe('admin');
});

it('should add server erros', () => {
  const initialState = {
    user: { name: 'No name', access: 'guest' },
    errors: []
  }

  let action = setAuthorizationErrorsCreator(['panic']);
  let newState = authorizationReducer(initialState, action);
  expect(newState.errors[0]).toBe('panic');
});
import {
  setAuthorizationErrorsCreator
} from './actionCreators';

it('should errors array', () => {
  let action = setAuthorizationErrorsCreator(['panic']);
  expect(action.payload.errors[0]).toBe('panic');
});

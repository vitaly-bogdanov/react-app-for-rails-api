const initialState = {
  user: { name: 'Гость', access: 'user', email: '' }
}

const authorizationReducer = (state = initialState, action) => {
  switch(action.type) {
    case '':
      return {
        user: action.payload.user
      };
    default:
      return state;
  }
}

export default authorizationReducer;
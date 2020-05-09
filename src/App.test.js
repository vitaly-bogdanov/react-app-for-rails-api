import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import thunkMiddleware  from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

it('render App', () => {
  let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});

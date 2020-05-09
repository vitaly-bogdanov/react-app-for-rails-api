import React from 'react';
import ReactDOM from 'react-dom';
import LinkButton from './LinkButton';
import { BrowserRouter } from 'react-router-dom';

it('should render LinkButton component', () => {
  let div = document.createElement('div');
  ReactDOM.render(
  (
    <BrowserRouter>
      <LinkButton to='/' type='test' name='test'/>
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
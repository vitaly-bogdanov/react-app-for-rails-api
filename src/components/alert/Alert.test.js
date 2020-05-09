import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import Alert from './Alert';

it('should render Alert component', () => {
  let div = document.createElement("div");
  let messanges = ['все норм', 'все норм', 'все норм'];
  render(<Alert type='success' errors={messanges}/>, div);
  unmountComponentAtNode(div);
});
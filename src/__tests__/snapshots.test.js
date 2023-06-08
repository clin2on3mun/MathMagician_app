import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Quotes from '../components/quotes';
import Home from '../components/Home';

describe('Components snapshot', () => {
  test('Calculator snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Quotes snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Quotes />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Home snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});

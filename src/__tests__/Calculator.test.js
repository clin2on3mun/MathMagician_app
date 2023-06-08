import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

describe('calculator keypads', () => {
  test('user interacting with keypad button', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
  });
});

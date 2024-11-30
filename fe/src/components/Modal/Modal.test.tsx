import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('<Modal />', () => {
  test('it should mount', () => {
    render(<Modal title="Hello" ></Modal>);

    const modal = screen.getByTestId('Modal');

    expect(modal).toBeInTheDocument();
  });
});
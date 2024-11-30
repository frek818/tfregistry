import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NamespaceForm from './NamespaceForm';

describe('<NamespaceForm />', () => {
  test('it should mount', () => {
    render(<NamespaceForm />);

    const namespaceForm = screen.getByTestId('NamespaceForm');

    expect(namespaceForm).toBeInTheDocument();
  });
});
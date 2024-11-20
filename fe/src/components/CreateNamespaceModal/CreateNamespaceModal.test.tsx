import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateNamespaceModal from './CreateNamespaceModal';

describe('<CreateNamespaceModal />', () => {
  test('it should mount', () => {
    render(<CreateNamespaceModal />);

    const createNamespaceModal = screen.getByTestId('CreateNamespaceModal');

    expect(createNamespaceModal).toBeInTheDocument();
  });
});
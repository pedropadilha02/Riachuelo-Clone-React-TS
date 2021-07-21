import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});
//

describe('Componente principal', () => {
  it('Mostrar o nome da loja', () => {
    render(<App />);

    expect(screen.getByText('BLOG')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('Teste de renderização do SearchBar', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<SearchBar />);

    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Teste de renderização do Footer', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});

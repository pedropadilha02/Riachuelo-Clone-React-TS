import { render } from '@testing-library/react';
import { Contact } from './Contact';

describe('Teste de renderização do Contact', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<Contact />);

    expect(container).toMatchSnapshot();
  });
});

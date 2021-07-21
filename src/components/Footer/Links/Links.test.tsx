import { render } from '@testing-library/react';
import { Links } from './Links';

describe('Teste de renderização dos Links', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<Links />);

    expect(container).toMatchSnapshot();
  });
});

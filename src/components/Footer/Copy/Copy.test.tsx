import { render } from '@testing-library/react';
import { Copy } from './Copy';

describe('Teste de renderização do CopyRight', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<Copy />);

    expect(container).toMatchSnapshot();
  });
});

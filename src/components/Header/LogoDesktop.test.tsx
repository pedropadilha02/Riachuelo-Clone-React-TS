import { render } from '@testing-library/react';
import { LogoDesktop } from './LogoDesktop';

describe('Teste de renderização do LogoDesktop', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<LogoDesktop />);

    expect(container).toMatchSnapshot();
  });
});

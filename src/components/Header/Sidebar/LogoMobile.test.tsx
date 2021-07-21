import { render } from '@testing-library/react';
import { LogoMobile } from './LogoMobile';

describe('Teste de renderização do LogoMobile', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<LogoMobile />);

    expect(container).toMatchSnapshot();
  });
});

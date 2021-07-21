import { render } from '@testing-library/react';
import { Payment } from './Payment';

describe('Teste de renderização do Payment', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<Payment />);

    expect(container).toMatchSnapshot();
  });
});

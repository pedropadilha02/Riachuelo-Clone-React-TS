import { render } from '@testing-library/react';
import { TopBar } from './TopBar';

describe('Teste de renderização do TopBar', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<TopBar />);

    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Teste de renderização do CopyRight', () => {
  it('O snapshot do component deve permanecer semre o mesmo', () => {
    const { container } = render(<Sidebar />);

    expect(container).toMatchSnapshot();
  });
});

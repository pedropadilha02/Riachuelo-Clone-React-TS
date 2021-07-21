import { Breadcrumb } from './Breadcrumb/Breadcrumb';
import styled from 'styled-components';
import { Filter } from './Filter/Filter';
import { Products } from './Products/Products';

const MainStyled = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  max-width: 1100px;
  padding: 16px;
`;
export function Main() {
  return (
    <MainStyled>
      <Breadcrumb />
      <Filter />
      <Products />
    </MainStyled>
  );
}

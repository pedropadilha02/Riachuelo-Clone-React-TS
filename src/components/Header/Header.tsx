import styled from 'styled-components';
import { LogoDesktop } from './LogoDesktop';
import { Menu } from './Menu/Menu';
import { SearchBar } from './SearchBar/SearchBar';
import { Sidebar } from './Sidebar/Sidebar';
import { TopBar } from './TopBar/TopBar';

const HeaderStyled = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  background-color: white;
`;

const HeaderFixed = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  background-color: white;
  z-index: 1000;
`;

const HeaderContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 8px 24px 8px 24px;
  width: 95%;
  max-width: 1200px;

  @media (max-width: 1200px) {
    box-sizing: border-box;
    margin: auto;
    padding: 5px;
    widht: 100%;
  }
`;

export function Header() {
  return (
    <>
      <HeaderFixed>
        <TopBar />
        <Sidebar />
        <HeaderContainerStyled>
          <LogoDesktop />
          <SearchBar />
          <Menu />
        </HeaderContainerStyled>
      </HeaderFixed>
      <HeaderStyled>
        <TopBar />
        <Sidebar />
        <HeaderContainerStyled>
          <LogoDesktop />
          <SearchBar />
          <Menu />
        </HeaderContainerStyled>
      </HeaderStyled>
    </>
  );
}

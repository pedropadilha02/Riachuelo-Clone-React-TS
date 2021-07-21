import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { LogoMobile } from './LogoMobile';
import { SideItem } from './SideItem';

const MenuMobile = styled.div`
  display: none;
  margin-bottom: 0px;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

const MenuHeader = styled.div`
  height: 70px;
  width: 100%;
`;

const MenuButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px;
  width: 28px;
  height: 28px;
  opacity: 54%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuIcon = styled.img`
  width: 24px;
  padding-bottom: 3px;
  margin: 0;
  border-radius: 50%;
  &:active {
    background-color: grey;
  }
`;

const MenuTitle = styled.p`
  margin: 0;
  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0px;
  margin: 10px 0px;
  margin-right: 0px;
  width: 80%;
  flex-wrap: nowrap;
  z-index: 9999;
`;

interface CategoriaData {
  id: string;
  label: string;
}

let ChangeMenu: string = '';
let ChangeTitle: string = '';
let openMenu: string = '';

export function Sidebar() {
  const [categories, setCategories] = useState<CategoriaData[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  if (!menuOpen) {
    ChangeMenu = 'http://localhost:3000/assets/menu.svg';
    ChangeTitle = 'menu';
    openMenu = '-100%';
  } else {
    ChangeMenu = 'http://localhost:3000/assets/close.svg';
    ChangeTitle = 'fechar';
    openMenu = '0%';
  }

  const MenuStyled = styled.nav`
    opacity: 0;

    @media (max-width: 1200px) {
      opacity: 1;
      position: absolute;
      width: 80%;
      top: 100px;
      background-color: white;
      z-index: 501;
      left: ${openMenu};
    }
  `;

  return (
    <MenuMobile>
      <MenuHeader>
        <LogoMobile />
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon src={ChangeMenu} />
          <MenuTitle>{ChangeTitle}</MenuTitle>
        </MenuButton>
      </MenuHeader>

      <MenuStyled>
        <MenuList>
          {categories?.map((categoria) => (
            <SideItem key={categoria.id} categoria={categoria} />
          ))}
        </MenuList>
      </MenuStyled>
    </MenuMobile>
  );
}

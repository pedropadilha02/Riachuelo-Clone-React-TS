import styled from 'styled-components';

const MenuItemStyled = styled.li`
    list-style: none;
    
    &:hover {
        border-bottom: 2px solid #000;
        margin-bottom: -2px;
    }

    @media(max-width: 1200px) {
        width: 100%;
        padding-top: 10px;
        padding-left: 15px;
        padding-bottom: 10px;
        padding-right: 0px;
        border-bottom: 1px solid gray

        &:hover {
            border: none;
            background-color: red;
        }
    }
`;

const MenuLink = styled.a`
  width: 100%;
  hegiht: 100%;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  padding-bottom: 5px;
  vertical-align: baseline;
  white-space: nowrap;
`;

interface CategoriaData {
  categoria: { id: string; label: string };
}

export function MenuItem({ categoria }: CategoriaData) {
  return (
    <MenuItemStyled>
      <MenuLink>{categoria.label}</MenuLink>
    </MenuItemStyled>
  );
}

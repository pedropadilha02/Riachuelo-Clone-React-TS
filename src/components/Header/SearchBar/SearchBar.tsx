import styled from 'styled-components';
import { useProduct } from '../../../context/ProductContext';

const SearchStyled = styled.div`
  position: relative;

  @media (max-width: 1200px) {
    box-sizing: border-box;
  }
`;

const SearchIcon = styled.img`
  width: 32px;
  opacity: 26%;
  top: 8px;
  position: absolute;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
  margin: auto 0;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding-left: 40px;

  &:hover {
    border-color: #000;
  }

  &::placeholder {
    font-size: 0.9375rem;
    font-weight: 600;
    font-family: 'Open Sans';
    color: #9b9b9b;
  }
`;

export function SearchBar() {
  const { text, setText } = useProduct();

  function searchProducts(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <SearchStyled>
      <SearchIcon src="http://localhost:3000/assets/search.svg" />
      <SearchInput
        type="search"
        placeholder="O que você está procurando?"
        value={text}
        onChange={searchProducts}
      />
    </SearchStyled>
  );
}

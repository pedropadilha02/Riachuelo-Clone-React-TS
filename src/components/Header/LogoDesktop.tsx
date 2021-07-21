import styled from 'styled-components';

const Logo = styled.h1`
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export function LogoDesktop() {
  return (
    <Logo>
      <img src="http://localhost:3000/assets/riachuelo.svg" alt="" />
    </Logo>
  );
}

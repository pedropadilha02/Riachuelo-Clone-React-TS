import styled from 'styled-components';
import { useState } from 'react';

const Logo = styled.h1`
  display: block;

  @media (max-width: 1200px) {
    opacity: 1;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin: 0;
    position: absolute;
    width: 100%;
  }
`;

export function LogoMobile() {
  return (
    <Logo>
      <img src="http://localhost:3000/assets/rchlo.svg" alt="" />
    </Logo>
  );
}

import styled from 'styled-components';
import { Contact } from './Contact/Contact';
import { Payment } from './Payment/Payment';
import { Links } from './Links/Links';
import { Copy } from './Copy/Copy';

const FooterStyled = styled.div`
  border-top: 2px solid lightgray;
  padding-top: 20px;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterStyled>
      <Contact />
      <Links />
      <Payment />
      <Copy />
    </FooterStyled>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import styled from 'styled-components';

const TopBarStyled = styled.div`
  background-color: #000;
  width: 100%;
  height: 30px;
  color: #fff;
  font-size: 0.8437rem;
  font-weight: 600;
  font-family: 'Open Sans';

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const TopBar__ListStyled = styled.nav`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: auto;
  width: 95%;
  box-sizing: border-box;
  max-width: 1200px;
  padding: 6px 22px;

  @media (max-width: 1200px) {
    padding: 6px 0px 0px 10px;
    grid-template-columns: none;
    display: inline-block;
    box-sizing: border-box;
  }
`;

const TopBar__Left = styled.ul`
  text-align: left;
  display: flex;
  justify-content: space-between;
  width: 75%;
  list-style: none;
  margin: 0px;
  padding: 0px;

  @media (max-width: 1200px) {
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media (max-width: 600) {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const TopBar__Right = styled.ul`
  text-align: right;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.7093rem;
  list-style: none;
  margin: 0px;
  padding: 0px;

  & > li > a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const TopBar__WhatsApp = styled.a`
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: rgb(0, 156, 109);
`;

const TopBar__item = styled.li`
  white-space: nowrap;

  @media (max-width: 1200px) {
    margin-right: 30px;
    text-align: center;
  }
`;
const TopBar__icon = styled.img`
  width: 18px;
  height: 15px;
  vertical-align: middle;
  padding-right: 8px;
`;
const TopBar__link = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export function TopBar() {
  return (
    <TopBarStyled>
      <TopBar__ListStyled>
        <TopBar__Left>
          <TopBar__item>
            <TopBar__link>BAIXE O APP</TopBar__link>
          </TopBar__item>
          <TopBar__item>
            <TopBar__link>CARTER'S</TopBar__link>
          </TopBar__item>
          <TopBar__item>
            <TopBar__link>CASA RIACHUELO</TopBar__link>
          </TopBar__item>
          <TopBar__item>
            <TopBar__link>BÁSICOS</TopBar__link>
          </TopBar__item>
          <TopBar__item>
            <TopBar__link>JEANS</TopBar__link>
          </TopBar__item>
        </TopBar__Left>
        <TopBar__Right>
          <TopBar__item>
            <TopBar__icon
              src="http://localhost:3000/assets/whatsappIcon.png"
              alt=""
            />
            <TopBar__WhatsApp>COMPRE PELO WHATSAPP</TopBar__WhatsApp>
          </TopBar__item>
          <TopBar__item>
            <TopBar__icon
              src="http://localhost:3000/assets/phoneIcon.png"
              alt=""
            />
            <TopBar__link>ATENDIMENTO</TopBar__link>
          </TopBar__item>
          <TopBar__item>
            <TopBar__icon
              src="http://localhost:3000/assets/localizationIcon.png"
              alt=""
            />
            <TopBar__link>NOSSAS LOJAS</TopBar__link>
          </TopBar__item>
          <TopBar__item>
            <TopBar__icon src="http://localhost:3000/assets/wifiIcon.png" />
            <TopBar__link>BLOG</TopBar__link>
          </TopBar__item>
          <TopBar__item>
            <TopBar__icon src="http://localhost:3000/assets/creditCardIcon.png" />
            <TopBar__link>CARTÃO RIACHUELO</TopBar__link>
          </TopBar__item>
        </TopBar__Right>
      </TopBar__ListStyled>
    </TopBarStyled>
  );
}

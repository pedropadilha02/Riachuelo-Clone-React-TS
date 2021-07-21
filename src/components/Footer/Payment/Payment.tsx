import styled from 'styled-components';

const PaymentSection = styled.section`
  margin: 15px auto;
  width: 90%;

  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
`;

const PaymentContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
`;

const PaymentTitle = styled.h3`
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
  font-size: 1em;
  font-weight: bold;
`;
const PaymentCards = styled.div`
  width: 50%;
  display: block;
`;

const PaymentImg = styled.img`
  margin: 2px;
  width: auto;
`;
const PaymentSocial = styled.div`
  flex-grow: 1;
  display: block;
`;

const SocialItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
`;

const SocialItem = styled.div`
  display: block;
  margin: 0px;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const SocialText = styled.p`
  color: #261e1e;
  font-size: 11px;
  text-align: center;
`;

const SocialIcon = styled.img`
  display: block;
  margin: auto;
  height: 25px;
  width: 25px;
`;

const Accessibility = styled.div`
  flex-grow: 1;
  display: block;
  margin-left: 50px;
`;

const AccessibilityImg = styled.img`
  height: 30px;
  widht: 30px;
`;

export function Payment() {
  return (
    <PaymentSection>
      <PaymentContainer>
        <PaymentCards>
          <PaymentTitle>Formas de Pagamento</PaymentTitle>
          <PaymentImg
            src="http://localhost:3000/assets/ico-cartao-rchlo1.webp"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-cartao-rchlo2.webp"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-cartao-rchlo3.webp"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-cartao-visa.png"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-cartao-master.webp"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-cartao-amex.webp"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-cartao-diners.png"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-cartao-elo.png"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-boleto.webp"
            alt=""
          />
          <PaymentImg
            src="http://localhost:3000/assets/ico-paypal.png"
            alt=""
          />
        </PaymentCards>
        <PaymentSocial>
          <PaymentTitle>Siga a Riachuelo</PaymentTitle>
          <SocialItemsContainer>
            <SocialItem>
              <a href="#">
                <SocialIcon
                  src="http://localhost:3000/assets/ico-facebook.svg"
                  alt=""
                />
              </a>
            </SocialItem>

            <SocialItem>
              <a href="#">
                <SocialIcon
                  src="http://localhost:3000/assets/ico-instagram.svg"
                  alt=""
                />
              </a>
              <SocialText>RCHLO</SocialText>
            </SocialItem>

            <SocialItem>
              <a href="#">
                <SocialIcon
                  src="http://localhost:3000/assets/ico-instagram.svg"
                  alt=""
                />
              </a>
              <SocialText>
                CASA
                <br />
                RCHLO
              </SocialText>
            </SocialItem>

            <SocialItem>
              <a href="#">
                <SocialIcon
                  src="http://localhost:3000/assets/ico-pinterest.svg"
                  alt=""
                />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#">
                <SocialIcon
                  src="http://localhost:3000/assets/ico-twitter.svg"
                  alt=""
                />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#">
                <SocialIcon
                  src="http://localhost:3000/assets/ico-youtube.svg"
                  alt=""
                />
              </a>
            </SocialItem>
            <SocialItem>
              <a href="#">
                <SocialIcon
                  src="http://localhost:3000/assets/ico-linkedin.svg"
                  alt=""
                />
              </a>
            </SocialItem>
          </SocialItemsContainer>
        </PaymentSocial>
        <Accessibility>
          <PaymentTitle>Acessibilidade</PaymentTitle>
          <AccessibilityImg
            src="http://localhost:3000/assets/ico-a11y.webp"
            alt=""
          />
        </Accessibility>
      </PaymentContainer>
    </PaymentSection>
  );
}

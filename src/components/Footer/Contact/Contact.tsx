import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 73%;
  height: 80px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }
`;

const ContactNewsLetter = styled.p`
  height: 50px;
  line-height: 50px;
  text-transform: uppercase;
  font-size: 0.8125rem;
  white-space: nowrap;
  @media (max-width: 1200px) {
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ContactInput = styled.input`
  height: 24px;
  line-height: 24px;
  border: 0px;
  border-bottom: 1px solid rgba(38, 30, 30, 0.42);
  outline: none;
  width: 300px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;

  &:hover {
    border-bottom: 2px solid #261e1e;
  }

  &:focus-within {
    border-bottom: 2px solid #261e1e;
  }

  &::placeholder {
    font-style: italic;
    opacity: 42%;
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 20px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const ContactButton = styled.button`
  margin-left: 20px;
  color: rgba(0, 0, 0, 0.26);
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: none;
  padding: 8px 10px 8px 10px;
  font-size: 0.8125rem;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ContactApp = styled.div`
  height: 37px;
  display: flex;

  @media (max-width: 1200px) {
  }
`;

const ContactAppText = styled.p`
  font-size: 0.9375rem;
  height: 37px;
  line-height: 37px;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0;

  @media (max-width: 1200px) {
    text-align: center;
    margin-bottom: 0;
    flex-direction: column;
  }
`;

const ContactAppImg = styled.img`
  width: 110px;
  margin-left: 8px;

  @media (max-width: 1200px) {
    margin: 0 40px;
  }
`;

export function Contact() {
  return (
    <ContactContainer>
      <ContactNewsLetter>
        Receba ofertas e novidades por e-mail
      </ContactNewsLetter>
      <ContactForm>
        <ContactInput type="email" placeholder="Digite aqui seu e-mail" />
        <ContactButton>Cadastrar</ContactButton>
      </ContactForm>
      <ContactAppText>Baixe nosso App</ContactAppText>
      <ContactApp>
        <ContactAppImg src="http://localhost:3000/assets/app-store.webp" />
        <ContactAppImg src="http://localhost:3000/assets/google-play.webp" />
      </ContactApp>
    </ContactContainer>
  );
}

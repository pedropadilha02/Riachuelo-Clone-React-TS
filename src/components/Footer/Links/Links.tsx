import styled from 'styled-components';

const LinkSection = styled.section`
  background-color: #f6f6f6;
  margin-top: 16px;
  padding: 16px;
  display: block;
  left: 0%;
  width: 100%;
  margin-left: 0;
`;

const LinkContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 75%;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
`;

const AtendImg = styled.img`
  display: block;
  margin: auto;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
`;

const AtendText = styled.p`
  padding: 8px;
  font-size: 0.8125rem;
  white-space: pre-line;

  &:hover {
    text-decoration: underline;
  }
`;

const AtendIcon = styled.a`
  text-align: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 100px;
  margin-top: 20px;
  justify-content: center;
`;

const AtendColumn = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

const AtendContainer = styled.div`
  width: 30%;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Separador = styled.hr`
  width: 1px;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
  display: block;
  margin-right: 80px;
  margin-left: 10px;
  overflow: hidden;
`;

const ContactList = styled.ul`
  display: flex;
  width: 70%;
  list-style-type: none;
`;

const ConctactGroupItem = styled.li`
  flex-grow: 1;
  margin-left: 8px;
  margin-right: 8px;
  list-style: none;
`;

const ContactTitle = styled.h3`
  text-transform: uppercase;
  font-size: 0.875rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #444444;
  font-weight: 500;
`;

const ContactGroup = styled.ul`
  padding-left: 0px;
`;

const ConctactList = styled.li`
  padding-top: 8px;
  list-style: none;
`;

const ContactLink = styled.a`
  line-height: 25px;
  font-size: 0.6875rem;
  font-weight: 400;
  color: grey;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
`;

export function Links() {
  return (
    <LinkSection>
      <LinkContainer>
        <AtendContainer>
          <AtendColumn>
            <AtendIcon>
              <AtendImg
                src="http://localhost:3000/assets/ico-attendance.svg"
                alt="Atendimento"
              />
              <AtendText>Atendimento</AtendText>
            </AtendIcon>
            <AtendIcon>
              <AtendImg
                src="http://localhost:3000/assets/ico-invoice-and-statement.svg"
                alt="Fatura e Extrato"
              />
              <AtendText>Fatura e Extrato</AtendText>
            </AtendIcon>
          </AtendColumn>
          <AtendColumn>
            <AtendIcon>
              <AtendImg
                src="http://localhost:3000/assets/ico-faq.svg"
                alt="Perguntas Frequentes"
              />
              <AtendText>Perguntas Frequentes</AtendText>
            </AtendIcon>
            <AtendIcon>
              <AtendImg
                src="http://localhost:3000/assets/ico-work-with-us.svg"
                alt="Trabalhe Conosco"
              />
              <AtendText>Trabalhe Conosco</AtendText>
            </AtendIcon>
          </AtendColumn>
        </AtendContainer>
        <Separador />
        <ContactList>
          <ConctactGroupItem>
            <ContactTitle>Cartão Riachuelo</ContactTitle>
            <ContactGroup>
              <ConctactList>
                <ContactLink>Midway Financeira</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Saiba como adquirir</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Veja sua fatura e extrato</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Buscando quitar suas dívidas?</ContactLink>
              </ConctactList>
            </ContactGroup>
          </ConctactGroupItem>
          <ConctactGroupItem>
            <ContactTitle>Sobre a Riachuelo</ContactTitle>
            <ContactGroup>
              <ConctactList>
                <ContactLink>A Empresa</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Portal de Fornecedores</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Relação com Investidores</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Assessoria de Imprensa</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Trabalhe Conosco</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Programa Jovem Aprendiz</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Cadastro de Startups</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink> Mapa do Site </ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink> Guide Shop </ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Venda na Riachuelo Marketplace</ContactLink>
              </ConctactList>
            </ContactGroup>
          </ConctactGroupItem>
          <ConctactGroupItem>
            <ContactTitle>Moda que Transforma</ContactTitle>
            <ContactGroup>
              <ConctactList>
                <ContactLink>Na prática</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Entre Costuras</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Jeans Mais Transparente</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Ações Covid-19</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Free Free</ContactLink>
              </ConctactList>
            </ContactGroup>
          </ConctactGroupItem>
          <ConctactGroupItem>
            <ContactTitle>Ajuda</ContactTitle>
            <ContactGroup>
              <ConctactList>
                <ContactLink>Atendimento</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Perguntas Frequentes</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Trocas e Devoluções</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Portal da Privacidade</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Política de Privacidade</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Termos e Condições de Uso</ContactLink>
              </ConctactList>
              <ConctactList>
                <ContactLink>Regras e Resultados de Sorteios</ContactLink>
              </ConctactList>
            </ContactGroup>
          </ConctactGroupItem>
        </ContactList>
      </LinkContainer>
    </LinkSection>
  );
}

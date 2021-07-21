import styled from 'styled-components';

const CopySection = styled.section`
  background-color: #f6f6f6;
  padding: 20px 0;
`;
const CopyContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 73%;
`;
const CopyArea = styled.div`
  width: 73.333333%;
  display: block;
`;

const CopyText = styled.p`
  font-size: 9px;
  color: grey;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const StampContainer = styled.div`
  margin: 0 auto;
  display: block;
`;

const StampImg = styled.img`
  width: 47px;
  height: 60ox;
`;
export function Copy() {
  return (
    <CopySection>
      <CopyContainer>
        <CopyArea>
          <CopyText>
            © Copyright 2017 - 2019. Todos os direitos reservados. Lojas
            Riachuelo S/A. Rua Landri Sales, 1.070, G02 Anexo B, Guarulhos - SP
            - Brasil
            <br />
            CEP 07250-130 CNPJ 33.200.056/0441-97 | IE 796.420.926.112 | SAC
            4003-0515.Direção de fotografia de produtos por Adriano Adrião.
            <br />
            Pagamento com Cartão Riachuelo, parcelas mínimas de R$ 15,00. Para
            os demais cartões Visa, Mastercard, Elo, Diners, Hipercard e
            American Express, parcelas mínimas de R$ 30,00.
            <br />
            * COMPRE NO SITE e RETIRE NA LOJA com FRETE GRÁTIS, conforme lojas
            participantes. Consulte as lojas participantes nas opções de frete
            do seu pedido, conforme CEP de entrega cadastrado.
            <br />
            Frete único de R$ 4,99 para Sul e Sudeste em compras a partir de R$
            129,00. Demais regiões o valor estará sujeito a variações. Condição
            por tempo indeterminado, para tipo de entrega “normal”.
            <br />
            Preços, promoções, condições de pagamento, valores de frete e
            disponibilidade de estoque são aplicados somente nas compras
            efetuadas na loja online Riachuelo. Existe uma limitação de peças
            iguais no mesmo pedido que muda de acordo com o tipo de produto.
            <br />
            Em caso de divergência de valores entre a página do produto e a
            Sacola de Compras, a Riachuelo se reserva a garantir o valor exibido
            na Sacola de Compras.
          </CopyText>
        </CopyArea>
        <StampContainer>
          <StampImg src="http://localhost:3000/assets/ra1000.webp" alt="" />
        </StampContainer>
      </CopyContainer>
    </CopySection>
  );
}

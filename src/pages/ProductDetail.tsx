import { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 8px 24px 8px 24px;
  width: 95%;
  max-width: 1200px;
`;

const BreadcrumbDiv = styled.div`
  padding: 8px 0px;
  display: flex;
`;

const CurrentItem = styled(Link)`
  color: grey;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
`;

const Separador = styled.p`
  color: grey;
  font-size: 14px;
  padding: 0 10px;
  font-style: italic;
`;

const CurrentName = styled.p`
  color: #303030;
  font-size: 13px;
`;

const ProductArea = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: space-around;
`;

const ProductImg = styled.img`
  width: 30vw;
  padding: 30px;
  box-sizing: border-box;
`;

const Productinfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  padding: 10px;
  justify-content: space-between;
`;

const ProductName = styled.h1`
  font-size: 24px;
`;

const SizeDiv = styled.div`
  margin: 5px 0;
`;
const SelectedSize = styled.p`
  font-size: 18px;
  text-align: left;
`;

const SizeBox = styled.button`
  border-radius: 3px;
  border: 1px solid grey;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  margin-top: 10px;
  background-color: white;
  &:hover {
    color: white;
    background-color: grey;
    border: 1px solid black;
  }

  &:active {
    color: white;
    background-color: black;
    border: 1px solid grey;
  }
`;

const ProductCard = styled.div`
  height: 40%;
  box-shadow: 0px 3px 10px grey;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15% 0;
`;

const ProductPrice = styled.p`
  color: darkred;
  font-size: 24px;
  margin: auto;
`;

const AddButton = styled.button`
  width: 100%;
  height: 20%;
  color: white;
  background-color: green;
  justify-content: center;
  border-radius: 3px;
  border: none;
  margin: 5px;
  box-shadow: 0px 1px 5px grey;
`;

const CancelButton = styled.button`
  width: 100%;
  height: 20%;
  color: white;
  background-color: #bf0d0d;
  justify-content: center;
  border-radius: 3px;
  border: none;
  margin: 5px;
  box-shadow: 0px 1px 5px grey;
`;

interface ParamsProps {
  id: string;
}

interface ProductData {
  image: string;
  name: string;
  price: string;
  size: string;
}

export function ProductDetail() {
  const { id } = useParams<ParamsProps>();
  const [product, setProduct] = useState<ProductData>();
  const history = useHistory();

  function handleAdd() {
    alert('Produto adicionado na sacola');
    history.push('/');
  }

  function handleCancel() {
    history.push('/');
  }

  useEffect(() => {
    fetch(`http://localhost:5000/products/${Number(id)}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [id]);

  return (
    <>
      <DetailContainer>
        <BreadcrumbDiv>
          <CurrentItem to="/">Home</CurrentItem>
          <Separador>/</Separador>
          <CurrentName>{product && product.name}</CurrentName>
        </BreadcrumbDiv>
        <ProductArea>
          {product && (
            <ProductImg
              src={`${window.location.origin}/${product.image}`}
              alt={product.name}
            />
          )}
          <Productinfo>
            <ProductName>{product && product.name}</ProductName>
            <SizeDiv>
              <SelectedSize>Selecionar Tamanho:</SelectedSize>
              <SizeBox>4</SizeBox>
              <SizeBox>6</SizeBox>
              <SizeBox>8</SizeBox>
              <SizeBox>10</SizeBox>
            </SizeDiv>
            <ProductCard>
              <ProductPrice>R$ {product && product.price}</ProductPrice>
              <AddButton onClick={handleAdd}>Adicionar a Sacola</AddButton>
              <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
            </ProductCard>
          </Productinfo>
        </ProductArea>
      </DetailContainer>
    </>
  );
}

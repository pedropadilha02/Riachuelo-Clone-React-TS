import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useProduct } from '../../../context/ProductContext';

const ProductCard = styled.li`
  cursor: pointer;
  border: 1px solid white;
  margin: 8px;
  padding-bottom: 8px;
  &:hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

const ProductLink = styled(Link)``;

const ProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProductName = styled.p`
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: black;
`;

interface ProductData {
  product: { sku: number; image: string; name: string; price: string };
}

export function ProductItem({ product }: ProductData) {
  return (
    <ProductCard>
      <ProductLink to={`/products/${product.sku}`}>
        <ProductImg src={product.image} alt="" />
      </ProductLink>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
    </ProductCard>
  );
}

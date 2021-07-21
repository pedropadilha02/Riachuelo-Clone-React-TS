import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductItem } from './ProductItem';
import { useLoading } from '../../Context/Loading';
import { Spinner } from '../Spinner/Spinner';
import { useProduct } from '../../../context/ProductContext';

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  padding-left: 0px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

interface ProductsData {
  sku: number;
  image: string;
  name: string;
  price: string;
}

interface FilteredData {
  sku: number;
  image: string;
  name: string;
  price: string;
}

export function Products() {
  const [productsOption, setProductsOption] = useState<ProductsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filtered, setFiltered] = useState<FilteredData[]>([]);
  const { text } = useProduct();

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/products');
      if (!response.ok) {
        throw new Error('erro');
      }
      const json = await response.json();
      setProductsOption(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (text) filterBySearch(text);
  }, [text]);

  function filterBySearch(text: string) {
    const filtered = productsOption.filter((product) => {
      return (
        product.name.toLowerCase().includes(text.toLowerCase()) ||
        product.price.toLowerCase().includes(text.toLowerCase())
      );
    });
    setFiltered(filtered);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  console.log(filtered);

  return (
    <ProductStyled>
      {loading && <Spinner />}
      <ProductList>
        {filtered.length > 0
          ? filtered?.map((product) => (
              <ProductItem key={product.sku} product={product} />
            ))
          : productsOption?.map((product) => (
              <ProductItem key={product.sku} product={product} />
            ))}
      </ProductList>
    </ProductStyled>
  );
}

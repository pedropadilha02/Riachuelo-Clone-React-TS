import { createContext, SetStateAction, useContext, useState } from 'react';

interface ProductContextData {
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

export function ProductProvider({ children }: any) {
  const [text, setText] = useState<string>('');
  console.log(text);
  return (
    <ProductContext.Provider value={{ text, setText }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => useContext(ProductContext);

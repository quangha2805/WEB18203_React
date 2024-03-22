import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { DemoData } from "../types";


export const ProductContext = createContext<DemoData[]>([]);

type UserProviderProps = {
  children: ReactNode;
}

export const AppProvider = ({ children }: UserProviderProps) => {
  // Sử dụng useState để lưu trữ dữ liệu từ API
  const [products, setProducts] = useState<DemoData[]>([]);

  // Sử dụng useEffect để gọi API khi component được render
  useEffect(() => {
    fetch(`http://localhost:3002/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Trả về Provider với giá trị là mảng sản phẩm
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
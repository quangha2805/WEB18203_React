import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { DemoData } from "../types";

const ProductList: React.FC = () => {
  const products: DemoData[] = useContext(ProductContext);

  return (
    <div className="container">
      <div className="title text-center fw-light text-uppercase">
        <h1 className='fw-bold m-4'>Product List</h1>
      </div>
      <table className='table table-hover border border-1 text-center'>
        <thead>
          <tr>
            <th className='border border-1 px-4 fw-medium'>Product Name</th>
            <th className='border border-1 px-4 fw-medium'>Image</th>
            <th className='border border-1 px-4 fw-medium'>Description</th>
            <th className='border border-1 px-4 fw-medium'>Price</th>
            <th className='border border-1 px-4 fw-medium'>Category</th>
            <th className='border border-1 px-4 fw-medium'>
              <a href="/addProduct" className='text-decoration-none text-white btn btn-info'>Add Product</a>
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className='border border-1 px-4' style={{ padding: '10px 20px' }}>{product.name}</td>
              <td className='border border-1 px-4' style={{ padding: '10px 20px' }}> <img width={"200px"} height={"100px"} src={product.image} alt={product.name} /></td>
              <td className='border border-1 px-4' style={{ padding: '10px 20px' }}>{product.description}</td>
              <td className='border border-1 px-4' style={{ padding: '10px 20px' }}>{product.price}</td>
              <td className='border border-1 px-4' style={{ padding: '10px 20px' }}>{product.category}</td>
              <td className='border border-1 px-4' style={{ padding: '10px 20px' }}>
                <a href="" className='btn btn-danger text-decoration-none'>Xóa</a>
                <a href="" className='btn btn-success mx-2'>Sửa</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(`https://dummyjson.com/products?limit=4`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                {products.map((product: any) => {
                    return (
                        <div className="col-3 ">
                            <div className="product__img" style={{height: '391px'}}>
                                <img className='w-100 object-fit-fill h-100' src={product.thumbnail} />
                            </div>
                            <h3 className='text-center'>{product.title}</h3>
                            <p className='text-center'>{product.price}$</p>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Product;

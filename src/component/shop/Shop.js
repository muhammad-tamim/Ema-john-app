import React, { useEffect, useState } from 'react';
import Product from '../../products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCard = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-containar'>
            <div className="product">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCard={addToCard}
                    ></Product>)
                }
            </div>
            <div className="order">
                <h2 className='order-title'>Order Summary</h2>
                <br />
                <div className="order-info">
                    <p>Selected Items: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
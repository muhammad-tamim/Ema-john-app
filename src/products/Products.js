import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Product = (props) => {
    // console.log(props);
    return (
        <div className='cards'>
            <div className="card">
                <div className="img-containar">
                    <img src={props.product.img} alt="" />
                </div>
                <div className="card-info">
                    <h3 className='name'>{props.product.name}</h3>
                    <h4>Price :${props.product.price}</h4>
                    <div className="sub-info">
                        <p><small>Manufacturer : {props.product.seller}</small></p>
                        <p><small>Rating : {props.product.ratings}</small></p>
                    </div>
                </div>
                <div className="shop-button">
                    <button onClick={() => props.addToCard(props.product)} className='shop-btn'>
                        <span>Add to card</span>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
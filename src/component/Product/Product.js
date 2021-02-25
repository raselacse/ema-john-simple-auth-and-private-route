import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.products;
    return (
        <div className='product'>
            <div >
                <img src={img} alt="" />
            </div>
            <div >
                <h4>{name}</h4>
                <br />
                <p>by: {seller}</p>
                <p>Price: {price}</p>
                <br />
                <p>Onle {stock} left in stock - order soon</p>
                <br/>
                <button className='add-to-cart'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import happyImage from "../../images/giphy.gif"
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart ]= useState([])
    const [orderPlaced, setorderPlaced ]= useState(false)
    const history = useHistory()


    const handleProceedCheckout = () =>{
        history.push("/shipment");
    }
    
    let thankYou;
    if(orderPlaced){
        thankYou  = <img src={happyImage} alt={happyImage}/>
    }

    const removeProduct = (productKeys) =>{
        console.log("remove clicked")
        const newCart = cart.filter(pd => pd.key !== productKeys)
        setCart(newCart)
        removeFromDatabaseCart(productKeys)
    }
    useEffect(() =>{
        const savedCart = getDatabaseCart()
        const  productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key]
            return product
        });
        setCart(cartProducts)
    }, [])
    return (
        <>
            <div className="twin-container">
                <div className="product-container">
                    <h1>Cart Item {cart.length}</h1>
                    {
                        cart.map(pd => <ReviewItem key={pd.key} 
                                                    removeProduct={removeProduct} 
                                                    product={pd}>
                                        </ReviewItem>)
                    }
                    {thankYou}
                </div>
                
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={handleProceedCheckout} className="place-order">Proceed Checkout</button>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Review;
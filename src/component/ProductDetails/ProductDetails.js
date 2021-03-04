import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {key} = useParams()
    const product = fakeData.find(pd => pd.key === key)
    return (
        <>
            <h1>Product Details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </>
    );
};

export default ProductDetails;
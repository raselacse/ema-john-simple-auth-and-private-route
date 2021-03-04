import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    return (
        <div className="item">
            <h4>{name}</h4>
            <button className="remove">Remove</button>
        </div>
    );
};

export default ReviewItem;
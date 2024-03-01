import React from 'react';
import { Link } from 'react-router-dom';
import "./CartItemCard.css";

const CartItemCard = ({item, deleteCartItems}) => {
    return (
        <div className='CartItemCard'>
            <img className='cartImage' src={item.image} alt="ssa" />
            <div>
                <Link style={{fontFamily:"Urbanist"}}to={`/product/${item.product}`}>{item.name}</Link>    
                <span style={{fontFamily:"Urbanist",fontWeight:"bold"}}>{`Price: Rs ${item.price}`}</span> <br/>
                <p style={{fontFamily:"Urbanist"}}onClick={() => deleteCartItems(item.product)}>Remove</p>
            </div>
        </div>
    ) 
}

export default CartItemCard
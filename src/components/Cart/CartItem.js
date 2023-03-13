import React from 'react';
import classes from './CartItem.module.css';

function CartItem(props) {
	const { name, price, quantity, totalItemPrice } = props.item;
	return (
		<li className={classes.cartItem}>
				<h3>{name}</h3>
				<div className={classes.summary}>
				<span className={classes.price}>Price per item: ${price.toFixed(2)}</span>
				<span className={classes.amount}>Amount: x{quantity}</span>
				<span className={classes.totalItemPrice}>Total: ${totalItemPrice.toFixed(2)}</span>
			</div>
		</li>
	);
}

export default CartItem;

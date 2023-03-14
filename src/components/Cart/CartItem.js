import React from 'react';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

function CartItem(props) {
	const dispatch = useDispatch()

	const { name, price, quantity, totalItemPrice, id } = props.item;
	const removeItemHandler = () => {
		dispatch(cartActions.removeItemFromCart(id))
	}

	const addToCartHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				id: id,
				name: name,
				price: price,
				quantity: 1,
				totalItemPrice: quantity * price,
			})
		);
	};

	const removeItemsHandler = () => {
		dispatch(cartActions.removeItemsFromCart(id))
	}

	return (
		<li className={classes.cartItem}>
			<h3 className={classes.name}>{name}</h3>
			<div className={classes.summary}>
				<p className={classes.price}>
					Price per item: <span>${price.toFixed(2)}</span>
				</p>
				<p className={classes.amount}>
					Amount: <span>x{quantity}</span>
				</p>
				<p className={classes.totalItemPrice}>
					Total: <span>${totalItemPrice.toFixed(2)}</span>
				</p>
			</div>
			<button onClick={removeItemsHandler} className={classes.removeButton}>Remove</button>
			<div className={classes.actions}>
				<button onClick={addToCartHandler}>+</button>
				<button onClick={removeItemHandler}>-</button>
			</div>
		</li>
	);
}

export default CartItem;

import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../UI/Modal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = props => {
	const cartItems = useSelector(state => state.cart.items);
	const totalPrice = useSelector(state => state.cart.totalPrice);


	return (
		<Modal onClose={props.onClose}>
			<Card className={classes.cart}>
				<h2>Your Shopping Cart:</h2>
					{cartItems.length === 0 && <p>Please add some items to your shopping cart!</p>}
				<ul className={classes.cartItems}>
					{cartItems.map(item => (
						<CartItem
							key={item.id}
							item={{
								name: item.name,
								price: item.price,
								id: item.id,
								quantity: item.quantity,
								totalItemPrice: item.totalItemPrice,
							}}
						/>
					))}
				</ul>
				<p className={classes.totalAmount}>Total Amount: ${totalPrice.toFixed(2)}</p>
				<div className={classes.actions}>
					<Button onClick={props.onClose}>Close</Button>
					<Button>Order</Button>
				</div>
			</Card>
		</Modal>
	);
};

export default Cart;

import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../UI/Modal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import CartItem from './CartItem';

const Cart = props => {
	const cartItems = useSelector(state => state.cart.items);

	return (
		<Modal onClose={props.onClose}>
			<Card>
				<h2>Your Shopping Cart:</h2>
				<ul>
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
				<p>Total Amount: $449</p>
				<Button onClick={props.onClose}>Close</Button>
			</Card>
		</Modal>
	);
};

export default Cart;

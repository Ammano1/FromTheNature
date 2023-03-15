import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../UI/Modal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import CartItem from './CartItem';
import OrderForm from './OrderForm';
import { uiActions } from '../../store/ui-slice';

import classes from './Cart.module.css';

const Cart = props => {
	const dispatch = useDispatch();

	const cartItems = useSelector(state => state.cart.items);
	const totalPrice = useSelector(state => state.cart.totalPrice);
	const isOrdering = useSelector(state => state.ui.isOrdering);

	const isEmpty = cartItems.length === 0

	const orderingHandler = () => {
		dispatch(uiActions.toogleOrder());
	};

	const cart = (
		<>
			<h2>Your Shopping Cart:</h2>
			{isEmpty && <p>Please add some items to your shopping cart!</p>}
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
				{!isEmpty && <Button onClick={orderingHandler}>Order</Button>}
			</div>
		</>
	);

	return (
		<Modal onClose={props.onClose}>
			<Card className={classes.cart}>
				{!isOrdering && cart}
				{isOrdering && <OrderForm onClose={props.onClose} onPrev={orderingHandler} totalAmount={totalPrice.toFixed(2)}/>
				}
				</Card>
		</Modal>
	);
};

export default Cart;

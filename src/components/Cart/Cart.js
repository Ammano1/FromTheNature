import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../UI/Modal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import CartItem from './CartItem';
import OrderForm from './OrderForm';
import { uiActions } from '../../store/ui-slice';
import { Link } from 'react-router-dom';

import classes from './Cart.module.css';
import Summary from './Summary';
import { orderActions } from '../../store/order-slice';

const Cart = props => {
	const dispatch = useDispatch();

	const cartItems = useSelector(state => state.cart.items);
	const totalPrice = useSelector(state => state.cart.totalPrice);
	const isOrdering = useSelector(state => state.ui.isOrdering);
	const isSending = useSelector(state => state.order.isSending);

	const isEmpty = cartItems.length === 0;

	const orderingHandler = () => {
		dispatch(uiActions.toogleOrder());
	};

	const summaryHandler = () => {
		dispatch(orderActions.isSending());
	};

	const emptyCart = (
		<>
			<Link className={classes.emptyCart} to='/shop' onClick={props.onClose}>Add some fresh fruits&veggies!</Link>
		</>
	);

	const cart = (
		<>
			<h2>Your Shopping Cart:</h2>
			{isEmpty && emptyCart}
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
				{isOrdering && !isSending && (
					<OrderForm
						onClose={props.onClose}
						onPrev={orderingHandler}
						totalAmount={totalPrice.toFixed(2)}
					/>
				)}
				{isSending && <Summary onReturn={summaryHandler} />}
			</Card>
		</Modal>
	);
};

export default Cart;

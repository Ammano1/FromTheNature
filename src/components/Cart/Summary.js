import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../UI/Button';
import classes from './Summary.module.css';

function Summary(props) {
	const person = useSelector(state => state.order.person);
	const cartItems = useSelector(state => state.cart.items);
	const totalPrice = useSelector(state => state.cart.totalPrice);

  const sendOrderHandler = () => {
    
  }

	const items = cartItems.map(item => (
		<li key={item.id}>
			<span>{item.name}: </span> x{item.quantity} ${item.totalItemPrice.toFixed(2)}
		</li>
	));

	return (
		<>
			<h2>Summary</h2>
			<div className={classes.order}>
				<ul className={classes.personDetails}>
					<li>
						<span>Name: </span>
						{person.name}
					</li>
					<li>
						<span>Email: </span>
						{person.email}
					</li>
					<li>
						<span>Phone: </span>
						{person.phone}
					</li>
					<li>
						<span>City: </span>
						{person.city}
					</li>
					<li>
						<span>Street: </span>
						{person.street}
					</li>
				</ul>
				<ul className={classes.items}>{items}
        <li className={classes.price}>Total: ${totalPrice.toFixed(2)}</li>
        </ul>
			</div>
      <div className={classes.actions}>

      <Button onClick={props.onReturn}>Go Back</Button>
			<Button onClick={sendOrderHandler}>Send Order</Button>
      </div>
		</>
	);
}

export default Summary;

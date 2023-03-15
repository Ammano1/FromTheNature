import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './OrderForm.module.css';

function OrderForm(props) {
	const submitHandler = () => {};

	return (
		<div className={classes.order}>
			<h2>Please enter details:</h2>
			<form  onSubmit={submitHandler} className={classes.submit}>
				<Input
					label='Name:'
					input={{
						id: 'name',
						type: 'text',
					}}
				/>
				<Input
					label='Email:'
					input={{
						id: 'email',
						type: 'text',
					}}
				/>
				<Input
					label='City'
					input={{
						id: 'city',
						type: 'text',
					}}
				/>
				<Input
					label='Street'
					input={{
						id: 'city',
						type: 'text',
					}}
				/>
				<Button >Submit Order</Button>
			</form>
			<div className={classes.actions}>
				<p className={classes.totalAmount}>Total Amount: ${props.totalAmount}</p>
				<div className={classes.buttons}>
					<Button onClick={props.onPrev}>Go Back</Button>
					<Button onClick={props.onClose}>Close</Button>
				</div>
			</div>
		</div>
	);
}

export default OrderForm;

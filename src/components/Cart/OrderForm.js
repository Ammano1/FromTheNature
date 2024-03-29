import React, { useRef } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './OrderForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../../store/order-slice';

function OrderForm(props) {
	const dispatch = useDispatch();
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const phoneInputRef = useRef();
	const cityInputRef = useRef();
	const streetInputRef = useRef();
	

	const isFirstTry = useSelector(state => state.order.isFirstTry);
	const isFormValid = useSelector(state => state.order.isFormValid);
	const person = useSelector(state => state.order.person)

	const inputHandler = (property) => {
		switch(property) {
			case 'name':
				return person.name
			case 'email':
				return person.email
			case 'phone':
				return person.phone
			case 'city':
				return person.city
			case 'street':
				return person.street

			default:
				return ''
		}

	}


	const nameIsNotEmpty = useSelector(state => state.order.personIsValid.nameIsNotEmpty);
	const isEmailValid = useSelector(state => state.order.personIsValid.isEmailValid);
	const isPhoneValid = useSelector(state => state.order.personIsValid.isPhoneValid);
	const cityIsNotEmpty = useSelector(state => state.order.personIsValid.cityIsNotEmpty);
	const streetIsNotEmpty = useSelector(state => state.order.personIsValid.streetIsNotEmpty);

	const messaggeIsEmpty = 'Minimum: 3 characters. ';
	const messaggeIsEmail = 'Please enter a valid email. ';
	const messaggeIsPhoneValid = 'Please enter a valid phone number';

	const submitHandler = event => {
		event.preventDefault();
		const newItemName = nameInputRef.current.value;
		const newItemEmail = emailInputRef.current.value;
		const newItemPhone = phoneInputRef.current.value;
		const newItemCity = cityInputRef.current.value;
		const newItemStreet = streetInputRef.current.value;

		const newPerson = {
			id: new Date().getDate() + Math.random(),
			name: newItemName,
			email: newItemEmail,
			phone: newItemPhone,
			city: newItemCity,
			street: newItemStreet,
		};

		dispatch(orderActions.isFirtTry());

		dispatch(orderActions.addPerson(newPerson));
		
	};

	return (
		<div className={classes.order}>
			<h2>Please enter details:</h2>
			<form
				onSubmit={submitHandler}
				className={classes.submit}>
				<Input
					ref={nameInputRef}
					label='Name:'
					input={{
						id: 'name',
						type: 'text',
						defaultValue: inputHandler('name')
					}}>
					<p className={classes.error}>{!isFirstTry && !nameIsNotEmpty && messaggeIsEmpty}</p>
				</Input>
				<Input
					ref={emailInputRef}
					label='Email:'
					input={{
						id: 'email',
						type: 'text',
						defaultValue: inputHandler('email')
					}}>
					<p className={classes.error}>{!isFirstTry && !isEmailValid && messaggeIsEmail}</p>
				</Input>
				<Input
					ref={phoneInputRef}
					label='Phone:'
					input={{
						id: 'phone',
						type: 'tel',
						defaultValue: inputHandler('phone')
					}}>
					<p className={classes.error}>{!isFirstTry && !isPhoneValid && messaggeIsPhoneValid}</p>
				</Input>
				<Input
					ref={cityInputRef}
					label='City'
					input={{
						id: 'city',
						type: 'text',
						defaultValue: inputHandler('city')
					}}>
					<p className={classes.error}>{!isFirstTry && !cityIsNotEmpty && messaggeIsEmpty}</p>
				</Input>
				<Input
					ref={streetInputRef}
					label='Street'
					input={{ 
						id: 'street',
						type: 'text',
						defaultValue: inputHandler('street')
					}}>
					<p className={classes.error}>{!isFirstTry && !streetIsNotEmpty && messaggeIsEmpty}</p>
				</Input>
				<Button>Accept</Button>
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

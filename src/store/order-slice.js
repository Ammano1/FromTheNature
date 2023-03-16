import { createSlice } from '@reduxjs/toolkit';

const initialPersonState = {
	person: {
		id: '',
		name: '',
		email: '',
		phone: '',
		city: '',
		street: '',
	},
	personIsValid: {
		nameIsNotEmpty: false,
		isEmailValid: false,
		isPhoneValid: false,
		cityIsNotEmpty: false,
		streetIsNotEmpty: false,
	},
	isFirstTry: true,
	isFormValid: false,
	isSending: false,
};

const orderSlice = createSlice({
	name: 'order',
	initialState: initialPersonState,
	reducers: {
		addPerson(state, action) {
			const newPerson = action.payload;
			const regPhone = new RegExp(
				/^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$/
			);
			const regEmail = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm);

			const isInputEmpty = input => {
				if (input.length >= 3) {
					return true;
				} else {
					return false;
				}
			};

			const isEmail = input => {
				if (regEmail.test(input)) {
					return true;
				} else {
					return false;
				}
			};

			const isPhone = input => {
				if (regPhone.test(input)) {
					return true;
				} else {
					return false;
				}
			};

			state.personIsValid.nameIsNotEmpty = isInputEmpty(newPerson.name);
			state.personIsValid.isEmailValid = isEmail(newPerson.email);
			state.personIsValid.isPhoneValid = isPhone(newPerson.phone);
			state.personIsValid.cityIsNotEmpty = isInputEmpty(newPerson.city);
			state.personIsValid.streetIsNotEmpty = isInputEmpty(newPerson.street);

			if (
				state.personIsValid.nameIsNotEmpty &&
				state.personIsValid.isEmailValid &&
				state.personIsValid.isPhoneValid &&
				state.personIsValid.cityIsNotEmpty &&
				state.personIsValid.streetIsNotEmpty
			) {
				const newPerson = action.payload;
				state.person.id = newPerson.id;
				state.person.name = newPerson.name;
				state.person.email = newPerson.email;
				state.person.phone = newPerson.phone;
				state.person.city = newPerson.city;
				state.person.street = newPerson.street;

				state.isSending = true;
			}
		},
		isFirtTry(state) {
			state.isFirstTry = false;
		},
		isSending(state) {
			state.isSending = !state.isSending;
		},
	},
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;

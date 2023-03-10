import React from 'react';
import classes from './ProductItemForm.module.css';
import Button from '../UI/Button';

function ProductItemForm() {
	return (
		<form>
            <label htmlFor='amount'>Amount</label>
            <input type='number' id='amount'
            min='1'
            max='20'
            step='1'
            defaultValue='1'></input>
			<Button>Add</Button>
		</form>
	);
}

export default ProductItemForm;

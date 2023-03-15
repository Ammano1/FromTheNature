import React, { useRef } from 'react';
import classes from './ProductItemForm.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';

function ProductItemForm(props) {
    const amountInputRef = useRef()

    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value

        props.onAddToCart(enteredAmount)
    }

	return (
		<form onSubmit = {submitHandler}>
            <Input label='Amount'
            ref={amountInputRef}
            input={{
                id: 'amount',
                type:'number',
                min:'1',
                max:'99',
                step:'1',
                defaultValue:'1',
            }}
            />
			<Button>Add</Button>
		</form>
	);
}

export default ProductItemForm;

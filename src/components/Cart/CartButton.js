import React from 'react';
import classes from './CartButton.module.css';
import CartIcon from './CartIcon';

const CartButton = props =>{
	return (
		<>
			<button className={classes.cartButton} onClick={props.showCart}>
				<CartIcon />
                <div className={classes.cartItems}>10</div>
			</button>
		</>
	);
}

export default CartButton;

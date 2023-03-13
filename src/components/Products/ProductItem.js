import React from 'react';
import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

function ProductItem(props) {
	const fixPrice = props.price.toFixed(2);
	const { name, price, id } = props;

	const dispatch = useDispatch();
	const addToCartHandler = amount => {
		dispatch(
			cartActions.addItemToCart({
				id: id,
				name: name,
				price: price,
				quantity: amount,
				totalItemPrice: amount * price,
			})
		);
	};

	return (
		<li className={classes.product}>
			<div className={classes.img}>
				<img
					src={props.img}
					alt={props.imgAlt}
				/>
			</div>
			<div className={classes.titleSection}>
				<h3>{props.name}</h3>
				<div className={classes.price}>{`$${fixPrice}`}</div>
				<p>{props.description}</p>
			</div>
			<div className={classes.actions}>
				<ProductItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
}

export default ProductItem;

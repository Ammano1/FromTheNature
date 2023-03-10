import React from 'react';
import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';

function ProductItem(props) {
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
				<div className={classes.price}>{`$${props.price}`}</div>
				<p>{props.description}</p>
			</div>
			<div className={classes.actions}>
				<ProductItemForm />
			</div>
		</li>
	);
}

export default ProductItem;

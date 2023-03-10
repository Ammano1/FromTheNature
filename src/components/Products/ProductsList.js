import React from 'react';
import ProductItem from './ProductItem';
import classes from './ProductsList.module.css'
const LIST_OF_PRODUCTS = [
	{
		name: 'Avocado',
		price: 5,
		img: 'https://images.unsplash.com/photo-1597756900679-3aa58197371f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
		alt: 'avocado',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem verorem.'
	},
	{
		name: 'Apple',
		price: 0.5,
		img: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		alt: 'apple',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem verorem.'
	},
];

const createList = 
	 LIST_OF_PRODUCTS.map(prd => (
		<ProductItem name={prd.name} price={prd.price} img={prd.img} description={prd.description}/>
	 ))

function Products(props) {
	return (
		<section>
			<h2> Buy your favorite products:</h2>
			<ul className={classes.productsList}>
				{createList}
			</ul>
		</section>
	);
}

export default Products;

import React from 'react';
import ProductItem from './ProductItem';
import classes from './ProductsList.module.css';
const LIST_OF_PRODUCTS = [
	{
		id: 'm1',
		name: 'Avocado',
		price: 4.99,
		img: 'https://images.unsplash.com/photo-1597756900679-3aa58197371f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
		alt: 'avocado',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem verorem.',
	},
	{
		id: 'm2',
		name: 'Apple',
		price: 0.5,
		img: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		alt: 'apple',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem verorem.',
	},
	{
		id: 'm3',
		name: 'Carrots',
		price: 0.3,
		img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		alt: 'carrots',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem verorem.',
	},
	{
		id: 'm4',
		name: 'Pineapple',
		price: 0.99,
		img: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		alt: 'pineapple',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem verorem.',
	},
	{
		id: 'm5',
		name: 'Pear',
		price: 0.59,
		img: 'https://images.unsplash.com/photo-1631160299919-6a175aa6d189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
		alt: 'pear',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro facilis, ad consectetur autem verorem.',
	},
];

const createList = LIST_OF_PRODUCTS.map(prd => (
	<ProductItem
		key={prd.id}
		id={prd.id}
		name={prd.name}
		price={prd.price}
		img={prd.img}
		description={prd.description}
	/>
));

function Products(props) {
	return (
		<section>
			<h2> Buy your favorite products:</h2>
			<ul className={classes.productsList}>{createList}</ul>
		</section>
	);
}

export default Products;

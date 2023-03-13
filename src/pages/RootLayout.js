import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

import MainNavigation from '../components/Layout/MainNavigation';
import Header from '../components/Layout/Header';
import CartButton from '../components/Cart/CartButton';
import Cart from '../components/Cart/Cart';

function RootLayout() {
	const dispatch = useDispatch();
	const showCart = useSelector(state => state.ui.cartIsVisible);

	const toggleCartHandler = () => {
		dispatch(uiActions.toggle())
	}

	return (
		<>
			<MainNavigation />
			{!showCart && <CartButton showCart={toggleCartHandler}/>}
			{showCart && <Cart onClose={toggleCartHandler} />}
			<main>
				<Header
					title='FromTheNature...'
					description='Your source of health!'
				/>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;

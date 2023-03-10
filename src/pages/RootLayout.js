import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/Layout/MainNavigation';
import Header from '../components/Layout/Header';

function RootLayout() {
	return (
		<>
			<MainNavigation />
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

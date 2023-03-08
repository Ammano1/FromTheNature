import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) => (isActive ? classes.active : undefined)}
							end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/products'
							className={({ isActive }) => (isActive ? classes.active : undefined)}>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/company'
							className={({ isActive }) => (isActive ? classes.active : undefined)}>
							Company
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/shop'
							className={({ isActive }) => (isActive ? classes.active : undefined)}>
							Shop
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;

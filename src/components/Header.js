import React from 'react';
import classes from './Header.module.css'

function Header(props) {
	return (
		<header className={classes.header}>
            <div className={classes.shadowBg}></div>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</header>
	);
}

export default Header;

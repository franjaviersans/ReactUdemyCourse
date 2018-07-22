import React from 'react';

import User from '../../components/User'

const authIndexPage = (props) => (
	<div>
		<h1>The Auth Page - {props.appName}</h1>
		<User name="fran" age={29} />
	</div>
);


//intial props in 
authIndexPage.getInitialProps = (context) => {
	console.log(context);

	//can use await or promise because it is an async method

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({appName: 'Super App 2'});
		},1000);
	})

	return promise;
}

export default authIndexPage;
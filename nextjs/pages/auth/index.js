import React from 'react';

import User from '../../components/User'

const authIndexPage = () => (
	<div>
		<h1>The Auth Page </h1>
		<User name="fran" age={29} />
	</div>
);

export default authIndexPage;
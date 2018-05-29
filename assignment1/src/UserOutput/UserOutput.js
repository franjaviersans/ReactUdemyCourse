import React, { Component } from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
	return (
	<div className="UserOutput" >
		<p>Username: {props.text}</p>
		<p>Ipsum lorem</p>
	</div>
	);
}

export default UserOutput;
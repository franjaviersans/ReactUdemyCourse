import React from 'react';

const UserInput = (props) => {
	const style ={
		margin: 'auto',
		width: '50%',
		textAlign: 'center',
	};
	return (
	<div style={style} >
		<input type="text"
		onChange={props.inputHandler}
		value={props.username}/>
	</div>
	);
}

export default UserInput;

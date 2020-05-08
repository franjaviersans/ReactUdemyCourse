import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../AuxHOC/AuxHOC';
import useHttpHandler from "../../hooks/httpsErrorHandler"

const withErrorHandler = (WrappedComponent, axios) => {
	return props => {
		const [error, errorConfirmedHandler] = useHttpHandler(axios);
		
		return (<Aux>
				<Modal
					show={error}
					modalClosed={errorConfirmedHandler}>
					{!!error ? error.message: null}
				</Modal>
				<WrappedComponent {...props} />
			</Aux>);
	}
}


export default withErrorHandler;

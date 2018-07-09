import React, { Component } from 'react';


//component to load rout in a async way
const asyncComponent = (importComponent) => {
	return class extends Component {
		state = {
			component: null,
		}

		componentDidMount () {
			importComponent()
				.then(cmp => {
					this.setState({component: cmp.default});
				});
		}

		render(){
			const C = this.state.component;

			return C? <C {...this.props}/> : null;
		}
	}
}

export default asyncComponent;
import React, { Component } from 'react';

import qs from 'query-string';

class Course extends Component {
	
	/*componentWillMount(){
		console.log('Did mount');
		console.log(this.props);
	}*/

    render () {

    	let title = qs.parse(this.props.location.search).title;

    	//console.log(this.props);

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
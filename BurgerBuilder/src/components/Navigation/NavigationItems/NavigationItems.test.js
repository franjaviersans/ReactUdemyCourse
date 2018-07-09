import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

//connect enzyme with react
configure({adapter: new Adapter()});


describe('<NavigationItems />', () => {

	//this is a unit test
	it('should render two <NavigationItem> elements if not authenticated', () => {
		//render without deeply render the sub components
		const wrapper = shallow(<NavigationItems />);

		//what we whant to find
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});


});
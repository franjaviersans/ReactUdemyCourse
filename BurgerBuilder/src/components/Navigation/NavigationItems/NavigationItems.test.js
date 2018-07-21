import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

//connect enzyme with react
configure({adapter: new Adapter()});


describe('<NavigationItems />', () => {
	let wrapper;
	beforeEach(() => {
		//render without deeply render the sub components
		wrapper = shallow(<NavigationItems />);
	});

	//this is a unit test
	it('should render two <NavigationItem> elements if not authenticated', () => {
		
		//what we whant to find using jest
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});


	//this is a unit test
	it('should render three <NavigationItem> elements if authenticated', () => {
		//pass props to wrapper
		wrapper.setProps({isAuth: true});

		//what we whant to find
		expect(wrapper.find(NavigationItem)).toHaveLength(3);
	});

	//this is a unit test
	it('should an exact logout button', () => {
		//pass props to wrapper
		wrapper.setProps({isAuth: true});

		//what we whant to find
		expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
	});
});
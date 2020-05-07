import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

//connect enzyme with react
configure({adapter: new Adapter()});


describe('<BurgerBuilder />', () => {
	let wrapper;
	beforeEach(() => {
		//render without deeply render the sub components
		wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
	});

	//this is a unit test
	it('should render <BuildControls> when receiving ingredients', () => {
		wrapper.setProps({ingredients: {salad: 0}});
		//what we whant to find using jest
		expect(wrapper.find(BuildControls)).toHaveLength(1);
	});
});
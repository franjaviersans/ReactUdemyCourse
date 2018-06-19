import * as actionTypes from './actions';

const initialState = {
	persons: [],
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case(actionTypes.ADD_PERSON):{
			//new person
			const newPerson = {
        	    id: Math.random(), // not really unique but good enough here!
    	        name: 'Max',
	            age: Math.floor( Math.random() * 40 )
        	}

        	//craete copy
			const newPersons = [...state.persons];

			//add new element
			newPersons.push(newPerson);

			//update state
			return {
				persons: newPersons,
			};
		}
		case(actionTypes.DELETE_PERSON):{
			//create copy of array 
			let newPersons = [...state.persons];

			//filter the value we want to delete
			newPersons = newPersons.filter(person => person.id !== action.payload.personID);

			//update state
			return {
				persons: newPersons,
			};
		}
	}
	return state;
};


export default reducer;
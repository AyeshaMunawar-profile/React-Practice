/// initial state for the reducer 
const initialState = {
	count: 0
}

// actions increment and decrement
// action has two values action name and payload 
//names of actions 
const INCREMENT = "increment";
const DECREMENT = "decrement";


// all actions are functions that returns object with type (what action is) and payload 
export const increment = () => ({
	type: INCREMENT,
});
export const decrement = () => ({
	type: DECREMENT,
});

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			// return everty thing as it is in the state but change count to count + 1 in  a new object in increment we only care about count state not others thatswhy 
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
}
export default counterReducer;
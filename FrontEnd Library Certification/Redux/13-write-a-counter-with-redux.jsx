const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types
let counter = 0;
const counterReducer = (state=counter, action) => {
  switch(action.type){
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    default: return state;
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = ()=>{
  return {type: 'INCREMENT'};
}; // define an action creator for incrementing

const decAction = ()=>{
  return {type: 'DECREMENT'};
}; // define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
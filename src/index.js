import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';

//action creator
let incrementCount = count => {
  return {
    type: 'INCREMENT_COUNT',
    count
  };
};
let decrementCount = count => {
  return {
    type: 'DECREMENT_COUNT',
    count
  };
};

let resetCount = count => {
  return {
    type: 'RESET_COUNT',
    count
  };
};

let counting = () => {
  return {
    type: 'IS_COUNTING'
  };
};

//reducer
let counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      let incrementCount = action.count ? action.count : 5;
      return state + incrementCount;

    case 'DECREMENT_COUNT':
      let decrementCount = action.count ? action.count : 1;
      return state - decrementCount;

    case 'RESET_COUNT':
      return action.count;

    default:
      return state;
  }
};

let isCounting = (state = false, action) => {
  switch (action.type) {
    case 'IS_COUNTING':
      return !state;
    default:
      return state;
  }
};
//store create
let store = createStore(
  combineReducers({
    count: counter,
    couting: isCounting
  })
);
//passing props
//state indicates stores obj
let mapStateToProps = state => {
  console.log(state);
  return {
    count: state.count
  };
};

//dispatchig from buttons
let mapDispatchToProps = dispatch => {
  return {
    btnincrementCount: number => dispatch(incrementCount(number)),
    btndecrementCount: number => dispatch(decrementCount(number)),
    btnresetCount: number => dispatch(resetCount(number))
  };
};

//connection to redux
let ReduxConnected = connect(mapStateToProps, mapDispatchToProps)(App);
//redux basic show data
// store.subscribe(() => {
//   console.log(store.getState());
// });

//dispatching
// store.dispatch(incrementCount(20));
// store.dispatch(decrementCount(5));
// store.dispatch(resetCount(0));
// store.dispatch(counting());

ReactDOM.render(
  <Provider store={store}>
    <ReduxConnected />
  </Provider>,
  document.getElementById('root')
);

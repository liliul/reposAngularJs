import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state;
  }
}

export const store = createStore(reducer);


import { connect } from 'react-redux';

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me
      </button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
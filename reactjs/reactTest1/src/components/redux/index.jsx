import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);


import { connect } from 'react-redux';

function Counter({ count, increment }) {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' })
});

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
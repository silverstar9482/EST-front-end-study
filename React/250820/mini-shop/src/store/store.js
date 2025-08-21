import { createStore } from 'redux';

const initialState = {
  items: [], // {id, name, price}
};

// 1. reducer 만들기
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state, action.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case 'CLEAR_ITEM':
      return {
        ...state,
        items: [],
      };
  }

  return state;
};
// 2. createStore 만들고 reducer 넣기
const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

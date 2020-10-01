import { createStore } from "redux";

const initialState = {
  isOpen: false,
  reverseClass: false,
};

const actionTypes = {
  ADD_REVERSE_CLASS: "add_reverse_class",
  INIT_REVERSE_CLASS: "init_reverse_class",
  OPEN_BURGER: "open_burger",
  INIT_BURGER: "init_burger",
  ADD_REVERSE_AND_INIT_BURGER: "add_reverse_and_init_burger",
};

export const actions = {
  add_reverse_class: () => ({
    type: actionTypes.ADD_REVERSE_CLASS,
  }),
  init_reverse_class: () => ({
    type: actionTypes.INIT_REVERSE_CLASS,
  }),
  open_burger: () => ({
    type: actionTypes.OPEN_BURGER,
  }),
  init_burger: () => ({
    type: actionTypes.INIT_BURGER,
  }),
  add_reverse_and_init_burger: () => ({
    type: actionTypes.ADD_REVERSE_AND_INIT_BURGER,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_REVERSE_CLASS:
      return Object.assign({}, state, { reverseClass: !state.reverseClass });
    case actionTypes.INIT_REVERSE_CLASS:
      return Object.assign({}, state, {
        reverseClass: initialState.reverseClass,
      });
    case actionTypes.OPEN_BURGER:
      return Object.assign({}, state, { isOpen: !state.isOpen });
    case actionTypes.INIT_BURGER:
      return Object.assign({}, state, { isOpen: initialState.isOpen });
    case actionTypes.ADD_REVERSE_AND_INIT_BURGER:
      return Object.assign({}, state, {
        reverseClass: !state.reverseClass,
        isOpen: initialState.isOpen,
      });
    default:
      return state;
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

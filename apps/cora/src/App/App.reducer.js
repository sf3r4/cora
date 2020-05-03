import { ADD_TODO } from './App.actions';

const initialState = {
  content: ''
};

export function AppReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        id: action.payload.id,
        content: action.payload.content
      };
    default:
      return state;
  }
}

import { LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE } from './List.actions';

const initialState = {
  isLoadingList: false,
  list: [],
  getListError: ''
};

export function ListReducer(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        isLoadingList: true
      };

    case LIST_SUCCESS:
      return {
        ...state,
        isLoadingList: false,
        list: action.payload.content
      };

    case LIST_FAILURE:
      return {
        ...state,
        isLoadingList: false,
        getListError: action.payload.content
      };

    default:
      return state;
  }
}

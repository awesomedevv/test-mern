import {
  CONNECTION_LIST,
} from '../actions/types';

let INITIAL_STATE = {
  total_pages: 0,
  current_page: 0,
  users: [],
}

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
      case CONNECTION_LIST:
        console.log(action.payload);
          return { ...state, total_pages: action.payload['total_pages'], current_page: action.payload['current_page'], users: action.payload['users'] }
      default:
          return state
  }
}
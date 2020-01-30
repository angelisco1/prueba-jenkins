import { INCREMENT, DECREMENT } from './action-types';
export * from './actions';

export default function contador(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 2;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
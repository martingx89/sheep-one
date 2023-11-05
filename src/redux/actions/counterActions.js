import { INCREMENT, DECREMENT } from '../../constants/counterTypes';

export const incrementCounter = () => ({
  type: INCREMENT,
});

export const decrementCounter = () => ({
  type: DECREMENT,
});

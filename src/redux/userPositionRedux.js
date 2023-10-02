const initialState = null;

const userPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LOCATION':
      return action.payload;
    default:
      return state;
  }
};

export default userPositionReducer;

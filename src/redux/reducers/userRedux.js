//selectors
export const getUserData = (state) => state.user;

const userReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default userReducer;

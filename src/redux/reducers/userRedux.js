import { INITIAL_USER_STATE } from "../../constants/initialData";

//selectors
export const getUserData = (state) => state.user;

const userReducer = (statePart = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default userReducer;

import { INITIAL_USER_STATE } from "../../constants/initialData";

//selectors
export const getMapData = (state) => state.map;

const mapReducer = (statePart = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default mapReducer;
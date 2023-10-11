import { INITIAL_MAP_STATE } from "../../constants/initialData";

//selectors
export const getMapData = (state) => state.map;

const mapReducer = (state = INITIAL_MAP_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_POSITION':
      return {
        ...state,
        userPosition: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
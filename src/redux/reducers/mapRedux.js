//selectors
export const getMapData = (state) => state.map;

const mapReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'SET_USER_POSITION':
      return {
        ...statePart,
        userPosition: action.payload,
      };
    default:
      return statePart;
  }
};

export default mapReducer;

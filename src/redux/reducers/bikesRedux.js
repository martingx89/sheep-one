//selectors
export const getBikesData = (state) => state.bikes;

const bikesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default bikesReducer;

import { API_URL } from '../config';

//selectors
export const getAllData = (state) => state.data;

//actions
const createActionName = (actionName) => `app/data/${actionName}`;
export const GET_DATA = createActionName('GET_DATA');
console.log(GET_DATA);

//action creators
export const getData = (payload) => ({ type: GET_DATA, payload });

//fetch
export const fetchData = () => {
  return (dispatch) => {
    fetch(`${API_URL}/data`)
      .then((res) => res.json())
      .then((data) => dispatch(getData(data)));
  };
};

const dataReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default dataReducer;

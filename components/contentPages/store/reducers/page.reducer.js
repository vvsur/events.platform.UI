import * as Actions from "../pages";

const initialState = null;

const eventReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_PAGE: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default eventReducer;

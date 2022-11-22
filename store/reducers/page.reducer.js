import * as Actions from "../actions";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.PAGE_PageBlock: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case Actions.GET_PAGEBLOCK: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

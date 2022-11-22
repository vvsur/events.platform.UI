import * as Actions from "../actions";

const initialState = {
  state: false,
  data: null,
};

const filtersPanel = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SET_CITY_SYSNAME: {
      return {
        ...state,
        citySysName: action.value,
      };
    }

    case Actions.SET_MOMENT_SYSNAME: {
      return {
        ...state,
        momentSysName: action.value,
      };
    }

    case Actions.SET_IS_SECOND_TYPE_OF_VIEW: {
      return {
        ...state,
        isSecondTypeOfView: action.value,
      };
    }

    case Actions.SET_EVENT_CITY: {
      return {
        ...state,
        eventCity: action.value,
      };
    }

    default: {
      return state;
    }
  }
};

export default filtersPanel;

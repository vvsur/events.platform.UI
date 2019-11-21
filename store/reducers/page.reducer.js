// import { EVENTS_CurrentCityAndMoment, EVENTS_CurrentEventCity } from '../constants'
import * as Actions from '../actions';

const initialState = null;

export default (state = initialState, action) => {
    console.log("action.type", action.type);
  switch (action.type) {

    case Actions.PAGE_PageBlock:
        {
            return {
                ...state,
                ...action.payload
            };
        }

    case Actions.GET_PAGEBLOCK:
        {
            return {
                ...state,
                ...action.payload
            };
        }
    default:
      return state;
  }
}
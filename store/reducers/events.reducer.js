import { EVENTS_CurrentCityAndMoment, EVENTS_CurrentEventCity } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case EVENTS_CurrentCityAndMoment:
      return {
        ...state,
        current: { ...action.payload }
      }
    case EVENTS_CurrentEventCity:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
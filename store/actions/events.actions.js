
import { EVENTS_CurrentCityAndMoment, EVENTS_CurrentEventCity } from '../constants'

export const setCurrentCityAndMoment = (city, moment) => dispatch => {
  return dispatch({
    type: EVENTS_CurrentCityAndMoment,
    payload: { city: city, moment: moment }
  })
}

export const setCurrentEventCity = (city) => dispatch => {
  return dispatch({
    type: EVENTS_CurrentEventCity,
    payload: { currentEventCity: city }
  })
}
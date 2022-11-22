import axios from "axios";

export const SET_CITY_SYSNAME = "[FITERS] SET CITY SYSNAME";
export const SET_MOMENT_SYSNAME = "[FITERS] SET MOMENT SYSNAME";
export const SET_IS_SECOND_TYPE_OF_VIEW = "[FITERS] SET IS SECOND TYPE OF VIEW";
export const SET_EVENT_CITY = "[FITERS] SET EVENT CITY";
export const GET_CITIES_LIST = "[FITERS] GET CITIES LIST";

export function setCitySysName(val) {
  return {
    type: SET_CITY_SYSNAME,
    value: val,
  };
}

export function setMomentSysName(val) {
  return {
    type: SET_MOMENT_SYSNAME,
    value: val,
  };
}

export function setIsSecondTypeOfView(val) {
  return {
    type: SET_IS_SECOND_TYPE_OF_VIEW,
    value: val,
  };
}

export function setEventCity(val) {
  return {
    type: SET_EVENT_CITY,
    value: val,
  };
}

export function static_GetCitiesList(language) {
  return null;
}

export function static_GetMomentsList(language) {
  return null;
}

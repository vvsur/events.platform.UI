import axios from "axios";

export const GET_PAGE = "[PAGES APP] GET PAGE";
export const GET_PAGEBLOCK = "[PAGES APP] GET PAGEBLOCK";

export function getPage(sysname) {
  const request = axios.get(
    `${process.env.API_URL}/content/pages/${sysname}`,
    {}
  );

  return (dispatch) =>
    request.then((response) => {
      dispatch({
        type: "GET_PAGE",
        payload: response.data,
      });
    });
}

export function getPageBlock(sysname) {
  const request = axios.get(
    `${process.env.API_URL}/content/page-blocks/${sysname}`,
    {}
  );

  return (dispatch) =>
    request.then((response) => {
      dispatch({
        type: GET_PAGEBLOCK,
        sysname: sysname,
        payload: response.data,
      });
    });
}

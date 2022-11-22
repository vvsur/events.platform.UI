import axios from "axios";
import fetch from "isomorphic-unfetch";

export const GET_PAGE = "[PAGES APP] GET PAGE";
export const GET_PAGEBLOCK = "[PAGES APP] GET PAGEBLOCK";
export const PAGE_PageBlock = "[PAGES APP] GET PAGE_PageBlock";

export function getPage(sysname) {
  const request = axios.get(
    `${process.env.API_URL}/content/pages/${sysname}`,
    {}
  );

  return (dispatch) =>
    request.then((response) => {
      dispatch({
        type: GET_PAGE,
        sysname: sysname,
        payload: response.data,
      });
    });
}

export const setFooter = (content) => (dispatch) => {
  return dispatch({
    type: PAGE_PageBlock,
    payload: { footer: content },
  });
};

export const setPageBlock = (sysname) => (dispatch) => {
  (async () => {
    const request = await fetch(
      `${process.env.API_URL}/content/page-blocks/${sysname}`
    );
    const json = await request.json();

    return dispatch({
      type: GET_PAGEBLOCK,
      payload: { currentEventCity: json },
    });
  })();
};

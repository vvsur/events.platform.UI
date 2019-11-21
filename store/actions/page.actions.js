import axios from 'axios';
import fetch from 'isomorphic-unfetch'

export const GET_PAGE = '[PAGES APP] GET PAGE';
export const GET_PAGEBLOCK = '[PAGES APP] GET PAGEBLOCK';
export const PAGE_PageBlock = '[PAGES APP] GET PAGE_PageBlock';


export function getPage(sysName) {
    //console.log("itemId", sysName);

    const request = axios.get(`${process.env.API_URL}/content-page?sysname=${sysName}`, {
        //params: routeParams
    });

    return (dispatch) =>
        request.then((response) => {
            //console.log("response.data:", response.data.result)
            dispatch({
                type: GET_PAGE,
                sysName: sysName,
                payload: response.data.result
            })
        }
        );
}

export const setFooter = (content) => dispatch => {
    return dispatch({
      type: PAGE_PageBlock,
      payload: { footer: content }
    })
  }


export const setPageBlock = (sysName) => dispatch => {
    console.log(">>>>itemId", sysName);

    (async () => {

    const request = await fetch(`${process.env.API_URL}/content-page-block?sysname=${sysName}`)
    const json = await request.json()



    return dispatch({
        type: GET_PAGEBLOCK,
        payload: { currentEventCity: json }
      })

    })();

}
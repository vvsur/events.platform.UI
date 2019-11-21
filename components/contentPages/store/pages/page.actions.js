import axios from 'axios';

export const GET_PAGE = '[PAGES APP] GET PAGE';
export const GET_PAGEBLOCK = '[PAGES APP] GET PAGEBLOCK';

export function getPage(sysName) {

    const request = axios.get(`${process.env.API_URL}/content-page?sysname=${sysName}`, {
        //params: routeParams
    });

    return (dispatch) =>
        request.then((response) => {
            //console.log("response.data:", response.data.result)
            dispatch({
                type: 'GET_PAGE',
                //sysName: sysName,
                payload: response.data.result
            })
        }
        );
}


export function getPageBlock(sysName) {
    console.log("itemId", sysName);

    const request = axios.get(`${process.env.API_URL}/content-page-block?sysname=${sysName}`, {
        //params: routeParams
    });

    return (dispatch) =>
        request.then((response) => {
            //console.log("response.data:", response.data.result)
            dispatch({
                type: GET_PAGEBLOCK,
                sysName: sysName,
                payload: response.data.result
            })
        }
        );
}
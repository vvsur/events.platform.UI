import React, { useEffect } from 'react';
import withReducer from '../store/withReducer';
import * as Actions from './store/pages';
import reducer from './store/reducers';
//import Utils from '../utils';

// import EventDetails from './PageDetails';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Helmet } from "react-helmet";

//import { useSelector, shallowEqual } from 'react-redux';

import { withRouter } from 'next/router'

//import { withRedux } from '../../lib/redux'
import withRedux from 'next-redux-wrapper'
 import PageDetails from './PageDetails';



// const useClock = () => {
//     return useSelector(
//       state => ({
//         value: {...state}
//       }),
//       shallowEqual
//     )
//   }




const PageApp = (props) => {


    const content = props.data;
    //const dispatch = useDispatch();

    //const pageSysName = props.router.query.contentSysName;

    // useEffect(() => {
    //     if (pageSysName) {
    //         dispatch(Actions.getPage(pageSysName));
    //     }

    // });


    //console.log("props:", props);
    //console.log("content:", content);

    //useEffect(() => {
    // dispatch({
    //     type: 'GET_PAGE',
    //     payload: {test: 'test'}
    //   });
    //}, [dispatch])

    // const page = useSelector(({ pageApp }) => pageApp.page);
    // const pageSysName = (props.match.params && props.match.params.pageSysName) ? props.match.params.pageSysName : null;

    // useEffect(() => {
    //     if (pageSysName) {
    //         dispatch(Actions.getPage(pageSysName));
    //     }
    // }, [dispatch, pageSysName]);

    // if (!value.page) return null;

    return (
        <div>
            <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal mb-10">

                
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-1 text-3xl md:text-4xl">{content.title}</h1>
                <blockquote className="border-l-4 border-teal-500 italic my-8 pl-8 md:pl-12" dangerouslySetInnerHTML={{ __html: content.description }} />
                    <div className="py-6 event_body_text" dangerouslySetInnerHTML={{ __html: content.body }}></div>
                    {/* <PageDetails page={props.content} /> */}
                    {/* content: {content} */}
                </div>
            
        </div>
    )
}


export default PageApp;

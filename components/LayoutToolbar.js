import React from 'react';

import FiltersPanel from './LayoutFiltersPanel/FiltersPanel';

import { useSelector } from 'react-redux';
import Link from 'next/link'

function LayoutToolbar(props) {
   
   const { language, city, moment, cities, moments } = props;

   //const data = useSelector(({ eventsReducer }) => eventsReducer);

   // let city = 'all-cities';
   // let moment = 'all-times';

   // if (data && data.current && data.current.city && data.current.moment) {
   //    city = data.current.city;
   //    moment = data.current.moment;
   // }

   // if (data && data.currentEventCity) {
   //    city = data.currentEventCity;
   // }

   let mainPageUrl = {
      urlHref: { pathname: `/${language}/events/${city}/all-times` },
      urlAs: { pathname: `/${language}/events/${city}/all-times` }
   };


   return (
      // <ThemeProvider>

      <nav id="header" className="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
         {/* {JSON.stringify(data)} */}
         <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
            <div className="pl-4 flex items-center">
               {/* <svg className="h-5 pr-3 fill-current text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
               </svg> */}
               <Link href={mainPageUrl.urlHref} as={mainPageUrl.urlAs}>
                  <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl cursor-pointer" title='GonnaVisit.com'>
                     <span className="block md:hidden">
                        GV
                     </span>
                     <span className="hidden md:block">
                        GonnaVisit.com
                     </span>
                  </a>
               </Link>
            </div>
            {/* <div className="block lg:hidden pr-4">
               <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-purple-500 appearance-none focus:outline-none">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <title>Menu</title>
                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
               </button>
            </div> */}
            <div className="flex content-center items-center w-auto block mt-0 z-20">

               <ul className="list-reset justify-end items-center">
                  <li className="mr-3 py-2 lg:py-0">

                     <FiltersPanel language={language} city={city} moment={moment} cities={cities} moments={moments} />

                  </li>
               </ul>
            </div>
         </div>
      </nav>





      // </ThemeProvider>
   );
}

export default LayoutToolbar;
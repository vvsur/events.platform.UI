import React from 'react';
import {Redirect} from 'react-router-dom';
import Utils from '../utils';
//import {EventsRouteConfig} from '../events/EventsRouteConfig';
import {PagesRouteConfig} from '../contentPages/PagesRouteConfig';

// import {PlacesRouteConfig} from '../places/PlacesRouteConfig';
// import {CabinetRouteConfig} from '../cabinet/CabinetRouteConfig';
// import {AccountRouteConfig} from '../account/AccountRouteConfig';
// import {AccountRouteConfig} from 'app/account/AccountRouteConfig';
// import {AccountRouteSignOutConfig} from 'app/account/AccountRouteSignOutConfig';
// import {AccountRouteProfileConfig} from 'app/account/AccountRouteProfileConfig';
// import {MainRouteConfig} from 'app/main/MainRouteConfig';
// import {RegisterConfig} from 'app/register/RegisterConfig';
// import {LogoutConfig} from 'app/account/logout/LogoutConfig';


const routeConfigs = [
    //EventsRouteConfig,
    PagesRouteConfig,
    //PlacesRouteConfig,
    //CabinetRouteConfig,
    // AccountRouteConfig,
    // AccountRouteSignOutConfig,
    // AccountRouteProfileConfig,
    //MainRouteConfig
    // RegisterConfig,
    // LogoutConfig
];

const routes = [
    ...Utils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/ru/events"/>
    },
    {
        path     : '/ru',
        component: () => <Redirect to="/ru/events"/>
    },

];

export default routes;
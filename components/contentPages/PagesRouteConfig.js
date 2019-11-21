import PageApp from './PageApp';
//import PageApp from '../events/EventApp';

export const PagesRouteConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: [
                '/:langSysName?/content/:pageSysName?'//,
                //'/:langSysName?/event/:eventSysNameWithId?',
                // '/events/page/:currentPage?',
                // '/events',
            ],
            component: PageApp
        },
    ]
};
import PageApp from "./PageApp";

export const PagesRouteConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: ["/:langSysName?/content/:pageSysName?"],
      component: PageApp,
    },
  ],
};

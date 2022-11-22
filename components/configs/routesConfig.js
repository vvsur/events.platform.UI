import React from "react";
import { Redirect } from "react-router-dom";
import Utils from "../utils";
import { PagesRouteConfig } from "../contentPages/PagesRouteConfig";

const routeConfigs = [PagesRouteConfig];

const routes = [
  ...Utils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    component: () => <Redirect to="/ru/events" />,
  },
  {
    path: "/ru",
    component: () => <Redirect to="/ru/events" />,
  },
];

export default routes;

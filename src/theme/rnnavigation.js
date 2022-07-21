import {
  CommonActions,
  NavigationActions,
  StackActions,
} from "@react-navigation/native";
import * as React from "react";
export const isMountedRef = React.createRef();
export const navigationRef = React.createRef();

export const navigate = (name, params = {}) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  }
};

export const replace = (name, params = {}) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.replace(name, params);
  }
};

export const goBack = (key = null) => {
  navigationRef.current.dispatch(StackActions.pop(1));
};

export const popToTop = (options = {}) => {
  navigationRef.current.dispatch(StackActions.popToTop(options));
};

const route = (nav) => {
  if (nav.routes) {
    return route(nav.routes[nav.index]);
  }
  return nav;
};

export const getRoute = () => {
  const { nav } = navigator.state;
  return route(nav.routes[nav.index]);
};

export const getRoot = () => {
  const { nav } = navigator.state;
  return nav.routes[nav.index];
};

export const reset = (routeName) => {
  navigator.dispatch(
    CommonActions.reset({
      index: 1,
      actions: [
        navigationRef.current.navigate({
          name: routeName,
        }),
      ],
    })
  );
};

export default {
  navigate,
  reset,
};

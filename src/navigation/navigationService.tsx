import * as React from "react";
import {
  NavigationContainerRef,
  StackActions,
  NavigationAction,
  CommonActions,
  DrawerActions
} from "@react-navigation/native";

export interface NavigationParram<T> {
  route: {
    params: T;
  };
}

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params = {}): void {
  navigationRef.current?.navigate(name, params);
}
export function dispatch(action: NavigationAction): void {
  navigationRef.current?.dispatch(action);
}
export function replace(name: string, params = {}): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
export function push(name: string, params = {}): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}
export function isFocused(): boolean | undefined {
  return navigationRef.current?.isFocused && navigationRef.current.isFocused();
}
export function goBack(): void {
  navigationRef.current?.canGoBack && navigationRef.current?.goBack();
}
export function toggleDrawer(): void {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer())
}

export function closeDrawer( params = {}): void {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer())
}

export function reset(name: string): void {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name }]
    })
  );
}

export function changestack(
  routes: Array<{ name: string; params?: any }>
): void {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes
    })
  );
}

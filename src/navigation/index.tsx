import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { navigationRef } from "./navigationService";
import {SCREEN_ROUTER_APP} from '../helpers';

import Home from '../screen/Home';
import LogIn from '../screen/LogIn';

const RootStack = createNativeStackNavigator();

const {HOME, LOG_IN} = SCREEN_ROUTER_APP;

const mainScreen = [
  {
    name: LOG_IN,
    component: LogIn,
  },
  {
    name: HOME,
    component: Home,
  },
];

interface mainItem {
  name: string;
  component: React.ComponentType<any>;
}

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        {mainScreen.map((mainItem: mainItem) => {
          return (
            <RootStack.Screen
              name={mainItem.name}
              component={mainItem.component}
              key={mainItem.name}
            />
          );
        })}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

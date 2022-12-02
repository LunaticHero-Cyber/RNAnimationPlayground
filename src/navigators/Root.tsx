import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from 'screens/Home';

export type StackParamList = {
  Home: undefined;
};

const RootStack = createStackNavigator<StackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

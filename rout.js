import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/pages/login';
import Register from './src/pages/register';
import { DrawStack } from './routers';
import {AuthStack} from './routers2'
 const Stack = createStackNavigator();
//const Stack = createDrawerNavigator();

interface AllStackProps {}
export const AllStack: React.FC<AllStackProps> = ({}) => {
  
  return (
    <Stack.Navigator
    screenOptions={{
        header: () => null
      }}
    initialRouteName="AuthStack"

    >
      <Stack.Screen name="DrawStack" component={DrawStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      
    </Stack.Navigator>
  );
}
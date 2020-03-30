import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/pages/home/index'
import Menu from './src/pages/home/index'

// const Stack = createStackNavigator();
//const Stack = createDrawerNavigator();
const Drawer = createDrawerNavigator();
interface DrowStackProps {}
export const DrawStack: React.FC<DrowStackProps> = ({}) => {
  
  return (
 
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Menu" component={Menu} />
      </Drawer.Navigator>
  );
}
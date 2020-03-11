import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import Register from './src/pages/register';

const Stack = createStackNavigator();
interface AuthStackProps {}
export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  
  return (
    <Stack.Navigator
    screenOptions={{
        header: () => null
      }}
    initialRouteName="Login"

    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      
    </Stack.Navigator>
  );
}
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Login from '../pages/Login';
import BottomTabs from './tabs.routes';
import HairStylist from '../pages/HairStylist';
import ToSchedule from '../pages/toSchedule';

const StackRoutes = createNativeStackNavigator();

export default function NavigationStack(){
  
  return(

     <NavigationContainer> 
      <StackRoutes.Navigator screenOptions={{ headerShown: false }}>

        <StackRoutes.Screen name="BottomTabs" component={BottomTabs} />
        <StackRoutes.Screen name="Welcome" component={Welcome} />
        <StackRoutes.Screen name="ToSchedule" component={ToSchedule} />
        <StackRoutes.Screen name="Register" component={Register} />
        <StackRoutes.Screen name="Login" component={Login} />
        <StackRoutes.Screen name="HairStylist" component={HairStylist} />
        
      </StackRoutes.Navigator>
    </NavigationContainer>

  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather  } from '@expo/vector-icons';

import { theme } from '../global/styles/theme';

import Home from '../pages/Home';
import Services from '../pages/SalonServices';

const Tab = createBottomTabNavigator();

export default function BottomTabs(){

      return(

            <Tab.Navigator screenOptions={{ headerShown: false }}>

              <Tab.Screen  name="Home" component={Home} options = {{
                 tabBarIcon:(
                    ({size, color}: {size: number, color: string}) => (
                          <AntDesign  name="home" size={size} color= {color} />
                      )),
                      tabBarActiveTintColor: theme.colors.primary,
                      tabBarInactiveTintColor: theme.colors.grey,
                  }} 
              />
              
              <Tab.Screen  name="Services" component={Services}  options = {{
                tabBarIcon:(
                  ({size, color}: {size: number, color: string}) => (
                       <Feather name="calendar" size={size} color= {color} />
                    )),
                     tabBarActiveTintColor: theme.colors.primary,
                     tabBarInactiveTintColor: theme.colors.grey,
                 }}  
              />

            </Tab.Navigator>

      );
}
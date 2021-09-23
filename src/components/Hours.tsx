import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'

import {theme} from '../global/styles/theme';

interface HoursProps extends TouchableOpacityProps {
    hour: string,
    active?: boolean
}

export default function Hours({hour, active = false, ...rest}: HoursProps){
   return (

     <TouchableOpacity style = {[ active ? styles.containerHourSelected : styles.container ]} {...rest} >

          <Text style = {[ active ? styles.titleHoursSelected : styles.title ]} >
              {hour}
          </Text>

     </TouchableOpacity>

   );
}

const styles = StyleSheet.create({
  container:{
    height: 25, 
    width: 90,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 5,
    justifyContent: "center", 
    alignItems: "center",
    marginHorizontal:3,
    marginVertical:3,
    backgroundColor: theme.colors.white
  },
  title:{
    fontSize: 11,
    color: theme.colors.black
  },
  //Hour selected
  containerHourSelected:{
    height: 25, 
    width: 90,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    justifyContent: "center", 
    alignItems: "center",
    marginHorizontal:3,
    marginVertical:3,
    backgroundColor: theme.colors.primary
  },
  titleHoursSelected:{
    fontSize: 11,
    color: theme.colors.white
  }
});
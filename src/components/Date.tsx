import React from  'react';
import { 
  TouchableOpacity, 
  TouchableOpacityProps, 
  Text, 
  StyleSheet } from 'react-native';

import {theme} from '../global/styles/theme' ;

interface DateProps extends TouchableOpacityProps{
  day: string,
  month: string,
  week: string,
  active?: boolean
}

export default function Date({day, month, week, active = false, ...rest}: DateProps){
   return(

      <TouchableOpacity style = {[styles.container, active && styles.containerDateSelected]} {...rest} >

          <Text style = {[ active ? styles.titleDateSelected : styles.title ]} >
              {week}
          </Text>

          <Text style = {[ active ? styles.subTitleDateSelected : styles.subtitle ]} >
              {day}
          </Text>

          <Text style = {[ active ? styles.titleDateSelected : styles.title ]} >
              {month}
          </Text>

      </TouchableOpacity>

   );
}

const styles = StyleSheet.create({
  container:{
    height: 70,
    width: 60,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor: theme.colors.grey,
    borderRadius:5,
    marginHorizontal:5
  },
  title:{
    fontSize:11,
    color: theme.colors.black
  },
  subtitle:{
    fontSize:22,
    fontWeight:'bold',
    color: theme.colors.black
  },


  //Date selected 

  containerDateSelected:{
    height: 70,
    width: 60,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor: theme.colors.primary,
    borderRadius:5,
    marginHorizontal:5,
    backgroundColor: theme.colors.primary
  },
  titleDateSelected:{
    fontSize:11,
    color: theme.colors.white

  },
  subTitleDateSelected:{
    fontSize:22,
    fontWeight:'bold',
    color:theme.colors.white
  }

});



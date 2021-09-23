import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import {theme} from '../global/styles/theme'

interface HeaderProps extends TouchableOpacityProps{
  title:string
}

export default function Header({title, ...rest} : HeaderProps){
  return(
    <View style = {styles.container}>

        <TouchableOpacity {...rest} >
           <Ionicons name="arrow-back" style = {styles.icon} />
        </TouchableOpacity>

        <Text style = {styles.title}> 
            {title} 
        </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection:'row',
    alignItems:"center"
  },
  title:{
    flex:1,
    textAlign:"center",
    fontSize:30,
    color: theme.colors.primary
  },
  icon:{
    color:theme.colors.primary,
    fontSize:25
  }

});
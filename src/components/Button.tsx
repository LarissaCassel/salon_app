import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, Text } from 'react-native';
import {theme} from '../global/styles/theme';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export default function Button({title, ...rest}:ButtonProps){
    return(
      <TouchableOpacity style = {styles.container} {...rest} >
          <Text style = {styles.title}> {title} </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container:{
      width: "100%",
      height: 45,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      marginTop:30
  },
  title:{
    color: theme.colors.white,
    fontSize: 15
  }
});
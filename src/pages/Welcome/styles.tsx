import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height }  = Dimensions.get('screen')

const styles  = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    paddingHorizontal:40
  },
  image:{
    height: height/3,
    width: width
  }
});

export default styles;
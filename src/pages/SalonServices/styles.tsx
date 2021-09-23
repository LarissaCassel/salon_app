import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width,
    paddingVertical:40
  },
  titleContainer:{
    paddingTop:30,
    width,
    alignItems: 'flex-end',
    paddingHorizontal: 20
  },
  title:{
    fontSize:18
  }
});

export {styles};
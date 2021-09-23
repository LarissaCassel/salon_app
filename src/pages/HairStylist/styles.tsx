import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container:{
    flex:1,
    width,
    paddingVertical: 40
  }
});

export {styles};
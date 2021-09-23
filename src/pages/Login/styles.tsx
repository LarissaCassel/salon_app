import React from 'react';
import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: "100%",
    paddingVertical:40,
    paddingHorizontal:10,
    alignItems:"center"
  },
  contain:{
    flex:1,
    width:'100%',
    paddingTop:30
  },
  input:{
    borderBottomWidth: 1,
    borderColor:theme.colors.grey,
    marginBottom:30,
  
  }
});

export default styles;
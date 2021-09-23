import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {theme} from '../../global/styles/theme';

const { height, width }  = Dimensions.get('screen');

const styles = StyleSheet.create({
  container:{
    flex:1,
    width
  },
  header:{
    height: height/3,
    width
  },
  headerImage:{
    borderBottomRightRadius: 40
  },
  headerBackground:{
    flex: 1, 
    justifyContent: "center", 
    alignItems:"center",
    width: '100%', 
    backgroundColor: theme.colors.blackOpacity,
    borderBottomRightRadius: 40
  },
  salonLogo:{
    height: 80,
    width: 80,
    borderRadius:40
  },
  headerFooter:{
    width,
    paddingHorizontal:30,
    flexDirection: 'row',
    paddingTop: 15
  },
  headerFooterContain:{
    flex:1
  },
  signs:{
    width:70,
    height:30,
    backgroundColor:theme.colors.primary,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:3
  },
  signsText:{
    color:theme.colors.white
  },
  salonNameLabel:{
    color:theme.colors.white,
    fontWeight: 'bold',
    fontSize:20
  },
  cityNameLabel:{
    color: theme.colors.white,
    fontSize:15
  },
  galeryContainer:{
    flex: 1, 
    alignItems: "center",
    paddingVertical: 30

  },
  galeryTitle:{
    fontSize:18,
    color: theme.colors.primary,
    paddingBottom:20
  }
});

export default styles;
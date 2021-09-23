import React from  'react';
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

import {theme} from '../../global/styles/theme';

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    width,
    paddingVertical:40,
    alignItems: "center"
  },
  title:{
    paddingVertical:10,
    paddingHorizontal:20,
    fontSize:14,
    fontWeight: 'bold',
    width
  },
  hairStylist:{
    width: width - 20,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    marginTop:20,
    padding:10,
    alignItems: "center",
    borderRadius: 10
  },
  hairStylistAvatar:{
    height: 60,
    width: 60,
    borderRadius: 30 
  },
  hairStylistName:{
    fontSize:20,
    color : theme.colors.white,
    flex: 1,
    textAlign: 'right'
  },

  servicesContainer:{
    flex: 1, 
    width: width-20,
    flexDirection: 'row',
    marginTop: 20,
    padding: 10
  },
  serviceName:{
    fontSize: 20
  },
  servicePrice:{
    flex: 1, 
    textAlign: 'right',
     fontSize: 20
  },
  buttonContaier:{
    width: width -20
  }
});

export {styles};



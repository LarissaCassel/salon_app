import React from  'react';
import { 
  ImageBackground, 
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  TouchableOpacityProps} from 'react-native';

import { EvilIcons } from '@expo/vector-icons'; 
import {theme} from '../global/styles/theme';

interface GaleryProps extends TouchableOpacityProps{
  image: string,
  name: string
}

export default function HairStylistList( {image, name, ...rest}:GaleryProps){

      return(

     <TouchableOpacity {...rest} > 
        <ImageBackground 
        style = {styles.container} 
        source = {{uri: image}} 
        imageStyle = { styles.containerImage } 
        >

          <View style = {styles.footer}>

                <Text style = {styles.nameLabel}>
                     {name}
                </Text>

                <EvilIcons name="star" size={24} color="yellow" />

                <Text style = {styles.avaliationLabel}>
                   4,0
                </Text>
          
          </View>
        
        </ImageBackground>
      </TouchableOpacity>  
      );
}


const styles = StyleSheet.create({
  container: {
    height: 244,
    width:  235,
    justifyContent: 'flex-end',
    marginRight:20
  },
  containerImage:{
    borderRadius: 28
  },
  footer:{
    width: '100%',
    backgroundColor: theme.colors.blackOpacity,
    borderBottomRightRadius:28,
    borderBottomLeftRadius:28,
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:"center",
    paddingVertical:10
  },
  nameLabel:{
    flex:1,
    color: theme.colors.white, 
    fontSize:15, 
    fontWeight:'bold'
  },
  avaliationLabel:{
    color: theme.colors.white,
    fontWeight:'normal'
  }
});
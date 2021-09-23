import React from  'react';
import { 
  ImageBackground, 
  StyleSheet, 
  View, 
  Text, 
  Image} from 'react-native';

import {theme} from '../global/styles/theme';

interface GaleryProps{
  image: string,
  name: string,
  icon: string,
  date: string
}

export default function Galery( {image, name, icon, date}:GaleryProps){
      return(
      
        <ImageBackground 
        style = {styles.container} 
        source = {{uri: image}} 
        imageStyle = { styles.containerImage } 
        >

          <View style = {styles.footer}>

            <Image
             style = {styles.avatar}
              source = {{uri: icon}}
            />
           
            <View>

                <Text style = {styles.nameLabel}>
                     {name}
                </Text>

                <Text style = {styles.dateLabel}>
                    {date}
                </Text>
            
            </View>
          
          </View>
        
        </ImageBackground>
      );
}


const styles = StyleSheet.create({
  container: {
    height: 328,
    width:  280,
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
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:"center",
    paddingVertical:10
  },
  nameLabel:{
    color: theme.colors.white, 
    fontSize:15, 
    fontWeight:'bold'
  },
  dateLabel:{
    color: theme.colors.white,
    fontWeight:'normal'
  },
  avatar:{
    height: 30,
    width:30,
    borderRadius:15,
    marginRight:5
  }
});
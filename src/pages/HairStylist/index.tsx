import React from 'react';
import { 
  View, 
  FlatList } from 'react-native';

import {styles} from './styles';
import {collaboratorList} from '../../data/apiTestData';

import Header from '../../components/Header';
import HairStylistList from '../../components/HairStylist';

export default function HairStylist( {navigation}: {navigation:any} ){

  function handleToSchedule(){
      navigation.navigate('ToSchedule');
  }

  return(
    <View style = {styles.container}>

        <Header title = "Especialistas" onPress = {() => navigation.goBack()} /> 
        
        <FlatList
          data = {collaboratorList}
          keyExtractor = { (item) => item._id }
          renderItem = {({item}) => {
           return(

             <HairStylistList 
                image = {item.photo} 
                name = {item.name} 
                onPress = {handleToSchedule} 
              />
              
           );
         }}
          horizontal
          showsHorizontalScrollIndicator = {false}
          contentContainerStyle = {{marginHorizontal:20, marginVertical:20}}
          
        />

    </View>
  );
}
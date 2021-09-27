import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';

import {styles} from './styles';

import Header from '../../components/Header';
import HairStylistList from '../../components/HairStylist';

import api from '../../services/api';

interface HairStylistData{
    _id: string,
    name: string,
    photo: string
}

export default function HairStylist( {navigation, route}: {navigation:any, route: any} ){

  // service  pass in salonService screen 
  const {service} = route.params;

  const [hairStylist, setHairStylist] = useState<HairStylistData[]>();

  // list of hairstylist
  useEffect( () => {
      api.post('collaborator/list',{
          collaborators: service.collaborators
      })
      .then(response => setHairStylist(response.data.collaboratorList))
      .catch(err => console.log(err))
  }, []);

  // opening toSchedule screen 
  function handleToSchedule(hairStylist:HairStylistData){
      navigation.navigate('ToSchedule', {service:service,hairstylist:hairStylist});
  }

  return(
    <View style = {styles.container}>

        <Header 
          title = "Especialistas" 
          onPress = {() => navigation.goBack()} 
        /> 
        
        <FlatList
          data = {hairStylist}
          keyExtractor = { (item) => item._id }
          renderItem = {({item}) => {
           return(

             <HairStylistList 
                image = {item.photo} 
                name = {item.name} 
                onPress = { () =>  handleToSchedule(item) } 
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
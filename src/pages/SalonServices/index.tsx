import React, {useState, useEffect} from  'react';
import { View, FlatList, Text } from 'react-native';

import {styles} from './styles';

import api from '../../services/api';
const {SALON_ID} = process.env;

import Header from '../../components/Header';
import ServicesList from '../../components/ServicesList';

interface SalonService{
    collaborators: [
      string
    ],
    status: string,
    date: string,
    _id: string,
    salonId: string,
    name: string,
    price: string,
    duration: string,
    "__v": number

}

export default function Services({navigation}:{navigation:any}){

  const [salonServices, setSalonServices] = useState<SalonService[]>();

  // Hair stylist screen 
  function hairStylist(serviceSelected: SalonService){
    navigation.navigate('HairStylist', {service:serviceSelected});
}

// services list 
  useEffect(() => {
      api.get(`services/salon/${SALON_ID}`)
      .then( response => setSalonServices(response.data.salonServices))
      .catch(err => console.log(err)) 
  }, []);

  return(
    
      <View style = {styles.container}>

          <Header 
            title = "Serviços" 
            onPress = {() => navigation.goBack()} 
          />

          <View style = {styles.titleContainer}>

            <Text style = {styles.title}>
                Total({salonServices?.length})
            </Text>

          </View>
          
          <FlatList
            data = {salonServices}
            keyExtractor = { (item) => item._id }
            renderItem = { ({item}) => {
              return(

                <ServicesList 
                    name = { item.name } 
                    price = { item.price } 
                    duration = { item.duration } 
                    onPress = {() => hairStylist(item)}
                />

              );
            }}
          />
               
      </View>
  );
}
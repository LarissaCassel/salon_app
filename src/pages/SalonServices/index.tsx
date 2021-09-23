import React from  'react';
import { View, FlatList, Text } from 'react-native';

import {styles} from './styles';

import {salonServices} from '../../data/apiTestData';

import Header from '../../components/Header';
import ServicesList from '../../components/ServicesList';


export default function Services({navigation}:{navigation:any}){
  return(
    
      <View style = {styles.container}>

          <Header title = "Serviços" onPress = {() => navigation.goBack()} />

          <View style = {styles.titleContainer}>

            <Text style = {styles.title}>
                Total({ServicesList.length+1})
            </Text>

          </View>
          
          <FlatList
            data = {salonServices}
            keyExtractor = { (item) => item._id }
            renderItem = {({item}) => {
              return(

                <ServicesList 
                    name = {item.name } 
                    price = {item.price} 
                    duration = {item.duration} 
                    navigation = {navigation}
                />

              );
            }}
          />
               
      </View>
  );
}
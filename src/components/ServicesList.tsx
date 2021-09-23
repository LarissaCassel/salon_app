import React from 'react';
import { 
  View, 
  StyleSheet, 
  Dimensions, 
  Text } from 'react-native';

import Button from './Button';

const width = Dimensions.get('screen').width;

interface SalonListProps{
  name: string,
  price: string,
  duration: string,
  navigation:any
}


export default function SalonList({name, price, duration, navigation}: SalonListProps){

    function hairStylist(){
        navigation.navigate('HairStylist');
    }

  return(
    <View style = {styles.container}>

      <View style = {styles.servicesContain}>
          <Text style = {styles.serviceNameLabel}>
              {name}
          </Text>

           <Text>
              R$:{price} - {duration} Min
          </Text>

      </View>

      <View style = {styles.buttonContainer}>
          <Button title = "Agendar" onPress = { hairStylist } />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width,
    flexDirection: 'row',
    alignItems:"flex-end",
    paddingHorizontal:20
  },
  servicesContain:{
    width: width/2
  },
  buttonContainer:{
    flex:1,
    width: '100%'
  },
  serviceNameLabel:{
    fontWeight: 'bold'
  }
});
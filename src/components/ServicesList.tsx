import React from 'react';
import { 
  View, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacityProps,
  Text } from 'react-native';

import Button from './Button';

const width = Dimensions.get('screen').width;

interface SalonListProps extends TouchableOpacityProps {
  name: string,
  price: string,
  duration: string
}


export default function SalonList({name, price, duration, ...rest}: SalonListProps){

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
          <Button title = "Agendar" {...rest} />
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
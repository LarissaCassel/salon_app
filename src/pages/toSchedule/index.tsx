import React, { useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import {styles} from './styles';

import Header from '../../components/Header';
import Date from '../../components/Date';
import Hours from '../../components/Hours'
import Button from '../../components/Button';

import {dates, hours} from '../../data/apiTestData';

const hairStylist = "https://cate.prefeitura.sp.gov.br/wp-content/uploads/2021/05/Cate_CortedeCabelo_Miniatura.jpg";

export default function ToSchedule({navigation}: {navigation: any} ){

  const [ dateSelected, setDateSelected ] = useState(`${dates[0].day}${dates[0].month}`); 
  const [ hoursSelected, setHoursSelected ] = useState(`${hours[0].hour}`); 

   function handleSelectDate(date: string){
      setDateSelected(date);
   }

   function handleSelectHour(hour: string){
      setHoursSelected(hour);
   }

  return (
      <View style = {styles.container} >

          <Header title = "Data e Hora" onPress = {() => navigation.goBack()} />

          <View style = {{height:100, width: '100%'}} >
            <FlatList
              data = {dates}
              keyExtractor = { index => String(index) }
              renderItem = {({item}) => {
                return(
                  <Date 
                    day = {item.day} 
                    week = {item.week} 
                    month = {item.month} 
                    active= {dateSelected === `${item.day}${item.month}`} 
                    onPress = { () => handleSelectDate(`${item.day}${item.month}`) }
                  />
                );
              }}
              horizontal
              showsHorizontalScrollIndicator = {false}
              contentContainerStyle = {{marginHorizontal: 20, marginVertical:10}}
            />
          </View>

          <Text style = {styles.title} >
              Que horas?
          </Text>

          <View style = {{width: '100%', alignItems:"center"}} >
              <FlatList
                  data = {hours}
                  keyExtractor = {index => String(index)}
                  renderItem = {({item}) => {
                    return(
                      <Hours hour = {item.hour} active = {hoursSelected === item.hour} onPress = {() => handleSelectHour(item.hour)} />
                    );
                  }}
                  
                  numColumns = {4}
              />
          </View>
         
         <View style = {styles.hairStylist} >

            <Image 
                source = {{uri: hairStylist }}  
                style = {styles.hairStylistAvatar} 
            />

            <Text style = {styles.hairStylistName} >
              Carolina Almeida
            </Text>

         </View>

         <View style = {styles.servicesContainer} >

            <Text style = {styles.serviceName} >
              Corte de cabelo
            </Text>

            <Text style = {styles.servicePrice} >
                R$: 30,00
            </Text>
            
         </View>
         
         <View style = {styles.buttonContaier}>
              <Button title = "Agendar" />
         </View>
          
      </View>
  );
}
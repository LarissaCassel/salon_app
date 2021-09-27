import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import {styles} from './styles';

import Header from '../../components/Header';
import Date from '../../components/Date';
import Hours from '../../components/Hours'
import Button from '../../components/Button';
 
import api from '../../services/api';

interface DatesData{
  day: string,
  month: string,
  week: string,
  date: string
}

interface HoursData{
  hour: string,
  date: string
}

export default function ToSchedule( {navigation, route}: {navigation: any, route: any} ){

  const { service, hairstylist } = route.params;

  const [dates, setDates] = useState<DatesData[]>();
  const [hours, setHours] = useState<HoursData[]>();

  const [ dateSelected, setDateSelected ] = useState<String>(); 
  const [ hoursSelected, setHoursSelected ] = useState<String>();  

  
  // DATES 
  useEffect( () => {
    api.get(`schedule/collaboratordates/${hairstylist._id}`)
    .then(response => {
      setDates(response.data.dates)
      if(dates) setDateSelected(`${dates[0].day}${dates[0].month}`) 
      if(hours) setHoursSelected(`${hours[0].hour}`)
    })
    .catch(err => console.log(err))
  }, []);

  // HOURS IN DAY 
  function handleTimes(date: string){
    api.post(`schedule/collaboratorhours/${hairstylist._id}`, {date: date})
    .then(response => setHours(response.data.hours) )
    .catch(err => console.log(err))
  }

  // DATE CLICKED 
  function handleSelectDate(dateCode: string, date: string){
    setDateSelected(dateCode);
    handleTimes(date);
  }

// HOUR CLICKED
  function handleSelectHour(hour: string){
    setHoursSelected(hour);
  }

  return (
      <View style = {styles.container} >

          <Header 
            title = "Data e Hora" 
            onPress = {() => navigation.goBack()} 
          />

          <View style = {{height:100, width: '100%'}} >
            <FlatList
              data = {dates}
              keyExtractor = {item => item.date}
              renderItem = {({item}) => {
                return(
                  <Date 
                    day = {item.day} 
                    week = {item.week} 
                    month = {item.month} 
                    active= {dateSelected === `${item.day}${item.month}`} 
                    onPress = { () => handleSelectDate(`${item.day}${item.month}`, item.date) }
                  />
                );
              }}
              horizontal
              showsHorizontalScrollIndicator = {false}
              contentContainerStyle = {{marginHorizontal: 20, marginVertical:10}}
            />
          </View>

          <View style = {{width: '100%', alignItems:"center"}} >

              <Text style = {styles.title} >
                  Que horas?
              </Text>
              <FlatList
                  data = {hours}
                  keyExtractor = {item => item.date}
                  renderItem = {({item}) => {
                    return(
                      <Hours 
                        hour = {item.hour} 
                        active = {hoursSelected === item.hour} 
                        onPress = {() => handleSelectHour(item.hour)} 
                      />
                    );
                  }}
                  
                  numColumns = {4}
              />
          </View>
         
         <View style = {styles.hairStylist} >

            <Image 
                source = {{uri: hairstylist.photo }}  
                style = {styles.hairStylistAvatar} 
            />

            <Text style = {styles.hairStylistName} >
                {hairstylist.name}
            </Text>

         </View>

         <View style = {styles.servicesContainer} >

            <Text style = {styles.serviceName} >
               {service.name}
            </Text>

            <Text style = {styles.servicePrice} >
                R$:{service.price}
            </Text>
            
         </View>
         
         <View style = {styles.buttonContaier}>
              <Button title = "Agendar"/>
         </View>
          
      </View>
  );
}
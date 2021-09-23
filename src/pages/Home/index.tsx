import React from  'react';
import { 
  View, 
  ImageBackground, 
  Image, 
  Text,
  FlatList } from 'react-native';
  
import styles from './styles';
import Galery from '../../components/Galery';
import {publication} from  '../../data/apiTestData';

const logo = "https://pnclogosofficial.s3.us-west-2.amazonaws.com/2020/10/09153501/salon-logos-20-scaled.jpg";
const backgroundImage = "https://cdn.acritica.net/img/pc/450/300/dn_noticia/2020/02/1581453953.jpeg";

export default function Home(){
  return(
      <View style = {styles.container}>
          <ImageBackground 
          style = {styles.header} 
          imageStyle = {styles.headerImage}
          source = {{uri: backgroundImage}}
          > 

            <View style = {styles.headerBackground}>
                <Image 
                    style = {styles.salonLogo}
                    source = {{ uri: logo }} 
                /> 
                <View style = {styles.headerFooter}>

                  <View style = {styles.headerFooterContain} >

                    <Text style = {styles.salonNameLabel}>
                          Salon Online
                      </Text>

                      <Text style = {styles.cityNameLabel}>
                          Porto Alegre-RS
                      </Text>

                  </View>
                    
                    <View style = {styles.signs}>
                      <Text style = {styles.signsText}>
                          ABERTO
                      </Text>
                    </View>

                </View>
               
            </View>
         
          </ImageBackground>

          <View style = {styles.galeryContainer}>

            <Text style = {styles.galeryTitle}>
              Últimos Agendamentos
            </Text>

            <FlatList
             data = {publication}
             keyExtractor = { (item) => item.key }
             renderItem = {
               ({item}) =>{
                  return(   
                     <Galery 
                        image = {item.image} 
                        name = {item.name} 
                        icon = {item.icon} 
                        date = {item.date} 
                    /> 
                        
                  );
               }
             }
             horizontal
             showsHorizontalScrollIndicator = {false}
             contentContainerStyle = {{paddingHorizontal:20}}
            />
            
          </View>
          
      </View>
  );
}
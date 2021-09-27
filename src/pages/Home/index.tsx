import React,{useState, useEffect} from  'react';
import { 
  View, 
  ImageBackground, 
  Image, 
  Text,
  FlatList } from 'react-native';
  
import styles from './styles';

import Galery from '../../components/Galery';

import api from '../../services/api';

const backgroundImage = "https://cdn.acritica.net/img/pc/450/300/dn_noticia/2020/02/1581453953.jpeg";

const {SALON_ID}= process.env;

interface salonData{
    salonName: string,
    salonLogo: string,
    city: string,
    status: string
}

interface GaleryData{
    key: string,
    image: string,
    name: string,
    icon: string,
    date: string
}

export default function Home(){

  const [salonData, setSalonData] = useState<salonData>();
  const [galery, setGalery] = useState<GaleryData[]>();

  useEffect(() => {
      api.get(`salon/${SALON_ID}`)
      .then( response => setSalonData(response.data.salonData))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    api.get(`timeline/salon/${SALON_ID}`)
    .then( response => setGalery(response.data.publication))
    .catch(err => console.log(err))
}, []);

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
                    source = {{ uri: salonData?.salonLogo }} 
                /> 
                <View style = {styles.headerFooter}>

                  <View style = {styles.headerFooterContain} >

                    <Text style = {styles.salonNameLabel}>
                          {salonData?.salonName}
                      </Text>

                      <Text style = {styles.cityNameLabel}>
                          {salonData?.city}
                      </Text>

                  </View>
                    
                    <View style = {styles.signs}>
                      <Text style = {styles.signsText}>
                          {salonData?.status}
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
             data = {galery}
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
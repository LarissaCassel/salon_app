import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

import laying1  from '../../assets/laying1.png';
import Button from '../../components/Button';

export default function Welcome({navigation}: {navigation:any}){

    function handleStart(screenName: string){
      navigation.navigate(screenName);    
    }

    return (
        <View style = {styles.container}>

            <Image 
                style = {styles.image} 
                source = {laying1} 
                resizeMode = "contain" 
            />

            <Button 
                title = "Criar Conta" 
                onPress = { () =>  handleStart('Register')} 
            />

            <Button 
                title = "Fazer Login" 
                onPress = { () =>  handleStart('Login')} 
            />

        </View>
    );
}
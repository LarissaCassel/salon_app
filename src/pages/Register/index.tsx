import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles'

import Header  from '../../components/Header'
import Button from '../../components/Button';

export default function Register({navigation}: {navigation: any}){

  return(

    <View style = {styles.container}>

        <Header title = "Registrar" onPress = { () => navigation.goBack() } />

        <View style = {styles.contain}>

          <TextInput style = {styles.input} placeholder = "Nome"/>
          <TextInput style = {styles.input} placeholder = "E-mail"/>
          <TextInput style = {styles.input} placeholder = "Senha"/>
          <TextInput style = {styles.input} placeholder = "Repita Senha"/>

          <Button title = "Criar Conta"/>

        </View>
        
    </View>

  );
}
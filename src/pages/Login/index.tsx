import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

import Button from '../../components/Button';
import Header from '../../components/Header';

export default function Login( {navigation}: {navigation:any} ){
    return(
      <View style = {styles.container}>

          <Header title = "Login" onPress = { () => navigation.goBack() } />

          <View style = {styles.contain}>

              <TextInput placeholder = "E-mail" style = {styles.input} />
              <TextInput placeholder = "Senha" style = {styles.input} />

              <Button title = "Entrar" />

          </View>

      </View>
    );
}
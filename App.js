import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Image} from 'react-native';
import styled from 'styled-components/native';



export default function App() {
  return (
    <View style={estilo.container}>
      
          <Image style={estilo.imagem} source = {require('./assets/lock.png')}
            style = {{ width: 280, height: 180}}
            resizeMode="cover"
          />


      <Text style={estilo.title}>Caracteres</Text>

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41AEF4'
  },
  textoBotao: {
    color: '#FFF',
    fontSize: '25'
  },
  imagem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
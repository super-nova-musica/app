import React from 'react'
import { View, Image, Text, Button, Alert, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient' 

import Play from '../../assets/play.png'
import Styles from './styles'
export default function ho () {
  const navigation = useNavigation()
  return (
    
    <LinearGradient  colors={['rgba(90, 0, 204, 0.8)', 'rgba(211, 37, 255, 0.8)', 'rgba(97, 42, 253, 0.8)']}
    style={Styles.container}>

      <View style={Styles.header}>
        <Image source={Play} style={Styles.image}/>
        <Text style={Styles.title}></Text>
      </View>
      <Text style={Styles.text}>
        Cadastre-se para compartilhar a sua música do dia com seus amigos e
        outros usuários.</Text>
        <Text style={Styles.text}>
          Descubra também o que as celebridades estão ouvindo atualmente
        </Text>
        <TouchableOpacity 
          style={Styles.button} 
          onPress={() => navigation.navigate('LoginOuvinte')}
        >
          <Text style={Styles.textButton}>
            Logar como ouvinte
          </Text>
        </TouchableOpacity>
        <Text style={Styles.textOu}>
            ou
        </Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('LoginMusico')}
        >
          <Text style={Styles.textButton2}>
              Logar como musico
          </Text>
        </TouchableOpacity>

        <Text style={Styles.sign}>
        Já em conta? Faça o Login
        </Text>
    </LinearGradient>

  )
}

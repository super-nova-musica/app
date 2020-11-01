import React from 'react'
import { View, Image, Text, Button, Alert, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient' 

import Play from '../../assets/play.png'
import Spotify from '../../assets/spotify.png'
import Deezer from '../../assets/deezer.png'
import Prime from '../../assets/prime.png'
import Apple from '../../assets/apple.png'
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
          outros usuários.
        </Text>
        <Text style={Styles.text}>
          Descubra também o que as celebridades estão ouvindo atualmente
        </Text>
        <View style={Styles.button}>
          <TouchableOpacity 
            style={Styles.buttonSpotify}
            onPress={() => navigation.navigate('ListGeneros')}
          >
            <Image source={Spotify}/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonSpotify}>
            <Image source={Deezer}/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonSpotify}>
            <Image source={Apple}/>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonPrime}>
            <Image source={Prime}/>
          </TouchableOpacity>
        </View>
    </LinearGradient>

  )
}

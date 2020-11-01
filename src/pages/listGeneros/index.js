import React from 'react'
import { View, Image, Text, Button, TextInput, TouchableOpacity,SafeAreaView  } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient' 
import { AntDesign } from '@expo/vector-icons'; 

import geners1 from './assets/geners1.png'
import geners2 from './assets/geners2.png'
import geners3 from './assets/geners3.png'
import geners4 from './assets/geners4.png'
import geners5 from './assets/geners5.png'
import geners6 from './assets/geners6.png'

import Styles from './styles'
export default function ho () {
  const navigation = useNavigation()
  return (
    
    <SafeAreaView  style={Styles.container}>

      <View style={Styles.header}>
        <View style={Styles.inputView}>
          <TextInput
              style={Styles.input}
              label='user'
              placeholder='Pesquisa'
          />
          <AntDesign name="search1" style={Styles.search} size={24} color="#8C8C8C" />
          <Text style={Styles.cancel}>Cancelar</Text>
        </View>
        <View style={Styles.list}>
          <Text style={Styles.listMenu}>Pessoas</Text>
          <Text style={Styles.listMenu}>Artistas</Text>
          <Text style={Styles.listMenu}>Playlists</Text>
          <Text style={Styles.listMenuSalas}>Salas</Text>
        </View>
      </View>
      <View style={Styles.geners}>
        <Image source={geners1} style={Styles.images}/>
        <Image source={geners2} style={Styles.images}/>
        <Image source={geners3} style={Styles.images}/>
        <Image source={geners4} style={Styles.images}/>
        <Image source={geners5} style={Styles.images}/>
        <Image source={geners6} style={Styles.images}/>
        <Image source={geners5} style={Styles.images}/>
        <Image source={geners6} style={Styles.images}/>
      </View>
    </SafeAreaView>

  )
}

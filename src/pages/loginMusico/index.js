import React from 'react'
import { View, Image, Text, Button, Alert, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient' 

import Play from '../../assets/play.png'
import Styles from './styles'
export default function ho () {
  const navigation = useNavigation()

  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  const [isTrue, setTrue] = React.useState(false)

  function handleGoBack(){
    navigation.goBack()
  }

  async function handleNavigateToScan(){
    setTrue(false)
    const data = {
      email,
      password
    }
    try {
      // const response = await axios({
      //   method: 'post',
      //   url: 'https://mega-hack-api.herokuapp.com/companyLogin',
      //   data
      // })
      navigation.navigate('ListMusicsMusico')
    } catch (error) {
      setTrue(true)
    }
  }
  return (
    
    <LinearGradient  colors={['rgba(90, 0, 204, 0.8)', 'rgba(211, 37, 255, 0.8)', 'rgba(97, 42, 253, 0.8)']}
    style={Styles.container}>

      <View style={Styles.header}>
        <Image source={Play} style={Styles.image}/>
        <Text style={Styles.title}></Text>
      </View>
      <View style={Styles.card_out}>
          <View style={Styles.card}>
          <TextInput
            style={Styles.input}
            label="Email"
            placeholder="Digite seu Email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          
          <TextInput
            style={Styles.input}
            label="Senha"
            placeholder="Digite sua Senha"
            value={password}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
          />
          <View style={Styles.buttons}>
            <TouchableOpacity  onPress={handleGoBack}>
              <Text style={Styles.textButton2}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button} onPress={()=> navigation.navigate('ListMusicsMusico')} title="Entrar">
              <Text style={Styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>

  )
}

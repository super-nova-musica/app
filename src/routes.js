import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './pages/Home'
import LoginOuvinte from './pages/loginOuvinte'
import ListGeneros from './pages/listGeneros'
import ListMusics from './pages/listMusics'
import Player from './pages/player'
import LoginMusico from './pages/loginMusico'
import ListMusicsMusico from './pages/listMusicsMusico'


const AppStack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>

        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='LoginOuvinte' component={LoginOuvinte} />
        <AppStack.Screen name='ListGeneros' component={ListGeneros} />
        <AppStack.Screen name='ListMusics' component={ListMusics} />
        <AppStack.Screen name='Player' component={Player} />
        <AppStack.Screen name='LoginMusico' component={LoginMusico} />
        <AppStack.Screen name='ListMusicsMusico' component={ListMusicsMusico} />






      </AppStack.Navigator>
    </NavigationContainer>
  )
}

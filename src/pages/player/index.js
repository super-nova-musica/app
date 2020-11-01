import React, { Component} from 'react'
import {StyleSheet, Text, Button, View, Image, SafeAreaView} from 'react-native'
import { Audio } from 'expo-av'
import Styles from './styles'

import Cover3 from '../../assets/Cover3.png'
export default class App extends Component {

    async componentDidMount(){
        Audio.setAudioModeAsync({
            allowsRecordingIOS:false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: true,
            playsThroughEarpieceAndroid: true
        })

        this.sound = new Audio.Sound()

        const status = {
            shouldPlay: false
        }
        this.sound.loadAsync(require('./teste.mp3'), status, false)
    }
    playSound(){
        this.sound.playAsync()
    }

    render(){
        return (
            <SafeAreaView style={Styles.container}>
                <Image source={Cover3} style={Styles.header}/>
            </SafeAreaView>
        )
    }



}
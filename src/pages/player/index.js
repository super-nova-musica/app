import React, { Component, useState} from 'react'
import {StyleSheet, Text, Button, View, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import { AntDesign, Feather, FontAwesome, FontAwesome5, Entypo  } from '@expo/vector-icons';
import { Audio } from 'expo-av'
import Styles from './styles'

import Cover3 from '../../assets/Cover3.png'
import ouvir from '../../assets/ouvir.png'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          like:0,
          play: false
        };
    }
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
        this.setState({ play: true })
    }
    pauseSound(){
        this.sound.pauseAsync()
        this.setState({ play: false })

    }
    
    render(){
        return (
            <SafeAreaView style={Styles.container}>
                
                <Image source={Cover3} style={Styles.header}/>
                <View style={Styles.playerInfos}>
                    {this.state.like === 1 ?
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ like: 0})} 
                        >
                            <FontAwesome 
                            name="heart"
                            size={34}
                            color="#8C31FF"
                            style={Styles.playerLike}
                        /> 
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ like: 1})} 
                        >
                            <FontAwesome 
                            name="heart-o"
                            size={34}
                            color="#8C31FF"
                            style={Styles.playerLike}
                        /> 
                        </TouchableOpacity>
                
                    }
                    <View style={Styles.playerTextView}>
                        <Text style={Styles.playerText}>
                            Major Lazer
                        </Text>
                        <Text style={Styles.playerText2}>
                            Eduardo Tomacheski
                        </Text>
                    </View>
                    <FontAwesome5 name="comment" size={34} color="#8C31FF" style={Styles.playerComment}/>
                </View>
                <Text style={Styles.playerAvalie}>
                    Avalie esta música!
                </Text>
                <View style={Styles.playerAvalieView}>
                <View style={Styles.playerAvalieItem}>
                        <Text style={Styles.playerAvalieText}>Não curti</Text>
                        {this.state.count === 1 ?
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 0})} 
                        >
                         <FontAwesome 
                            name="circle-o"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 1})} 
                        >
                         <FontAwesome 
                            name="circle"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                    
                        }  
                    </View>
                    <View style={Styles.playerAvalieItem}>
                        <Text style={Styles.playerAvalieText}>Nada mal</Text>
                        {this.state.count === 2 ?
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 0})} 
                        >
                         <FontAwesome 
                            name="circle-o"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 2})} 
                        >
                         <FontAwesome 
                            name="circle"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                    
                        }  
                    </View>
                    <View style={Styles.playerAvalieItem}>
                        <Text style={Styles.playerAvalieText}>Boa</Text>
                        {this.state.count === 3 ?
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 0})} 
                        >
                         <FontAwesome 
                            name="circle-o"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 3})} 
                        >
                         <FontAwesome 
                            name="circle"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                    
                        }  
                    </View>
                    <View style={Styles.playerAvalieItem}>
                        <Text style={Styles.playerAvalieText}>Muito Boa</Text>
                        {this.state.count === 4 ?
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 0})} 
                        >
                         <FontAwesome 
                            name="circle-o"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 4})} 
                        >
                         <FontAwesome 
                            name="circle"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                    
                        }  
                    </View>
                    <View style={Styles.playerAvalieItem}>
                        <Text style={Styles.playerAvalieText}>Ótima</Text>
                        {this.state.count === 5 ?
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 0})} 
                        >
                         <FontAwesome 
                            name="circle-o"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 5})} 
                        >
                         <FontAwesome 
                            name="circle"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                    
                        }  
                    </View>
                    <View style={Styles.playerAvalieItem}>
                        <Text style={Styles.playerAvalieText}>WOW</Text>
                        {this.state.count === 6 ?
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 0})} 
                        >
                         <FontAwesome 
                            name="circle-o"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity 
                            style={Styles.listMusics}
                            onPress={() => this.setState({ count: 6})} 
                        >
                         <FontAwesome 
                            name="circle"
                            size={24}
                            color="#8C31FF"
                            style={Styles.playerAvalieCircle}
                        /> 
                        </TouchableOpacity>
                    
                        }  
                    </View>
                    
                </View>
                <View>
                    <TouchableOpacity style={Styles.playerButtonProxima} >
                        <Text style={Styles.playerButtonProximaText}>
                            Próxima
                        </Text>
                    </TouchableOpacity>
                    <Image source={ouvir} style={Styles.header}/>
                </View>
                <View style={Styles.playerFooter}>
                    <View>
                        <Feather name="repeat" size={36} color="#8C31FF"/>
                    </View>
                    
                    {this.state.play === false ?
                        <TouchableOpacity 
                            style={Styles.playerFooterPlay}
                            onPress={() => this.playSound(this)}
                        >
                            <Entypo name="controller-play" size={36} color="#8C31FF" />
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity 
                            style={Styles.playerFooterPlay}
                            onPress={() => this.pauseSound(this)}
                        >
                            <AntDesign name="pause" size={36} color="#8C31FF" />
                        </TouchableOpacity>
                    
                        }  
                    <View style={Styles.playerFooterMore}>
                        <Feather name="more-horizontal" size={36} color="#8C31FF" />
                    </View>
                </View>
            </SafeAreaView>
        )
    }



}
import React, { Component, useEffect  } from 'react';

import { View, Text, FlatList, StyleSheet,Image, SafeAreaView,TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, FontAwesome  } from '@expo/vector-icons';
import Styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Cover from '../../assets/Cover.png'
import Cover2 from '../../assets/cover2.png'
import axios from 'axios'

class App extends Component {
  state = {
    data: [
      { id: 0, name: 'Feel It Still', city: 'Eduardo, Tomacheski', views: '320,7k', date: '2:43'},
      { id: 1, name: 'Modern Jesus', city: 'Eduardo, Tomacheski', views: '30,7k', date: '4:35'},
      { id: 2,name: 'So Young', city: 'Eduardo, Tomacheski', views: '20,7k', date: '5:30'},
    ],
    user: {},
    id: '5f9f298b60fca50017ac058f'
  };
  Dados =async  ()=>{
    
    try {
      const response = await axios({
        method: 'get',
        url: `https://code-stage-master-id8lsqxg3t81.herokuapp.com/artist/${this.state.id}`
      })
      console.log(response.data.result)
      this.setState({ user: response.data.result})
    } catch (error) {
      console.log(error)

    }
  }
  
  componentDidMount() {
    this.Dados()
  };
  renderItem = ({ item }) => (
    <TouchableOpacity 
      style={Styles.listMusics}
      onPress={() => this.props.navigation.navigate('Player')}
    >
      <Image source={Cover} style={Styles.images}/>
      <View>
        <Text style={Styles.city}>{item.city}</Text>
        <Text style={Styles.name}>{item.name}</Text>
        <Text style={Styles.views}>
        <AntDesign name="caretright" size={14} color="#8C31FF" />
           {item.views}
        </Text>
      </View>
      <View style={Styles.more}>
        <Text style={Styles.city} >{item.date}</Text>
        <Feather name="more-horizontal" size={24} color="#8C31FF" style={Styles.moreIcon}/>
      </View>
      
    </TouchableOpacity>
  );

  render (){
    
    return (
      <SafeAreaView>
        <View style={Styles.header}>
    <Text style={Styles.headerText}>Seja bem-vindo, {this.state.user.name}</Text>
        </View>
        <View style={Styles.newMusic}>
          <Image source={Cover} style={Styles.images}/>
          <View>
            <Text style={Styles.city}>Último lançamento</Text>
            <Text style={Styles.name}>Tidal Wave</Text>
            <Text style={Styles.views}>
              novembro 01, 2020
            </Text>
          </View>
        </View>
        <View style={Styles.listPopular}>
          <Text style={Styles.popular}>Minhas musicas</Text>
        </View>
        
        <FlatList
          
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        > 
        </FlatList>
        <View style={{
          alignSelf: 'flex-end',
          marginTop: 330,
          marginBottom: 0,
          marginRight:10
        }}>
          <AntDesign name="pluscircle" size={58} color="#8C31FF" style={Styles.plusCircle}/>
        </View>
      </SafeAreaView>
    );
  }
}
export default () => {
  const navigation = useNavigation()

  return (
      <App navigation={navigation}/>
  )
}

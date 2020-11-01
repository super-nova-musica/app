import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet,Image, SafeAreaView,TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, FontAwesome  } from '@expo/vector-icons';
import Styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Cover from '../../assets/Cover.png'
import Cover2 from '../../assets/cover2.png'

class App extends Component {
  
  state = {
    data: [
      { id: 0, name: 'Feel It Still', city: 'Portugal. The Man', views: '320,7k', date: '2:43'},
      { id: 1, name: 'Feel It Still', city: 'Portugal. The Man', views: '320,7k', date: '2:43'},
      { id: 2,name: 'Feel It Still', city: 'Portugal. The Man', views: '320,7k', date: '2:43'},
    ],
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
          <View style={Styles.inputView}>
            <TextInput
                style={Styles.input}
                label='user'
                placeholder='Pesquisa'
            />
            <AntDesign name="search1" style={Styles.search} size={24} color="#8C8C8C" />
              <Text style={Styles.cancel}>Cancelar</Text>
          </View>
        </View>
        <View style={Styles.newMusic}>
          <Image source={Cover2} style={Styles.images}/>
          <View>
            <Text style={Styles.city}>Último lançamento</Text>
            <Text style={Styles.name}>Feel It Still</Text>
            <Text style={Styles.views}>
              Agosto 17, 2020
            </Text>
          </View>
        </View>
        <View style={Styles.listPopular}>
          <Text style={Styles.popular}>Popular</Text>
          <Text style={Styles.verTodas}>Ver Todas</Text>
        </View>
        
        <FlatList
          
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        > 
        </FlatList>
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

import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    display: 'flex',
    alignItems: 'center'
  },

  header: {
    
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  image: {
    margin: 'auto',
  },
  title: {
    marginTop: '-15%',
    marginBottom: '10%',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: '3%',
    fontFamily: 'Roboto',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '70%',
  },
  button:{
    marginRight: 10,
    marginLeft: 10,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    width: '95%',
    backgroundColor:'#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9F46F1',

  },
  textButton:{
    color: '#9F46F1',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif'

  },
  textOu:{
    fontSize:14,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  textButton2:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif'
  },
  sign:{
    marginBottom: '10%',
    marginTop: 'auto',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }

})

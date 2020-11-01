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
    marginBottom: '5%',
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9F46F1',

  },
  buttonSpotify: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomColor: '#9F46F1',
    },
    buttonPrime:{
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: 5,
    }

})

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
  input:{
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'#fff',
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  button:{
    marginLeft: 10, 
    paddingTop: 10,
    paddingBottom: 10,
    width: '50%',
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
  textButton2:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    paddingTop: 10,
  },
  buttons:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 100,
    marginBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto'
  }


})

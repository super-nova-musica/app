import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
  },
  inputView: {
    display:'flex',
    flexDirection: 'row',
    marginTop: 10,    borderBottomColor: '#B3B3B3',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    // marginRight: 60,
    width: '60%',
    marginLeft: 10,
    marginTop: 30,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    color: '#8C8C8C',
    fontSize: 18,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 10,
  },
  search:{
    marginTop: 30,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderLeftWidth: 0,
    borderBottomLeftRadius: 0,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
  },
  cancel:{
    marginTop: 35,
    fontSize: 18,
    paddingLeft: 20,
    color: '#8C31FF'
  },
  list:{
    display:'flex',
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderBottomColor: '#B3B3B3',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  listMenu: {
    fontSize: 16,
    width: '25%',
    textAlign: 'center',
    color: "#8C8C8C"
  },
  listMenuSalas:{
    fontSize: 16,
    width: '25%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#8C31FF'
  },
  geners:{
    display:'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  },
  images:{
    backgroundColor: 'red',
    width: '48%',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

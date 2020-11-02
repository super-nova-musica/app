import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    display:'flex',
    flexDirection: 'row',
    marginTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#8C8C8C',
  },
  logout:{
    marginRight: 15,
    marginLeft: 'auto'
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
  headerText:{
    fontSize: 18,
    color: '#8C31FF',
    textAlign: 'center',
    
  },
  listPopular:{
    display: 'flex',
    flexDirection: 'row',
    padding: 10,    
    backgroundColor: '#fff',
    marginLeft: 5,
  },
  popular:{
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  verTodas:{
    color: '#8C31FF',
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 10,
  },
  listMusics: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#8C8C8C',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  city:{
    color: '#8C8C8C',
    paddingTop: 2,

  },
  name:{
    color: '#8C31FF',
    paddingTop: 2,

  },
  views:{
    color: '#8C8C8C',
    paddingTop: 2,
  },
  images:{
    marginLeft: 5,
    marginRight: 15
  },
  more:{
    marginLeft: 'auto',
    marginRight: 10,
    display: 'flex',
    alignSelf: "flex-end"
  },
  moreIcon:{
    marginTop: 15
  },
  newMusic: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  plusCircle:{
  }
})

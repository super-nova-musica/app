import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 60,
    marginLeft:'auto',
    marginRight: 'auto',
  },
  playerInfos:{
    display: 'flex',
    flexDirection: 'row',
  },
  playerLike: {
    marginLeft: 20,
    marginTop: 10,
  },
  playerTextView:{
    marginRight: 'auto',
    marginLeft: 'auto',
    flex: 1,
    marginTop: 10,
  },
  playerText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  playerText2:{
    textAlign: 'center',
    color: '#888888'
  },
  playerComment:{
    marginRight: 20,
    marginLeft: 'auto',
    marginTop: 10,
  },
  playerAvalie:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
  },
  playerAvalieView:{
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  playerAvalieItem:{
    textAlign: 'center',
    marginLeft: 15,
    
  },
  playerAvalieText:{
    fontSize:12,
  },
  playerAvalieCircle:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
  playerButtonProxima:{
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 30,
    paddingTop: 5,
    paddingBottom: 5,
    width: '40%',
    backgroundColor:'#9F46F1',
    borderRadius: 30,
    borderWidth: 1,
  },
  playerButtonProximaText:{
    color:'#FFFFFF',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  playerFooter:{
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 30,
    marginRight: 'auto',
    marginTop: 'auto',
    paddingBottom: 30,
    paddingTop: 30,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#B3B3B3',
    backgroundColor: '#FAFAFA'
  },
  playerFooterPlay:{
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 80
  },
  playerFooterMore:{
    marginLeft: 'auto',
    marginRight: 0,
    paddingRight: 30
  }
  
})

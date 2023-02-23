import {View,StyleSheet} from 'react-native'
import Header from './header'
import Body from './body'

export default function Combined(){
     return (
          <>
          <View style={stylezz.body}>
          <Header></Header>
          <Body></Body>
          </View>
          </>
     )
}

const stylezz =StyleSheet.create({
     body:{
          flex:1,
          backgroundColor:'#ffffff',
          overflow:'hidden'
     }
})
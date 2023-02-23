import {View, StyleSheet, ImageBackground, Image,Text} from 'react-native';

export default function Header() {
  return (
    <>
      <View style={stylezz.header}>
        <Image
          style={stylezz.background}
          source={require('./images/bg-main-mobile.png')}></Image>
        <Image style={[stylezz.card1,stylezz.card]} source={require("./images/bg-card-back.png")}></Image>
        <Image style={[stylezz.card2,stylezz.card]} source={require("./images/bg-card-front.png")}></Image>
        <CardFront></CardFront>
        <View style={stylezz.cvv}>
             <Text style={stylezz.cvvText}>000</Text>
        </View>
      </View>
    </>
  );
}

function CardFront(){
 return(
     <>
     <View style={stylezz.cardFront}>
       <View style={stylezz.cardFrontDesign}>
          <View style={stylezz.ball1}></View>
          <View style={stylezz.ball2}></View>
       </View>
       <View style={stylezz.cardFrontContents}>
         <Text style={[stylezz.text,stylezz.cardNumber]}>0000 0000 0000 0000</Text>
         <View style={stylezz.cardFrontDetails}>
              <Text style={[stylezz.text,stylezz.restText]}>YESHWANTH</Text>
              <Text style={[stylezz.text,stylezz.restText]}>00/00</Text>
         </View>
       </View>
     </View>
     </>
 )
}

const stylezz = StyleSheet.create({
  header: {
    height: '30%',
    backgroundColor: 'red',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  card:{
      width:'80%',
      height:'65%',
      position:'absolute',
      borderRadius:10
  },
  card2:{
     bottom:-40,
     left:15
  },
  card1:{
     top:40,
     right:10
  },
  cardFront:{
     position:'absolute',
     height:'60%',
     width:'75%',
     bottom:-35,
     left:25,
     justifyContent:'space-between'
  },
  ball1:{
     height:'85%',
     width:'13%',
     backgroundColor:'white',
     marginHorizontal:10,
     borderRadius:100,
  },
  ball2:{
     height:'55%',
     width:'8%',
     borderWidth:2,
     borderColor:'white',
     borderRadius:100,
  },
  cardFrontDesign:{
     height:'30%',
     flexDirection:'row',
     alignItems:'center',
     marginVertical:'1%'
  },
  cardFrontContents:{
     height:'65%',
     justifyContent:'flex-end',
     alignItems:'center'
},
cardFrontDetails:{
     height:'65%',
     width:'100%',
     justifyContent:'space-between',
     flexDirection:'row',
     paddingHorizontal:25,
     paddingVertical:10
  },
  text:{
     fontWeight:'bold',
     color:'#ffffff',
  },
  cardNumber:{
     fontSize:23,
     fontWeight:'normal'
  },
  restText:{
     fontSize:13
  },
  cvv:{
     top:102,
     right:55,
     position:'absolute'
  },
  cvvText:{
     fontWeight:'bold',
     color:'white'
  }
});

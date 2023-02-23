import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { useState } from 'react';

export default function Body() {
 let [isEnd,setToEnd] = useState(false)
  return (
    <>
      <View style={stylezz.body}>
        {!isEnd?<Field setToEnd={setToEnd}></Field>:<End setToEnd={setToEnd}></End>}
      </View>
    </>
  );
}

function End({setToEnd}){
     return(
          <>
          <View style={stylezz.endBody}>
          <View style={stylezz.endContent}>
           <Text style={stylezz.endText}>THANK YOU!</Text>
           <Text style={stylezz.endText}>We've have addde your credit card details</Text>
           <Text style={stylezz.endText}>Nakku.......! Ungal pannam nottapadum</Text>
          </View>
          <View style={stylezz.buttonView}>
            <TouchableOpacity onPress={()=>{setToEnd(false)}}>
              <View style={stylezz.button}>
               <Text style={stylezz.buttonText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          </>
     )
}

function Field({setToEnd}) {
  return (
    <>
      <View style={stylezz.field}>
        <View style={stylezz.fieldContent}>
          <View style={[stylezz.holderName,stylezz.inputFields]}>
            <Text style={stylezz.text}>CARDHOLDER NAME</Text>
            <TextInput
              placeholder="e.g. YESHWANTH"
              style={stylezz.inputs}
              placeholderTextColor="#a9a7ab"></TextInput>
          </View>
          <View style={[stylezz.cardNumber,stylezz.inputFields]}>
            <Text style={stylezz.text}>CARD NUMBER</Text>
            <TextInput
              placeholder="e.g. 1234 1234 1234 1234"
              style={stylezz.inputs}
              placeholderTextColor="#a9a7ab"></TextInput>
          </View>
          <View style={stylezz.cardDate}>
            <Text style={stylezz.text}>{'EXP.          DATE(MM/YY)            CVV'}</Text>
            <View style={[stylezz.cardDateInputs,stylezz.inputFields]}>
              <TextInput
                placeholder="MM"
                style={[stylezz.inputs, stylezz.dateIn]}
                placeholderTextColor="#a9a7ab"></TextInput>
              <TextInput
                placeholder="YY"
                style={[stylezz.inputs, stylezz.dateIn]}
                placeholderTextColor="#a9a7ab"></TextInput>
              <TextInput
                placeholder="e.g. 123"
                style={[stylezz.inputs, stylezz.cvvIn]}
                placeholderTextColor="#a9a7ab"></TextInput>
            </View>
          </View>
          <View style={stylezz.buttonView}>
            <TouchableOpacity onPress={()=>{setToEnd(true)}}>
              <View style={stylezz.button}>
               <Text style={stylezz.buttonText}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const stylezz = StyleSheet.create({
  body: {
    height: '70%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  field: {
    height: '75%',
    marginVertical: '10%',
    width: '93%',
  },
  fieldContent: {
    flex: 1,
  },
  text: {
    color: '#312a4f',
    fontWeight: 'bold',
    fontSize:15
  },
  inputs: {
    borderColor: '#abaaad',
    borderRadius: 10,
    borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 17,
    paddingHorizontal: 10,
    marginVertical:5
  },
  cardDateInputs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dateIn: {
    width: '22%',
  },
  cvvIn: {
    width: '45%',
  },
  inputFields:{
     marginVertical:10
  },
  buttonView:{
      justifyContent:'center',
      alignItems:'center'
  },
  button:{
     backgroundColor:'#3b2152',
     width:300,
     alignItems:'center',
     borderRadius:10
  },
  buttonText:{
     fontSize:20,
     fontWeight:'bold',
     marginVertical:15,
     color:'white'
  },
  endBody:{
     height: '80%',
     width: '93%',
     marginVertical: '10%',
     justifyContent:'space-between',
  },
  endContent:{
     width:'100%',
     height:'85%',
     justifyContent:'center',
     alignItems:'center'
  },
  endText:{
     color: '#312a4f',
     fontSize:20,
     fontWeight:'bold'
  },
  endImage:{
     height:20,
     width:20
  }
});

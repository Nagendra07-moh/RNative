import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button} from 'react-native';
import tw from 'twrnc';
export default function App() {


  const [modal1,setModal1] = useState(true);
  const [modal2,setModal2] = useState(false);
  const [modal3,setModal3] = useState(false);





  const switch1_2 = ()=>{
    setModal1(!modal1);
    setModal2(!modal2);
  } 
  
  const switch2_3 = ()=>{
    setModal2(!modal2);
    setModal3(!modal3);
  }
  return (
    <View style={tw`flex-1 justify-center items-center `}>

       {/* This is modal-3 */}
      <Modal animationType='fade' transparent={false} visible={modal3}>
         <View style={tw`items-start m-4`}>
            <Button title='Back' color={"red"} onPress={switch2_3} />
          </View>
       <View style={tw`flex-1 justify-center items-center`}>
         <Text style={tw`text-4xl text-red-500`}>Hello to Modal3!!</Text>
       </View>
      </Modal>

        {/* This is modal-2 */}
       <Modal animationType='fade' transparent={false} visible={modal2}>
       <View style={tw`items-start m-4`}>
            <Button title='Back' color={"red"} onPress={switch1_2} />
        </View>
       <View style={tw`flex-1 justify-center items-center`}>
         <Text style={tw`text-4xl text-red-500`}>Hello to Modal2!!</Text>
       </View>
       <View style={tw`m-4`}>
        <Button title='Close Modal1' onPress={switch2_3}/>
       </View>
      </Modal>


        {/* This is modal 1 OPEN-BY-DEFAULT */}
      <Modal animationType='fade' transparent={false} visible={modal1}>
       <View style={tw`flex-1 justify-center items-center`}>
         <Text style={tw`text-4xl text-red-500`}>Hello to Modal1!!</Text>
       </View>
       <View style={tw`m-4`}>
         <Button title='Close Modal1' onPress={switch1_2}/>
       </View>
      </Modal>
        
      <StatusBar style="auto" />
    </View>
  );
}

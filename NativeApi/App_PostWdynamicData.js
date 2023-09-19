import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  FlatList,
  TextInput,
  Button
} from "react-native";



export default App = ()=>{

    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [email,setEmail] = useState('');

    const [nameError,setNameError] = useState(false);
    const [ageError,setAgeError] = useState(false);
    const [emailError,setEmailError] = useState(false);


    const saveData = async () => {
        // console.warn({name,age,email});
        if(!name){
            setNameError(true);
        }else{
            setNameError(false);
        }

        if(!age){
            setAgeError(true);
        }else{
            setAgeError(false);
        }
        if(!email){
            setEmailError(true);
        }else{
            setEmailError(false);
        }


        if(!name || !age || !email){
            return false;
        }
        




        const url = "http://192.168.0.104:3000/users";
        let result = await fetch(url,{
            method:"Post",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({name:name,age:age,email:email})
    
        });
    }

        

    return(
        <View style={{justifyContent:'center',alignItems:"center"}}>
            <Text style={{fontSize:30}}>Post Dynamic Data</Text>
            <TextInput placeholder="Enter Your Name" style={Styles.inputStyle} value={name}  
               onChangeText={(text)=> setName(text)} 
               blurOnSubmit={true}
               selectionColor="red"
            />

            {
                nameError ? <Text style={Styles.errorText}>Please Enter the name!</Text> :null
            }
            <TextInput placeholder="Enter Your Age" style={Styles.inputStyle} value={age}  
               onChangeText={(text)=> setAge(text)} 
               blurOnSubmit={true}
               selectionColor="red"
               
            />
            {
                ageError ? <Text style={Styles.errorText}>Please Enter the Age!</Text> :null
            }
            <TextInput placeholder="Enter Your Email" style={Styles.inputStyle} value={email}  
               onChangeText={(text)=> setEmail(text)} 
               blurOnSubmit={true}
               selectionColor="red"
            />
            {
                emailError ? <Text style={Styles.errorText}>Please Enter the Email!</Text> :null
            }
            <Button title="SaveData" onPress={saveData}  />
      
      
            <StatusBar translucent={false} backgroundColor="grey" />

        </View>
    );
}



const Styles = StyleSheet.create({
    inputStyle:{
        borderColor:'red',
        borderWidth:1,
        height:50,
        fontSize:20,
        width:300,
        alignItems: 'center',
        marginBottom:20,
        padding:10,
        paddingHorizontal:10,
        borderWidth:3,
        borderRadius:10
        
    },
    errorText:{
        color:"red",
        marginRight:150,
        marginBottom:10

    }
})

    
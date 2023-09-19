import { useEffect, useState } from "react";
import { View , Text ,Button,StatusBar} from "react-native";




export default App = () => {
//   const [data, setData] = useState([]);
    const data  ={
        name:"nagendra Rao",
        age:34,
        email:"fasidhfnal@gmail.com",  
    }
  const getApiData = async () => {
    const url = "http://192.168.0.104:3000/users";
    let result = await fetch(url,{
        method:"Post",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(data)

    });
    result = await result.json();
    console.warn(result);

    // console.warn("hey")
    
  };

    return (
        <View style={{alignItems:'center',justifyContent:"center"}}>
            <Text style={{fontSize:30}}>Post Api Call</Text>

            <Button title="Save Data" onPress={getApiData} />
            <StatusBar translucent={false} backgroundColor="white" />
        </View>
    );

}
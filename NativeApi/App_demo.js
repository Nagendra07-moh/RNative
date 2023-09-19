import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";


export default function App() {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = "http://192.168.0.104:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    // console.warn(result);
    if(result){
      setData(result);
    } 
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={Styles.mainView }>
      <Text style={{ fontSize: 20, color: "red" }}>This is API's Data</Text>
      {
        data.length ?
        data.map((x)=> <View><Text>{x.name}</Text></View>): <View><Text>No data!!</Text></View>
      }

      

      <StatusBar translucent={false} backgroundColor="white" />
    </View>
  );
}

const Styles = StyleSheet.create({
  mainView:{ flex: 1,},
  dataWrapper:{
     flex: 1,
  
  }

})
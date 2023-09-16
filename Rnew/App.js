
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tabs = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={Home}/>
        <Tabs.Screen name='Login' component={Login}/>
        <Tabs.Screen name='SignUp' component={SignUp}/>

      </Tabs.Navigator>
      <StatusBar backgroundColor="white" animated={true} />
    </NavigationContainer>
  );
}


const Login = ()=>{
  return(
    <View style={Styles.mainView}>
      <Text style={Styles.mainText}>Login</Text>
    </View>
  )
}

const SignUp = ()=>{
  return(
    <View style={Styles.mainView}>
      <Text style={Styles.mainText}>SignUp</Text>
    </View>
  )
}

const Home = ()=>{
  return(
    <View style={Styles.mainView}>
      <Text style={Styles.mainText}>Home</Text>
    </View>
  )
}





const Styles = StyleSheet.create({
  mainView:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'grey'
  },
  mainText:{
    fontSize:30,
    color :'white',

  }
});
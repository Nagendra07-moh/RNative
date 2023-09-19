
import {useState} from 'react'
import { Text, View ,StyleSheet,StatusBar, TextInput, Button} from 'react-native'

export default  App = () => {
    const  [searchInput,setSearchInput] = useState('');
    const  [data,setData] = useState([]);
    // Api performing the search
    const search = async (input)=>{
        const url = `http://192.168.0.104:3000/users?q=${input}`;
        let result = await fetch(url)
        result = await result.json();
        if(result){
            setData(result)
        }
        // console.warn(input)
    } 
    return (
      <View style={styles.viewS}> 
        <Text style={styles.txtS}> Searching field </Text>
        <TextInput
            style={styles.search}
            onChangeText = {(value) => {setSearchInput(value),search(value)}}
            value={searchInput}
            placeholder="Search Items"
        />
        <Button title ="Search"  />
        {
            data && data.map((item)=><View key={item.id}  style={styles.viewS}>
                <Text style = {styles.txtS}>{item.name}</Text>
            </View>)
        }
        <StatusBar translucent={false}/>
      </View>
    )
  
}


const styles = StyleSheet.create({
    txtS:{
        fontSize:30
    },
    viewS:{
        alignItems:'center'
    },
    search:{
        fontSize:20,
        borderWidth:2,
        borderColor:"red",
        padding:10,
        width:300,
        marginVertical:20,
        borderRadius:10
    }
})

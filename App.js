import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput,FlatList} from 'react-native';
import { version } from 'react-dom';

export default function App() {
    
    const [text, setText] = useState('');
    const [data, setData] = useState([]);
  


    const buttonAdd = () => {
        setData([...data, { key: text }]);
                        

    }
    const buttonClear = () => {
        setData([]);


    }

 
  return (
      <View style={{
          flex: 1, flexDirection: 'column', alignItems: 'center',
          justifyContent: 'space-around', marginTop: 500
      }}>
          <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => setText(text)}
              value={text} />
          <View style={{
              flex: 0, flexDirection: 'row', alignItems: 'center',
              justifyContent: 'space-around'
          }}>
          <Button onPress={buttonAdd} title="ADD" />
              <Button onPress={buttonClear} title="CLEAR" />
              </View>
          <View style={{
              flex: 1, flexDirection: 'column', alignItems: 'center',
              justifyContent: 'space-around'
          }}>
              <Text style={{Color:'blue'}}>SHOPPING LIST</Text>
                <FlatList data  ={data}renderItem={({ item }) => <Text  >{item.key}</Text >}/>
           </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

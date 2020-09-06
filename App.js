import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput,FlatList} from 'react-native';

export default function App() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [answer, setAnswer] = useState('');
    const [data, setData] = useState([]);

 
  return (
    <View style={styles.container}>
          <Text>RESULT: {answer}</Text>
          <StatusBar style="auto" />
          <TextInput keyboardType='number-pad' style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text1 => setText1(text1)} value={text1} />
          <TextInput keyboardType='number-pad' style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text2 => setText2(text2)} value={text2} />
          <View style={{ flex: 0, flexDirection: 'row', allignItems: 'Center', justifyContent: 'space-around' }}>
              <Button onPress={answer => setAnswer(parseInt(text1) + parseInt(text2))} title="+" />
              <Button onPress={answer => setAnswer(parseInt(text1) - parseInt(text2))} title="-" />           
          </View>   
          <View style={{ flex: 0, flexDirection: 'row', allignItems: 'Center', justifyContent: 'space-around' }}>
              <FlatList
                  data={data}
                  renderItem={({ item }) =>
                      <Text>{item.key}</Text>}
              />
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

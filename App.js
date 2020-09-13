import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput,FlatList} from 'react-native';

export default function App() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [answer, setAnswer] = useState('');
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');

    const intialFocus = useRef(null);

    const calculate = operator => {

        const [number1, number2] = [Number(operand1), Number(operand2)];

        if (isNaN(number1) || isNaN(number2)) {
            setResult(0);

        } else {
            let result = 0;
            switch (operator) {
                case '+':
                    result = number1 + number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;

            }
            setResult(result);
            const text = `${ number1 } ${ operator } ${ number2 } = ${ result }`;
            setData([...data, { key: text }]);
        }
        setOperand1('');
        setOperand2('');
        intialFocus.current.focus();



    }
 
  return (
    <View style={styles.container}>
          <Text>RESULT: {result}</Text>
          <StatusBar style="auto" />
          <TextInput ref={intialFocus} keyboardType='number-pad' style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setOperand1(text)} value={operand1} />
          <TextInput ref={intialFocus} keyboardType='number-pad' style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setOperand2(text)} value={operand2} />
          <View style={{ flex: 0, flexDirection: 'row', allignItems: 'Center', justifyContent: 'space-around' }}>
              <Button onPress={() => calculate('+')} title="+" />
              <Button onPress={() => calculate('-')} title="-" />       
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

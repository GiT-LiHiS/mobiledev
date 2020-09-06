import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput,FlatList} from 'react-native';

export default function App() {
    const [number, setNumber] = useState(6);
    const [answer, setAnswer] = useState('');
    const [text, setText] = useState('Guess a number between 1-100');
    const [count, setCount] = useState(0);


    const buttonPressed = () => {

        if (answer < number) {
            setText('Your guess ' + answer + ' was too low')
            setCount(count + 1)
        }


        if (answer > number) {
            setText('Your guess ' + answer + ' was too high')
            setCount(count + 1)
        }

        if (answer == number) {

            Alert.alert('Correct answer in '+ count + ' tries' )

        }
                        

    }


 
  return (
      <View style={styles.container}>
          <Text>{text}</Text>
          <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={answer => setAnswer(answer)}
              value={answer} />
          <Button onPress={buttonPressed}title="Make Guess"/>
          
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

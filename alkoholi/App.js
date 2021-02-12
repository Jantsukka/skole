import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState('');
  const [amount, setAmount] = useState('1');
  const [gender, setGender] = useState('male');
  const [hours, setHours] = useState('1');
  const [promilles, setPromilles] = useState('0');

  function calculate() {
    let result = 0;
    let bottles = amount * 0.33;
    let grams = bottles * 8 * 4.5;
    let burning = weight/10;
    let gramsLeft = grams - burning * hours;
    let resultMale = gramsLeft / (weight * 0.7);
    let resultFemale = gramsLeft / (weight * 0.6);
    if (gender === 'male') {
    result = resultMale;
    } else {
      result = resultFemale;

    }
    setPromilles(result);
  }

  return (
    <View style={styles.container}>
    <View style={styles.field}>
      <Text>Weight</Text>
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      placeholder="Enter your weight"
      value={weight}
      onChangeText={text => setWeight(text)}
      min="0"

        >

      </TextInput>
    </View>
      <View style={styles.field,{zIndex: 10}}>
        <Text>Amount of bottles you have drank (0,33l)</Text>
        <DropDownPicker items={[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 },
          { label: '6', value: 6 },
          { label: '7', value: 7 },
          { label: '8', value: 8 },
          { label: '9', value: 9 },
          { label: '10', value: 10 },
          { label: '11', value: 11 },
          { label: '12', value: 12 },
          { label: '13', value: 13 },
          { label: '14', value: 14 },
          { label: '15', value: 15 },
          { label: '16', value: 16 },
          { label: '17', value: 17 },
          { label: '18', value: 18 },
          { label: '19', value: 19 },
          { label: '20', value: 20 },


        ]}
        containerStyle={{height: 40}}
        onChangeItem={item => setAmount(item.value)}
        zIndex={5000}
        ></DropDownPicker>

        <Text>Time since last drink</Text>
        <DropDownPicker items={[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 },
          { label: '6', value: 6 },
          { label: '7', value: 7 },
          { label: '8', value: 8 },
          { label: '9', value: 9 },
          { label: '10', value: 10 },
          { label: '11', value: 11 },
          { label: '12', value: 12 },
          { label: '13', value: 13 },
          { label: '14', value: 14 },
          { label: '15', value: 15 },
          { label: '16', value: 16 },
          { label: '17', value: 17 },
          { label: '18', value: 18 },
          { label: '19', value: 19 },
          { label: '20', value: 20 },


        ]}
        onChangeItem={item => setHours(item.value)}
        zIndex = {4000}
        ></DropDownPicker>
        <text>Gender</text>
        <RadioForm
          radio_props={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]}
          onPress={(value) => {setGender(value)}}
        >
        </RadioForm>

      </View>
      <View style={styles.field}>
        <Text>Promilles</Text>
        <Text>{(promilles*1).toFixed(2)}</Text>
        <Button onPress={calculate} title="Calculate"></Button>
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
  input: {
    marginTop: 10,
  },
  dropdown:{
    zIndex: 1000,
  },
  field: {
    margin: 10,
  }
});





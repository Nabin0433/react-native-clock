import { StatusBar } from 'expo-status-bar';
//import Header from './Header';
import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Button, Alert,
  ImageBackground
} from 'react-native';
const sec = () => time.getSeconds() * 6 + 'deg';
const time = new Date();
export default function App() {
  return (
      <View style={styles.body}>
      <View style={styles.clock} > 
          <Text style=  {styles.hour} > </Text> 
          <Text style = {styles.min} > </Text>  
        <Text style={styles.sec}> </Text>  
        </View>  
     </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    backgroundColor: 'black',
  },
  clock: {
    display : 'flex',
    justifyContent: 'center',
    alignItems : 'center' ,
    height: 200,
    width : 200,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  safe: {
    backgroundColor : 'orange',
    width : 100 ,
    height :  100 ,
  },
  hour: {
    position: 'absolute',
    width: 18,
    height: 120,
    backgroundColor: 'black',
    transform: [{ rotateZ: time.getHours() * 30 + 'deg'}],
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 40,
    borderTopEndRadius : 80 ,
    borderBottomColor: 'white',
    borderRadius: 100,
  },
  min: {
    position: 'absolute',
    width: 14,
    height: 150,
    backgroundColor: 'green',
    transform: [{ rotateZ: time.getMinutes() * 6 + 'deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 55,
    borderRadius: 100,
    borderBottomColor: 'white',
  },
  sec: {
    position: 'absolute',
    width: 5,
    height: 140,
    backgroundColor: 'yellow',
    transform: [{ rotateZ: sec() }],
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 60,
    borderBottomColor: 'transparent',   
     borderRadius : 100 ,
  },
});





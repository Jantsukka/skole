import React, {useState} from 'react'
import {Pressable, StyleSheet, Text, View,  } from 'react-native'
import Entypo from "@expo/vector-icons/Entypo"
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './style/style'
import Gameboard from './components/GameBoard'



export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Header />
        <Gameboard />
        <Footer />
      </View>
    )
  }


}
  
 
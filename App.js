import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
  return (
  <View style={styles.container}>
  <Text style={{color:'crimson', fontSize:80, textAlign:"center"}}>Hello React-Native!</Text>
  </View>
  );
  }
 }
 const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'yellow',
  alignItems: 'center',
  justifyContent: 'center',
  },
 });



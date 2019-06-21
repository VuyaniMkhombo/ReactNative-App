import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
//import { Button } from 'react-native-paper';


export default class DetailsPage extends Component {
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <View>
        <Text style={styles.welcome}>{item.name}</Text>
        <Card.Cover source={{ uri: item.uri }}  />
        <Button title='Home' onPress={() => this.props.navigation.navigate('Home')}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
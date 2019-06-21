import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { TextInput } from 'react-native';

//class CreateCard extends Component {
//  render() {
//    return (
//      <TextInput
//        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//        editable = {true}
//        maxLength = {40}
//      />
//    );
//  }
//}

export default class CreateCard extends Component {
//  constructor(props) {
//    super(props);
    state = {
      id:0,
      tittle:'',
      name:'',
      uri:''
    }
  

  render() {
    return (
      <View>
        <TextInput placeholder ="ID" style={styles.welcome} onChangeText={(id) => this.setState({id})}
        value={this.state.id}
      ></TextInput>
      <TextInput placeholder ="Tittle" style={styles.welcome} onChangeText={(tittle) => this.setState({tittle})}
        value={this.state.tittle}
      ></TextInput>
      <TextInput placeholder ="Name" style={styles.welcome} onChangeText={(name) => this.setState({name})}
        value={this.state.name}
      ></TextInput>
      <TextInput placeholder ="URI" style={styles.welcome} onChangeText={(uri) => this.setState({uri})}
        value={this.state.uri}
      ></TextInput>
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
    height:40,
    borderColor:'gray',
    borderWidth: 1,
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
    
import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, ScrollView} from 'react-native';
import NewActionButton from './../components/newActionButton';
import CardComponent from '../components/Card';




export default class Home extends Component {
  render() {
    let task = [
      {
        id:0,
        title:'Taj Mahal',
        name:'Kate',
        uri:'https://picsum.photos/200/300?grayscale'

      },

      {
        id:1,
        title:'Eiffel Tower',
        name:'Wim',
        uri:'https://picsum.photos/200/300'

      },

      {
        id:2,
        title:'Colosseum',
        name:'Steve',
        uri:'https://picsum.photos/200'

      },

    ];
    
    return (
      <View>
        <ScrollView>
          <CardComponent cards={task} navigation={this.props.navigation} />
        </ScrollView>
        <NewActionButton navigation={this.props.navigation}/>
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
})
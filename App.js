

import React, {Component} from 'react';
import Home from './src/app/screens/Home';
import CreateCard from './src/app/screens/CreateCard'
import DetailsPage from './src/app/screens/DetailsPage';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider as PaperProvider } from 'react-native-paper';




export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer/>
      </PaperProvider>
        
      
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen:Home
  },
  DetailsPage: {
    screen:DetailsPage
  },
  CreateCard: {
    screen:CreateCard
  },
}, 
  {
    initialRouteName:'Home'
  
});
const AppContainer = createAppContainer(AppNavigator);

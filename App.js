
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './Screens /fb';
import In from './Screens /In';
import { Header } from 'react-native-elements';
export default class App extends React.Component {
  render(){
  return (
    <View>
    <Header
          backgroundColor={'red'}
          centerComponent={{
            text: 'Buzz',
            style: { color: 'black', fontSize: 20, fontWeight: 'bold' },
          }}
        />
        <AppContainer/>
    </View>
  )
  }
}
const tabnavigater=createBottomTabNavigator({
  Facebook:{screen:fb},
  Instagram: {screen:In},
})
const AppContainer=createAppContainer(tabnavigater)

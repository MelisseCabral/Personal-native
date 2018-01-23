import React, { Component } from 'react';
import { AppRegistry,  StyleSheet,  Text,  View, Navigator, Image, TouchableHighlight } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';
import Chat from './Chat';

const deviceW = Dimensions.get('window').width;

const basePx = 375;


function px2dp(px) {
  return px *  deviceW / basePx
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
      </View>
    )
  }
}
//Acess to profile info
class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile
        </Text>
      </View>
    )
  }
}

//List Workouts
class Treinos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Treinos
        </Text>
      </View>
    )
  }
}

//List active conversations


export default class HomeNavegation extends Component {
  state= {
    selectedTab: 'home'
  };
  static navigationOptions = {
    title: '',
    header: null
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          <Profile/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'treinos'}
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="navicon" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="navicon" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'treinos'})}>
          <Treinos/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'chat'}
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="inbox" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="inbox" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'chat'})}>
          <Chat />
        </TabNavigator.Item>
      </TabNavigator>
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

AppRegistry.registerComponent('HomeTab', () => HomeNavegation);
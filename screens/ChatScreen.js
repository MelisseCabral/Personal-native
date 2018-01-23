import React, { Component } from 'react';
import { AppRegistry,  StyleSheet,  Text,  View, Navigator, Image, Button, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
// Gifted Chat
import {GiftedChat} from 'react-native-gifted-chat';
import ChatController from '../controllers/ChatController';
//Icons Awesome Font
import Icon from 'react-native-vector-icons/FontAwesome';

//
import { StackNavigator} from 'react-navigation';

export default class ChatScreen extends Component {
    state = {
      messages: []
    };
    static navigationOptions = {
      title: '',
      header: null
    };
    render() {
      
      return (
        <GiftedChat 
          messages ={this.state.messages }
          onSend = {(message) => {
            ChatController.sendMessage(message);
          }}
          user = {{
            _id: ChatController.getUid,
            name: ''
          }}
        />
      );
    }
    componentDidMount(){
      ChatController.loadMessages((message)=> {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, message)
          };
        });
      });
    }
    componentWillUnmount(){
      ChatController.closeChat();
    }
  }
  ChatScreen.defaultProps = {
    name: 'Hell'
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingTop: 70
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
    userPhoto: {
      width: 175,
      height: 175
    }, optionButton: {
      marginTop: 100,
      paddingTop: 20,
      width: 300
    }
  
  });
  
  AppRegistry.registerComponent('ChatScreen', () => ChatScreen);
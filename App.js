import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { StackNavigator} from 'react-navigation';

import SignUp from './screens/SignUp';
import HomeNavegation from './screens/Home';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import Chat from './screens/Chat';

const Navigation = StackNavigator(
  {
  Login: {screen: LoginScreen},
  Home: {screen: HomeNavegation},
  SignUp: {screen: SignUp},
  Chat: {screen: Chat},
  ChatScreen: {screen: ChatScreen}
  },
  { 
  headerMode: 'screen',
  header: { visible:false },
  }
);


export default Navigation;
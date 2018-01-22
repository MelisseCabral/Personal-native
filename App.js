import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { StackNavigator} from 'react-navigation';

import SignUp from './SignUp';
import HomeNavegation from './Home';
import LoginScreen from './LoginScreen';

const Navigation = StackNavigator(
  {
  Login: {screen: LoginScreen},
  Home: {screen: HomeNavegation},
  SignUp: {screen: SignUp}
  },
  { 
  headerMode: 'screen',
  header: { visible:false },
  }
);


export default Navigation;
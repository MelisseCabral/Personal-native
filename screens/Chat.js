import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator} from 'react-navigation';

export default class Chat extends Component {
    static navigationOptions = {
        header: null
    };
    render() {

      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Inbox
          </Text>
          <TouchableHighlight>
                <Text style={styles.signUpText}> Go to chat screen</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 100
    },
      logo:{
          width: 100,
          height: 100
      },
      input:{
        width: 300,
        height: 40,
        color: '#FFF',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 15,
        marginBottom: 15,
        paddingHorizontal: 10
        
      }, inputForm: {
        paddingTop: 50
      },
      btnText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
        
      }, buttonContainer: {
        paddingVertical: 10
        
      }, signUpTextCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16
  
      }, signUpText: {
        fontSize: 16
      }
  });
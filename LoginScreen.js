import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, StatusBar, TouchableHighlight } from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const{navigate} = this.props.navigation;
    return (
      
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.logoContainer}>
            <Image source={require('./src/images/icon.png')}
            />
        </View>
        <View style={styles.inputForm}>
          <TextInput style={styles.input} 
            underlineColorAndroid='transparent' 
            placeholder='Usuario ou Email'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={() => this.passwordInput.focus()}
            ref={(input)=> this.userInput = input}
             />
          <TextInput style={styles.input} 
          underlineColorAndroid='transparent' 
          placeholder='Senha' 
          secureTextEntry
          ref={(input)=> this.passwordInput = input}
          />

          <Button style={styles.buttonContainer} onPress={() => navigate('Home', {})} title="Entrar" color='#f39c12' />
          <View style={styles.signUpTextCont}>
            <TouchableHighlight
              onPress={() => navigate('SignUp', {})}
            >
              <Text style={styles.signUpText}> Criar Conta </Text>
            </TouchableHighlight>

          </View>
        </View>
      </View>
      

    );
  }
  
}

function loginFunc() {
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d35400',
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
      color: '#FFF',
      fontSize: 16
    }
});
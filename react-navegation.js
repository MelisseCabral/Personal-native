import React from 'react';

import { StackNavigator} from 'react-navigation';
import Login from './Login.js';
import SignUp from './SignUp.js';

const navigation = StackNavigator({
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    Home: {screen: Home}
});

export default navigation;
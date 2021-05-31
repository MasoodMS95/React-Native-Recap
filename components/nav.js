import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feelings from './feelings';
import well from './well';

const Stack = createStackNavigator();

const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='How are you feeling today?'>
                <Stack.Screen
                    name='How are you feeling today?'
                    component={Feelings}
                />
                <Stack.Screen
                    name='Well...'
                    component={well}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Nav;


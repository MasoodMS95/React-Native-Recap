import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const well = ({ route, navigation }) => {
    const { feeling } = route.params;
    return (
        <Text>You are feeling {feeling}.</Text>
    )
};


export default well;
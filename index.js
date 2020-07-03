import React from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './src/Screens/Main';
import HomeScreen from './src/Screens/Home';
import Home from './src/Screens/Home';

const Stack = createStackNavigator();

export default function App(){
    return(

        <NavigationContainer>

            <Stack.Navigator headerMode="none" initialRouteName="Home">

                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}
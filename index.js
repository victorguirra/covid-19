import React from 'react';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './src/Screens/Main';
import HomeScreen from './src/Screens/Home';
import BrazilDataScreen from './src/Screens/BrazilData';
import CountriesDataScreen from './src/Screens/CountriesData';
import PreventionInfosScreen from './src/Screens/PreventionInfos';

const Stack = createStackNavigator();

export default function App(){
    return(

        <NavigationContainer>

            <Stack.Navigator headerMode="none" initialRouteName="Main">

                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="BrazilData" component={BrazilDataScreen} />
                <Stack.Screen name="CountriesData" component={CountriesDataScreen} />
                <Stack.Screen name="PreventionInfos" component={PreventionInfosScreen} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}
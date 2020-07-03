import React from 'react';
import {StatusBar} from 'react-native';
import App from './index';

export default function Main(){
  return(
    <>
      <StatusBar backgroundColor="#03142B" barStyle="light-content"/>
      <App />
    </>
  )
}
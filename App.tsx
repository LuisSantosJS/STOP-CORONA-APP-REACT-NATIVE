import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src';
import ProviderAuth from './src/context/contextRouter';
import ProviderChat from './src/context/contextChat';
export default function App() {
  
  return (
    <ProviderAuth>
      <ProviderChat>
        <StatusBar translucent barStyle="light-content" />
        <Routes />
      </ProviderChat>
    </ProviderAuth>
  );
}
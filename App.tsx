import React from 'react';
import { StatusBar} from 'react-native';
import Routes from './src';
import ProviderAuth from './src/context/contextRouter';
export default function App() {
  return (
    <ProviderAuth>
      <StatusBar translucent barStyle="light-content" />
      <Routes />
    </ProviderAuth>
  );
}
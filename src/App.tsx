import React from 'react';
import Navigator from './navigator';
import {RecoilRoot} from 'recoil';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <RecoilRoot>
      <Navigator />
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
    </RecoilRoot>
  );
}

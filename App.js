
import React from 'react';
import {
  StatusBar,
  SafeAreaView
} from 'react-native';

import Cesta from './src/telas/Cesta/index.js';
import mock from './src/mocks/Cesta.js';

export default function App(){
  return (
    <SafeAreaView style={{flex:1}}>        
        <StatusBar/>
        <Cesta {...mock} />
    </SafeAreaView>
  );
}
  

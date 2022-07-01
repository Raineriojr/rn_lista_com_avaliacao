import React from "react";
import { SafeAreaView, Text } from "react-native";

import { Home } from './src/pages/home';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <Home/>
    </SafeAreaView>
  )
}

export default App;
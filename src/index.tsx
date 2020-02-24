import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
    </>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  console.log(StatusBar.currentHeight);
  return (
      <View style={{height: '100%'
        // marginTop: StatusBar.currentHeight 
      }}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>list</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

export default App;

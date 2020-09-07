import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CppModule1 from '@workspace/react-native-cpp-module1';

const App = () => {
  useEffect(() => {
    CppModule1.multiply(3, 4).then((res) => {
      console.log('result:', res);
    });
  });
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Test</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  }
});

export default App;

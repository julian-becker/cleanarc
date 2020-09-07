import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
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

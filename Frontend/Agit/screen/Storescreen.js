import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my app!</Text>
      <Text style={styles.description}>
        This is the Store screen. You can add your own content here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default StoreScreen;

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainSVContentContainer} style={styles.mainSVStyle}>
        <View style={styles.imageView}>
          <Image source={require('../../assets/AgitLogo.png')}
            style={styles.imageStyling}
            resizeMode='contain'
          />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.subTitle}>Gemte Butikker</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainSVStyle: {
    flex: 1
  },
  mainSVContentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  imageView: {
    flex: 1,
    backgroundColor: 'blue',
    marginHorizontal: 6,
    maxWidth: '100%'
  },
  imageStyling: {
    flex: 1,
    width: '100%',
    height: undefined,
    backgroundColor: 'pink'
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'flex-start'
  },

});

export default HomeScreen;

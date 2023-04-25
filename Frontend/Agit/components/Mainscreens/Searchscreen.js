import React, {useState, useEffect} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import { GOOGLE_API_KEY } from '../../Environments';
import Constants from "expo-constants"
import axios from 'axios';

//navigator.geolocation = require('@react-native-community/geolocation');

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 55.3713664,
  longitude: 10.3972864,
  latitudeDelta: 0.0922, //LATITUDE_DELTA
  longitudeDelta: 0.0421, //LONGITUDE_DELTA
};



const Test_Markers = [
  {
    title: 'Netto',
    coordinate: {
      latitude: 55.37430876144958,
      longitude: 10.427844513940062,
    },
  },
  {
    title: 'Føtex',
    coordinate: {
      latitude: 55.38492200675333,
      longitude: 10.424375723071439,
    },
  },
  {
    title: 'Bilka',
    coordinate: {
      latitude: 55.37759675839189,
      longitude: 10.431609958211329,
    },
  }];

  

const SearchScreen = () => { 
  return (
    
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE} 
        initialRegion={INITIAL_POSITION}
      >
        {}
        {Test_Markers.map(marker =>(
        <Marker coordinate={marker.coordinate} title={marker.title}
          image={require('../Mainscreens/assets/map_marker.png')}
          description='Butikken, Adresse...'
        >  
        </Marker>))}
        </MapView>
      <View style={styles.searchContainer}> 
        <GooglePlacesAutocomplete
          placeholder='Search'
          fetchDetails
          onPress={(data, details = null) => {
            fetchDetails = true
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
      }}
    /> 
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 80,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  }
});

export default SearchScreen;
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

import bilkaLogo from '../Mainscreens/assets/Bilka.png';
import føtexLogo from '../Mainscreens/assets/foetex_logo.png';
import nettoLogo from '../Mainscreens/assets/netto_logo.png';

function getStoreLogo(storeName) {
  switch (storeName) {
    case 'Bilka, Odense M':
      return bilkaLogo;
    case 'Netto, Odense M':
      return nettoLogo;
    case 'Føtex, Odense Sø':
      return føtexLogo;
    default:
      return null;
  }
}

function Item({ item, navigation }) {

  const handleDirectionsPress = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}`;
    Linking.openURL(url);
  }

  const handleSearchPress = () => {
    const { latitude, longitude } = item;
    navigation.navigate('Searchscreen', { latitude, longitude });
  }

  const logo = getStoreLogo(item.name);

  return (
    <View style={styles.listItem}>
      <View style={{alignItems:"center",flex:1}}>
        <TouchableOpacity> 
          {logo && <Image source={logo} style={{height: 75, width: 200, resizeMode: 'contain', marginBottom: 8}} />}
          <Text style={{fontWeight:"bold"}}>{item.name}</Text>
          <Text>{item.position}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.directionsButton} onPress={handleDirectionsPress}>
          <Text style={styles.buttonText}>Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default class Storesscreen extends React.Component {
  state = {
    data:[
        {
            "name": "Bilka, Odense M",  
            "position": "Adr: Niels Bohrs Alle 150",
            "latitude": 55.3846348,
            "longitude": 10.4136788
        },
        {
          "name": "Netto, Odense M",
          "position": "Adr: Cortex Park 12",
          "latitude": 55.3945236,
          "longitude": 10.4048592
      },
      {
          "name": "Føtex, Odense Sø",
          "position": "Adr: Ørbækvej 75, 300",
          "latitude": 55.4025213,
          "longitude": 10.3587688
      },
    ]
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} navigation={this.props.navigation} />}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  directionsButton: {
    height: 30,
    width: 100,
    marginTop: 8,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  logoImage: {
    height: 75,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
  },
  storeName: {
    fontWeight: 'bold',
  },
  storePosition: {},
});
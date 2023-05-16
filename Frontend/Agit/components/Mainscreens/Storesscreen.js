import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function getStoreLogo(storeName) {
  switch (storeName) {
    case 'Bilka, Odense M':
      return require('../Mainscreens/assets/Bilka.png');
    case 'Netto, Odense M':
      return require('../Mainscreens/assets/netto_logo.png');
    case 'Føtex, Odense Sø':
      return require('../Mainscreens/assets/foetex_logo.png');
    default:
      return null;
  }
}

function Item({ item, navigation }) {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [selectedStore, setSelectedStore] = React.useState(null);

  const handleDirectionsPress = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}`;
    Linking.openURL(url);
  };

  const handleFollowPress = () => {
    setIsFollowed(!isFollowed); //Toggle follow store
    const { name, position } = item;
    const favoriteStore = { name, position };
    console.log('Follow Store button pressed', favoriteStore); //Can be used for a potential database or local cache
  };

  const logo = getStoreLogo(item.name); //Retrieving the logo from a store
  const handleLogoPress = () => {
    console.log('Logo Pressed', item.name);
    setSelectedStore(item);
    navigation.navigate('MockedDataScreen', { selectedStore }); //Switch screens when a specific store is pressed.
  };


  return (
    <View style={styles.listItem}>
      <TouchableOpacity style={styles.logoContainer} onPress={handleLogoPress}>
        {logo && (
          <TouchableOpacity onPress={handleLogoPress}>
            <Image
              source={logo}
              style={{
                height: 75,
                width: 200,
                resizeMode: 'contain',
                marginBottom: 8,
              }}
            />
          </TouchableOpacity>
        )}
        <View style={styles.storeInfo}>
          <Text style={styles.storeName}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.directionsButton}
          onPress={handleDirectionsPress}>
          <Text style={styles.buttonText}>Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.followButton}
          onPress={handleFollowPress}>
          {/*Show heart when store is followed*/}
          {isFollowed ? (
            <Image
              source={require('../Mainscreens/assets/heart.png')}
              style={{ width: 20, height: 20 }}
            />
          ) : (
            <Text style={styles.buttonText}>Follow Store</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default class Storesscreen extends React.Component {
  state = {
    data: [
      {
        name: 'Bilka, Odense M',
        position: 'Adr: Niels Bohrs Alle 150',
        latitude: 55.3846348,
        longitude: 10.4136788,
      },
      {
        name: 'Netto, Odense M',
        position: 'Adr: Cortex Park 12',
        latitude: 55.3945236,
        longitude: 10.4048592,
      },
      {
        name: 'Føtex, Odense Sø',
        position: 'Adr: Ørbækvej 75, 300',
        latitude: 55.4025213,
        longitude: 10.3587688,
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} navigation={this.props.navigation} />}
          keyExtractor={item => item.name}
          contentContainerStyle={{ marginTop: 0 }} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 24,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoContainer: {
    flex: 1,
    marginRight: 16,
  },
  logo: {
    height: 75,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  infoContainer: {
    flex: 1,
  },
  storeName: {
    fontWeight: 'bold',
  },
  position: {
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 90,
  },
  directionsButton: {
    height: 30,
    width: 120,
    marginBottom: 8,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followButton: {
    height: 30,
    width: 120,
    backgroundColor: '#4CD964',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
});
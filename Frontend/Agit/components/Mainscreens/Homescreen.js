import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native';

const DATA = [
  {
      id: '1',
      title: 'First Item',
      price: '9,99'
  },
  {
      id: '2',
      title: 'Second Item',
      price: '9,99'
  },
  {
      id: '3',
      title: 'Third Item',
      price: '9,99'
  },
  {
      id: '4',
      title: '4 Item',
      price: '9,99'
  },
  {
      id: '5',
      title: '5 Item',
      price: '9,99'
  },
  {
      id: '6',
      title: '6 Item',
      price: '9,99'
  },
];

const HomeScreen = () => {

  const { windowHeight, windowWidth } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainSVContentContainer} style={styles.mainSVStyle}>
        <View style={{
          backgroundColor: 'blue', width: windowWidth, height: 300,
        }}>
          <Image source={require('../../assets/AgitLogo.png')}
            style={{ backgroundColor: 'black', width: windowWidth, maxHeight: 300, }}
            resizeMode='cover'
          />
        </View>
        <View style={styles.borderLineView} />
        <View style={styles.subTitleBox}>
          <Text style={styles.subTitle}>Gemte Butikker</Text>
        </View>
        <FlatList
          horizontal
          style={styles.discountsList}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} price={item.price} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.borderLineView} />
        <View style={styles.subTitleBox}>
          <Text style={styles.subTitle}>Netto</Text>
        </View>
        <FlatList
          horizontal
          style={styles.discountsList}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} price={item.price} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.borderLineView} />
        <View style={styles.subTitleBox}>
          <Text style={styles.subTitle}>Føtex</Text>
        </View>
        <FlatList
          horizontal
          style={styles.discountsList}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} price={item.price} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.borderLineView} />
        <View style={styles.subTitleBox}>
          <Text style={styles.subTitle}>Bilka</Text>
        </View>
        <FlatList
          horizontal
          style={styles.discountsList}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} price={item.price} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

function Item({ title, price, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Storescreen')}>
      <View style={styles.discountItem}>
        <View style={styles.discountItemImageView}>
          <Image source={require('../../assets/adaptive-icon.png')}
            style={styles.discountItemImage}
            resizeMode='cover'
          />
        </View>
        <Text style={styles.discountItemText}>{title}</Text>
        <Text style={styles.discountItemText}>{price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainSVStyle: {
    flex: 1
  },
  mainSVContentContainer: {
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3b666',
  },
  subTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 2
  },
  discountsList: {
    marginBottom: 2,
  },
  discountItem: {
    width: 100,
    height: 130,
    alignContent: 'center',
    justifyContent: 'center',
  },
  discountItemImage: {
    maxWidth: 80,
    maxHeight: 80,
    alignSelf: 'center',
    backgroundColor: 'yellow'
  },
  discountItemImageView: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  discountItemText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  borderLineView: {
    borderBottomWidth: 3,
    borderColor: '#839D69',
  }
});

export default HomeScreen;

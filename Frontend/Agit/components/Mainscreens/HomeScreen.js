import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native';

const productData = [
  {
    id: '1',
    title: 'BANANER',
    price: '2,75',
    image: require('../../assets/ProductMockImages/banana.png')
  },
  {
    id: '2',
    title: 'MINIMÆLK 0,4% FEDT',
    price: '11,95',
    image: require('../../assets/ProductMockImages/Milk.png')
  },
  {
    id: '3',
    title: 'SKRABEÆG M/L',
    price: '20,00',
    image: require('../../assets/ProductMockImages/Egg.png')
  },
  {
    id: '4',
    title: 'HAMBURGERRYG I SKIVER',
    price: '17,50',
    image: require('../../assets/ProductMockImages/Hamburgerryg.png')
  },
  {
    id: '5',
    title: 'PEPSI MAX',
    price: '15,00',
    image: require('../../assets/ProductMockImages/PepsiMax.png')
  },
  {
    id: '6',
    title: 'YOGHURTBOLLER',
    price: '15,00',
    image: require('../../assets/ProductMockImages/YoghurtBoller.png')
  },
];

const SavedShopData = [
  {
    id: '1',
    addrs: 'Roersvej 33A, 5000 Odense',
    image: require('../../assets/nettoSmall.png')
  },
  {
    id: '2',
    addrs: 'Vesterbro 39-51, 5000 Odense',
    image: require('../../assets/fotexSmall.png')
  },
  {
    id: '3',
    addrs: 'Niels Bohrs Alle 150, 5230 Odense',
    image: require('../../assets/bilkaSmall.png')
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
          data={SavedShopData}
          renderItem={({ item }) => <SavedShopItem addrs={item.addrs} image={item.image} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.borderLineView} />
        <View style={styles.subTitleBox}>
          <Text style={styles.subTitle}>Netto</Text>
        </View>
        <FlatList
          horizontal
          style={styles.discountsList}
          data={productData}
          renderItem={({ item }) => <DiscountItem title={item.title} price={item.price} image={item.image} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.borderLineView} />
        <View style={styles.subTitleBox}>
          <Text style={styles.subTitle}>Føtex</Text>
        </View>
        <FlatList
          horizontal
          style={styles.discountsList}
          data={productData}
          renderItem={({ item }) => <DiscountItem title={item.title} price={item.price} image={item.image} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.borderLineView} />
        <View style={styles.subTitleBox}>
          <Text style={styles.subTitle}>Bilka</Text>
        </View>
        <FlatList
          horizontal
          style={styles.discountsList}
          data={productData}
          renderItem={({ item }) => <DiscountItem title={item.title} price={item.price} image={item.image} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

function DiscountItem({ title, price, image, }) {
  return (
    <TouchableOpacity>
      <View style={styles.discountItem}>
        <View style={styles.discountItemImageView}>
          <Image source={image}
            style={styles.discountItemImage}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.discountItemText} numberOfLines={2}>{title}</Text>
        <Text style={styles.discountItemPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  )
}

function SavedShopItem({ addrs, image, }) {
  return (
    <TouchableOpacity>
      <View style={styles.discountItem}>
        <View style={styles.discountItemImageView}>
          <Image source={image}
            style={styles.discountItemImage}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.discountItemText} numberOfLines={3}>{addrs}</Text>
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
    height: 137,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  discountItemImage: {
    maxWidth: 74,
    maxHeight: 74,
    alignSelf: 'center',
    borderRadius: 6,
  },
  discountItemImageView: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#03a43e',
    borderWidth: 2,
    borderRadius: 6,
  },
  discountItemText: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center'
  },
  discountItemPrice: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  borderLineView: {
    borderBottomWidth: 3,
    borderColor: '#03a43e',
  }
});

export default HomeScreen;

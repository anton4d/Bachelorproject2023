import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const MOCKED_PRODUCTS_DATA = [
  {
    id: 1,
    image: require('../Mainscreens/assets/mælk.png'),
    title: 'Mælk',
    description: 'Hvorfor var mælken så trist?\nFordi den blev ved med at få tæsk af flødeskummet.',
  },
  {
    id: 2,
    image: require('../Mainscreens/assets/ost.png'),
    title: 'Ost',
    description: 'Hvorfor blev osten arresteret? Fordi den var involveret i en stinky operation.',
  },
  {
    id: 3,
    image: require('../Mainscreens/assets/havregryn.jpg'),
    title: 'Havregryn',
    description: 'Hvordan får man en havregrød til at grine?\nMan giver den en havre-latter!',
  },
  {
    id: 4,
    image: require('../Mainscreens/assets/kylle.jpg'),
    title: 'Chicken',
    description: 'Hvorfor krydser kyllingen vejen?\nFor at komme til kyllingebrystet på den anden side!',
  },
  {
    id: 5,
    image: require('../Mainscreens/assets/lillekage.jpg'),
    title: 'Cookies',
    description: 'En cookie så sød og rund, kan give dig en lækkerbid af en mund\nMen pas på, hvis du spiser for mange,\nså kan bukserne stramme lidt og klemme og krange.',
  },
];

const MockedDataScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={item.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCKED_PRODUCTS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666666',
  },
});

export default MockedDataScreen;
